import { useRef, useState } from 'react'
import AdaptableCard from '@/components/shared/AdaptableCard'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import DoubleSidedImage from '@/components/shared/DoubleSidedImage'
import { FormItem } from '@/components/ui/Form'
import Dialog from '@/components/ui/Dialog'
import Upload from '@/components/ui/Upload'
import { HiEye, HiTrash } from 'react-icons/hi'
import cloneDeep from 'lodash/cloneDeep'
import { Field, FieldProps, FieldInputProps, FormikProps } from 'formik'
import { Button } from '@/components/ui'
import AddEditNodeForm from '../components/AddEditNodeForm'


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
        Object.keys(record).forEach((key:string) =>{
            data[key] = record[key]
        }) 
        handleClose()
       console.log('form submit',record,{...data,...record})
        
    };
 
    const onSubmitBtn = ()=>{
        // @ts-ignore
        console.log(formRef.current.values)

        let formaData =  JSON.parse(JSON.stringify(data))
        delete formaData.id
        delete formaData.children
        delete formaData.color
        delete formaData.isExpanded

        // formRef.current.setFieldTouched('name',true)
        // formRef.current.setFieldTouched('hour',true)
        // @ts-ignore
        formRef.current.handleSubmit()
    }
    const ViewElement = ({ data }: TreeProps) => {

        return (

            <div className='viewElement'> 
                <AddEditNodeForm
                    ref={formRef}
                    handleSubmit={handleSubmit}
                    data={JSON.stringify(data)}
                />
                <div>
                    <Button
                        size="sm"
                        className="ltr:mr-2 rtl:ml-2"
                        onClick={handleClose}
                        variant='default'
                    >
                        Close
                    </Button>
                    <Button
                        size="sm"
                        className="ltr:mr-2 rtl:ml-2"
                        onClick={onSubmitBtn}
                        variant='solid'
                    >
                        Submit
                    </Button>
                </div>
            </div>
        )
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
                    <div className='nodeName' onClick={()=>console.log(data)}> {data.name} </div>
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
                />}
            />
        </>

    );
};

const FormTree = (props: TaskImagesProps) => {
    return (
        <AdaptableCard className='mb-4'>
            <h5>Form Tree</h5>
            <p className='mb-6'>Add or change image for the task</p>
            <FormItem>
                {treeData2.map((data, index) => <Tree data={data} key={index} />)}

                {/* <FTree data={reporting} title="reporting" /> */}
            </FormItem>

        </AdaptableCard>
    );
};

export default FormTree;







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
                    "id": "9_10",
                    "name": "9_10",
                    "hour": "09:00 - 10:00",
                    children: [
                        {
                            "id": "9_10_01",
                            "name": "Fix login issue",
                            "description": "Resolved bug causing login failures.",
                            "category": "Development",
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
                            "category": "Meetings",
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
                            "category": "Code Review",
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
                    children: [
                        {
                            "id": "10_11_01",
                            "name": "Research new feature",
                            "description": "Explored APIs for implementing user authentication.",
                            "category": "Research",
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
                            "category": "Documentation",
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
                            "category": "Break",
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
                    children: [
                        {
                            "id": "11_12_01",
                            "name": "Write unit tests",
                            "description": "Implemented tests for the login module.",
                            "category": "Testing",
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
                            "category": "Planning",
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
                            "category": "Communication",
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

const reporting = {
    "id": 'root',
    "notes": {
        "id": "notes",
        "question": "what to do in non-potential time"
    },
    "work": [
        {
            "id": "9_10",
            "title": "work",
            "hour": "09:00 - 10:00",
            "tasks": [
                {
                    "id": "9_10_01",
                    "title": "Fix login issue",
                    "description": "Resolved bug causing login failures.",
                    "category": "Development",
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
                    "title": "Team standup meeting",
                    "description": "Daily sync-up with the team.",
                    "category": "Meetings",
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
                    "title": "Review pull requests",
                    "description": "Reviewed and approved 2 pull requests.",
                    "category": "Code Review",
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
            "hour": "10:00 - 11:00",
            "tasks": [
                {
                    "id": "10_11_01",
                    "title": "Research new feature",
                    "description": "Explored APIs for implementing user authentication.",
                    "category": "Research",
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
                    "title": "Update project documentation",
                    "description": "Added details for the upcoming sprint.",
                    "category": "Documentation",
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
                    "title": "Break",
                    "description": "Quick coffee break.",
                    "category": "Break",
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
            "hour": "11:00 - 12:00",
            "tasks": [
                {
                    "id": "11_12_01",
                    "title": "Write unit tests",
                    "description": "Implemented tests for the login module.",
                    "category": "Testing",
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
                    "title": "Plan sprint backlog",
                    "description": "Defined user stories and priorities for the next sprint.",
                    "category": "Planning",
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
                    "title": "Reply to emails",
                    "description": "Responded to client queries and internal communications.",
                    "category": "Communication",
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

    ]
}
