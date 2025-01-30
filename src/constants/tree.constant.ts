export const treeRawData: INode[] = [{
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
export const treeRawData2 = {
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
export const rowNestedFormData = {
    id: '',
    name: '',
    children: [],
    isExpanded: false,
    color: '',
    description: '',
    category: '',
    status: '',
    time_spent: '',
    wasted_time: '',
    focus_rate: '',
    satisfaction_rate: '',
    reason_for_satisfaction: '',
    notes: '',
    hour: '',
    childFormType: '',
}


export const childFormFields: IChildFormField = {
    '8': {
        name: { title: "name" }, description: { title: "description",type: "textarea", },
        category: {
            title: "category",
            type: "select",
            option: [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
            ]
        },
        status: { 
            title: "status",
            type: "radio",
            option: [
                { label: 'Pending', value: '0' },
                { label: 'Finish', value: '1' },
                { label: 'Delay', value: '2' },
            ]
        }, 
        time_spent: { title: "time_spent",type: "number",max_length:2 }, 
        wasted_time: { title: "wasted_time",type: "number",max_length:2 }, 
        focus_rate: { title: "focus_rate",type: "number", max_length:2}, 
        satisfaction_rate: { title: "satisfaction_rate",type: "number",max_length:2 }, 
        reason_for_satisfaction: { title: "reason_for_satisfaction"  }, 
        notes: { title: "notes",type: "date", }
    },
    '5': {
        name: { title: "name" },  
        hour: { title: "hour"  },  
    },
    
    '4': {
        name: { title: "name" }, description: { title: "description",type: "textarea", },
        category: {
            title: "category",
            type: "select",
            option: [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
            ]
        },
        status: { 
            title: "status",
            type: "radio",
            option: [
                { label: 'Pending', value: '0' },
                { label: 'Finish', value: '1' },
                { label: 'Delay', value: '2' },
            ]
        }, 
        time_spent: { title: "time_spent",type: "number",max_length:2 }, 
        wasted_time: { title: "wasted_time",type: "number",max_length:2 }, 
        focus_rate: { title: "focus_rate",type: "number", max_length:2}, 
        satisfaction_rate: { title: "satisfaction_rate",type: "number",max_length:2 }, 
        reason_for_satisfaction: { title: "reason_for_satisfaction"  }, 
        notes: { title: "notes",type: "date", }
    }
}