import { useEffect, useRef, useState } from 'react'
import AdaptableCard from '@/components/shared/AdaptableCard'
import { FormItem } from '@/components/ui/Form'
import Dialog from '@/components/ui/Dialog'
import { ViewElement } from './AddEditTaskModalComponents'
import { getTasks, useAppDispatch, useAppSelector } from '../store'
import { apiPutTask } from '@/services/SalesService'


const Tree = ({ data }: TreeProps) => {
    const isChildren = data.children && data.children.length > 0;
    const [isExpanded, setIsExpanded] = useState(data.isExpanded);
    const [showDialog, setShowDialog] = useState(false);
    const formRef = useRef(null)
    const onAction = () => {
        if (isExpanded) {
            setIsExpanded(false);
            data.isExpanded = false;
        } else {
            setIsExpanded(true);
            data.isExpanded = true;
        }
    };

    const handleClose = () => setShowDialog(false);
    const handleSubmit = (record: NodeFormSchema) => {
        const updateTask = async (data: any) => {
            const response = await apiPutTask<boolean, FormModel>(data)
            console.log(response)
            return response.data
        }
        const updateData = async () => {
            const success = await updateTask({ ...data, ...record })
            if (success) {
                console.log('update success')
                Object.keys(record).forEach((key: string) => {
                    // @ts-ignore
                    data[key] = record[key]
                })
            } else {
                console.log('not update')
            }
        }
        updateData()
        // Object.keys(record).forEach((key: string) => {
        //     // @ts-ignore
        //     data[key] = record[key]
        // })
        handleClose()
    };

    const onSubmitBtn = () => {
        // @ts-ignore 

        let formaData = JSON.parse(JSON.stringify(data))
        delete formaData.id
        delete formaData.children
        delete formaData.color
        delete formaData.isExpanded

        // formRef.current.setFieldTouched('name',true)
        // formRef.current.setFieldTouched('hour',true)
        // @ts-ignore
        formRef.current.handleSubmit()
    }

    return (
        <>
            <div className='nodeContainer'>
                <div className='nodeBoxVLine' />

                {
                    data.id !== "root" && <><div className='nodeBoxHLine' /> <div className='nodeBoxHLine2' /> </>
                }

                <div className='nodeBox'>
                    <div className='beforeTitle'>
                        <div className='bt-inner' onClick={() => setShowDialog(true)}>✒️</div>
                    </div>
                    <div className='nodeName' onClick={() => console.log(data)}> {data.name} </div>
                    <div className='afterTitle'>
                        {isChildren &&
                            (isExpanded ? (
                                <span onClick={onAction}>➖</span>
                            ) : (
                                <span onClick={onAction}>➕</span>
                            ))}
                    </div>
                </div>

                <div className='child-tree'>

                    {isChildren && isExpanded && data.children && (
                        <>
                            {data.children.map(i => {
                                return <Tree data={i} key={`${i.id}`} />;
                            })}
                        </>
                    )}
                </div>
            </div>
            <Dialog
                height={'auto'}
                isOpen={showDialog}
                onClose={() => setShowDialog(false)}
                children={<ViewElement
                    data={data}
                    formRef={formRef}
                    handleSubmit={(record: NodeFormSchema) => handleSubmit(record)}
                    handleClose={handleClose}
                    onSubmitBtn={onSubmitBtn}
                />}
            />
        </>

    );
};

const LoadTree = ({ treeNodes }: { treeNodes: string }) => {
    let data: any = [] 
        try {
            data = JSON.parse(treeNodes)
        } catch (error) {
            console.log(error)
            data = []
        }  
    return (
        <>
            {data.map((data: INode, index: number) => <Tree data={data} key={index} />)}
        </>
    )
}
const TreeForm = () => {
    const dispatch = useAppDispatch()
    let [treeNodes, setTreeNodes] = useState<INode[]>(treeData2)

    const TaskListdata = useAppSelector(
        (state) => state.taskList.data.taskList
    ) || []
    const fetchData = () => {
        dispatch(getTasks({ pageIndex: 1, pageSize: 15, sort: { order: '', key: '' }, query: "", filterData: {} }))
    }
    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        const treeObject: INode[] = [
            {
                id: "00",
                name: "Task Tree",
                color: "#FF5733",
                // @ts-ignore
                children: TaskListdata.filter((task) => `${task.id}`.length == 5)
            }
        ]
        setTreeNodes(treeObject)
    }, [TaskListdata])


    const test = () => {
        console.log(TaskListdata)
    }
    return (
        <AdaptableCard className='mb-4'>

            <p className='mb-6' onClick={test}>Add or change tasks from the task tree</p>
            <FormItem>
                <LoadTree
                    treeNodes={JSON.stringify(treeNodes)}
                />
            </FormItem>

        </AdaptableCard>
    );
};

export default TreeForm;







