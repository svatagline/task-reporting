let data = [
    {
        "id": "09_10",
        "name": "09:00 am- 10:00 am",
        "hour": "09:00 am- 10:00 am",
        "children": [
            {
                "id": "09_10_01",
                "name": "management",
                "description": "Task reporting formate set as new formate",
                "category": "b",
                "status": "-",
                "time_spent": "30 min",
                "wasted_time": "-",
                "focus_rate": "-",
                "satisfaction_rate": "0",
                "reason_for_satisfaction": "",
                "notes": ""
            },
            {
                "id": "09_10_02",
                "name": "programming",
                "description": " ",
                "category": "a",
                "status": "-",
                "time_spent": "25",
                "wasted_time": "5",
                "focus_rate": "-",
                "satisfaction_rate": "5",
                "reason_for_satisfaction": "speed issue",
                "notes": "add/remove sub task from tree node, typescript"
            }
        ],
        "parent_id": 0
    },
    {
        "id": "09_10_01",
        "name": "  management. sadsads",
        "description": "<p>Task reporting formate set as new formate</p>",
        "category": "b",
        "status": "-",
        "time_spent": "30 min",
        "wasted_time": "-",
        "focus_rate": "-",
        "satisfaction_rate": "0",
        "reason_for_satisfaction": "dd",
        "notes": "Wed Jan 08 2025 00:00:00 GMT+0530 (India Standard Time)",
        "parent_id": "09_10",
        "childFormType": "8"
    },
    {
        "id": "09_10_02",
        "name": "programming",
        "description": " ",
        "category": "a",
        "status": "-",
        "time_spent": "25",
        "wasted_time": "5",
        "focus_rate": "-",
        "satisfaction_rate": "5",
        "reason_for_satisfaction": "speed issue",
        "notes": "add/remove sub task from tree node, typescript",
        "parent_id": "09_10"
    },
    {
        "id": "10_11",
        "name": "10:00 am- 11:00 am",
        "hour": "10:00 am- 11:00 am",
        "children": [
            {
                "id": "10_11_01",
                "name": "programming",
                "description": " ",
                "category": "a",
                "status": "-",
                "time_spent": "25",
                "wasted_time": "5",
                "focus_rate": "-",
                "satisfaction_rate": "5",
                "reason_for_satisfaction": "speed issue",
                "notes": "add/remove sub task from tree node, typescript"
            }
        ],
        "parent_id": 0
    },
    {
        "id": "10_11_01",
        "name": "programming",
        "description": " ",
        "category": "a",
        "status": "-",
        "time_spent": "25",
        "wasted_time": "5",
        "focus_rate": "-",
        "satisfaction_rate": "5",
        "reason_for_satisfaction": "speed issue",
        "notes": "add/remove sub task from tree node, typescript",
        "parent_id": "10_11"
    },
    {
        "id": "11_12",
        "name": "11:00 am- 12:00 pm",
        "hour": "11:00 am- 12:00 pm",
        "children": [
            {
                "id": "11_12_01",
                "name": "programming",
                "description": " ",
                "category": "a",
                "status": "-",
                "time_spent": "60",
                "wasted_time": "0",
                "focus_rate": "-",
                "satisfaction_rate": "10",
                "reason_for_satisfaction": "",
                "notes": "add/remove sub task from tree node"
            }
        ],
        "parent_id": 0
    },
    {
        "id": "11_12_01",
        "name": "programming",
        "description": " ",
        "category": "a",
        "status": "-",
        "time_spent": "60",
        "wasted_time": "0",
        "focus_rate": "-",
        "satisfaction_rate": "10",
        "reason_for_satisfaction": "",
        "notes": "add/remove sub task from tree node",
        "parent_id": "11_12"
    },
    {
        "id": "12_01",
        "name": "12:00 am- 01:00 am",
        "hour": "12:00 am- 01:00 am",
        "children": [
            {
                "id": "12_01_01",
                "name": "programming",
                "description": " ",
                "category": "a",
                "status": "-",
                "time_spent": "60",
                "wasted_time": "0",
                "focus_rate": "-",
                "satisfaction_rate": "5",
                "reason_for_satisfaction": "lack of typescript knowledge",
                "notes": "typescript"
            }
        ],
        "parent_id": 0
    },
    {
        "id": "12_01_01",
        "name": "programming",
        "description": " ",
        "category": "a",
        "status": "-",
        "time_spent": "60",
        "wasted_time": "0",
        "focus_rate": "-",
        "satisfaction_rate": "5",
        "reason_for_satisfaction": "lack of typescript knowledge",
        "notes": "typescript",
        "parent_id": "12_01"
    },
    {
        "id": "02_03",
        "name": "02:00 pm- 03:00 pm",
        "hour": "02:00 pm- 03:00 pm",
        "children": [
            {
                "id": "02_03_01",
                "name": "programming",
                "description": " ",
                "category": "a",
                "status": "-",
                "time_spent": "60",
                "wasted_time": "0",
                "focus_rate": "-",
                "satisfaction_rate": "7",
                "reason_for_satisfaction": "bug fixing",
                "notes": "typescript"
            }
        ],
        "parent_id": 0
    },
    {
        "id": "02_03_01",
        "name": "programming",
        "description": " ",
        "category": "a",
        "status": "-",
        "time_spent": "60",
        "wasted_time": "0",
        "focus_rate": "-",
        "satisfaction_rate": "7",
        "reason_for_satisfaction": "bug fixing",
        "notes": "typescript",
        "parent_id": "02_03"
    },
    {
        "id": "03_04",
        "name": "03:00 pm - 04:00 pm",
        "hour": "03:00 pm - 04:00 pm",
        "children": [
            {
                "id": "03_04_01",
                "name": "null",
                "description": "",
                "category": "0",
                "status": "-",
                "time_spent": "60",
                "wasted_time": "60",
                "focus_rate": "-",
                "satisfaction_rate": "0",
                "reason_for_satisfaction": "bug fixing",
                "notes": "bored and lack of clearity"
            }
        ],
        "parent_id": 0
    },
    {
        "id": "03_04_01",
        "name": "null",
        "description": "",
        "category": "0",
        "status": "-",
        "time_spent": "60",
        "wasted_time": "60",
        "focus_rate": "-",
        "satisfaction_rate": "0",
        "reason_for_satisfaction": "bug fixing",
        "notes": "bored and lack of clearity",
        "parent_id": "03_04"
    },
    {
        "id": "04_05",
        "name": "04:00 pm - 05:00 pm",
        "hour": "04:00 pm - 05:00 pm",
        "children": [
            {
                "id": "04_05_01",
                "name": "null",
                "description": "",
                "category": "1",
                "status": "-",
                "time_spent": "60",
                "wasted_time": "60",
                "focus_rate": "-",
                "satisfaction_rate": "10",
                "reason_for_satisfaction": "sidebar flow understand",
                "notes": ""
            }
        ],
        "parent_id": 0
    },
    {
        "id": "04_05_01",
        "name": "null",
        "description": "",
        "category": "1",
        "status": "-",
        "time_spent": "60",
        "wasted_time": "60",
        "focus_rate": "-",
        "satisfaction_rate": "10",
        "reason_for_satisfaction": "sidebar flow understand",
        "notes": "",
        "parent_id": "04_05"
    }
]



function makeTreeView(data) {
    let newData = data.map((i) => { return { ...i, children: [] } })
    const keys = newData.map((i) => i.id)

    keys.forEach((child) => {
        const parentId = keys.find((k) => `${child}`.includes(k) && k !== child)
        if (parentId) {
            const childData = newData.find((c) => c.id === child)
            newData = newData.map((d) => d.id == parentId ? { ...d, children: [...d.children, childData] } : d.id == child ? `false` : d) 
        }
    })

    const filterdData = newData.filter(item =>
        typeof item === 'object'
    ) 

    return filterdData
}


console.log(makeTreeView(data))