const treeData = {
    id: "root",
    name: "Root Folder",
    parentId: null,
    color: "#FF5733", // Unique color for the root node
    children: [
        {
            id: "folder1",
            name: "Folder 1",
            parentId: "root",
            color: "#33FF57", // Unique color for Folder 1
            children: [
                {
                    id: "file1",
                    name: "File 1",
                    parentId: "folder1",
                    color: "#3375FF", // Unique color for File 1
                    children: [],
                },
                {
                    id: "folder1-1",
                    name: "Folder 1-1",
                    parentId: "folder1",
                    color: "#FF33A1", // Unique color for Folder 1-1
                    children: [
                        {
                            id: "file1-1-1",
                            name: "File 1-1-1",
                            parentId: "folder1-1",
                            color: "#FFC133", // Unique color for File 1-1-1
                            children: [],
                        },
                        {
                            id: "folder1-1-1",
                            name: "Folder 1-1-1",
                            parentId: "folder1-1",
                            color: "#33FFF6", // Unique color for Folder 1-1-1
                            children: [
                                {
                                    id: "file1-1-1-1",
                                    name: "File 1-1-1-1",
                                    parentId: "folder1-1-1",
                                    color: "#A133FF", // Unique color for File 1-1-1-1
                                    children: [],
                                },
                                {
                                    id: "folder1-1-1-1",
                                    name: "Folder 1-1-1-1",
                                    parentId: "folder1-1-1",
                                    color: "#FF5733", // Unique color for Folder 1-1-1-1
                                    children: [
                                        {
                                            id: "file1-1-1-1-1",
                                            name: "File 1-1-1-1-1",
                                            parentId: "folder1-1-1-1",
                                            color: "#33FF9E", // Unique color for File 1-1-1-1-1
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "folder2",
            name: "Folder 2",
            parentId: "root",
            color: "#FF3333", // Unique color for Folder 2
            children: [
                {
                    id: "file2-1",
                    name: "File 2-1",
                    parentId: "folder2",
                    color: "#3333FF", // Unique color for File 2-1
                    children: [],
                },
                {
                    id: "file2-2",
                    name: "File 2-2",
                    parentId: "folder2",
                    color: "#33FF33", // Unique color for File 2-2
                    children: [],
                },
            ],
        },
        {
            id: "folder3",
            name: "Folder 3",
            parentId: "root",
            color: "#FF6633", // Unique color for Folder 3
            children: [
                {
                    id: "file3-1",
                    name: "File 3-1",
                    parentId: "folder3",
                    color: "#66FF33", // Unique color for File 3-1
                    children: [],
                },
            ],
        },
    ],
};


const treeData2: INode[] = [{
    id: "root",
    name: "Root Folder",
    color: "#FF5733", // Unique color for the root node
    children: [
        {
            id: "work",
            name: "work",
            color: "#FF6633", // Unique color for Folder 3
            children: [

                {
                    "id": "09_10",
                    "name": "09_10",
                    "hour": "09:00 - 10:00",
                    'childFormType': "taskForm",
                    children: [
                        {
                            "id": "09_10_01",
                            "name": "Fix login issue",
                            "description": "Resolved bug causing login failures.",
                            "category": "1",
                            "status": "Completed",
                            "time_spent": "20 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        },
                        {
                            "id": "09_10_02",
                            "name": "Team standup meeting",
                            "description": "Daily sync-up with the team.",
                            "category": "1",
                            "status": "Completed",
                            "time_spent": "30 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        },
                        {
                            "id": "09_10_03",
                            "name": "Review pull requests",
                            "description": "Reviewed and approved 2 pull requests.",
                            "category": "0",
                            "status": "Completed",
                            "time_spent": "10 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        }
                    ]
                },
                {
                    "id": "10_11",
                    "name": "10_11",
                    "hour": "10:00 - 11:00",
                    'childFormType': "taskForm",
                    children: [
                        {
                            "id": "10_11_01",
                            "name": "Research new feature",
                            "description": "Explored APIs for implementing user authentication.",
                            "category": "1",
                            "status": "In Progress",
                            "time_spent": "40 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        },
                        {
                            "id": "10_11_02",
                            "name": "Update project documentation",
                            "description": "Added details for the upcoming sprint.",
                            "category": "2",
                            "status": "Completed",
                            "time_spent": "15 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        },
                        {
                            "id": "10_11_03",
                            "name": "Break",
                            "description": "Quick coffee break.",
                            "category": "0",
                            "status": "Completed",
                            "time_spent": "5 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        }
                    ]
                },
                {
                    "id": "11_12",
                    "name": "11_12",
                    "hour": "11:00 - 12:00",
                    'childFormType': "taskForm",
                    children: [
                        {
                            "id": "11_12_01",
                            "name": "Write unit tests",
                            "description": "Implemented tests for the login module.",
                            "category": "1",
                            "status": "Completed",
                            "time_spent": "30 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        },
                        {
                            "id": "11_12_02",
                            "name": "Plan sprint backlog",
                            "description": "Defined user stories and priorities for the next sprint.",
                            "category": "2",
                            "status": "Completed",
                            "time_spent": "20 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        },
                        {
                            "id": "11_12_03",
                            "name": "Reply to emails",
                            "description": "Responded to client queries and internal communications.",
                            "category": "0",
                            "status": "Completed",
                            "time_spent": "10 mins",
                            "wasted_time": "10 mins",
                            "focus_rate": "",
                            "satisfaction_rate": "",
                            "reason_for_satisfaction": "",
                            "notes": ""
                        }
                    ]
                },
            ],
        },
    ],
}];


