const data = [

  {
    "id": "09_10",
    "name": "09:00 am- 10:00 am",
    "hour": "09:00 am- 10:00 am",
    children: [
      {
        "id": "9_10_01",
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
        "id": "9_10_02",
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
    ]
  },
  {
    "id": "10_11",
    "name": "10:00 am- 11:00 am",
    "hour": "10:00 am- 11:00 am",
    children: [

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
    ]
  },
  {
    "id": "11_12",
    "name": "11:00 am- 12:00 pm",
    "hour": "11:00 am- 12:00 pm",
    children: [

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
    ]
  },
  {
    "id": "12_01",
    "name": "12:00 am- 01:00 am",
    "hour": "12:00 am- 01:00 am",
    children: [

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
    ]
  },
  {
    "id": "02_03",
    "name": "02:00 pm- 03:00 pm",
    "hour": "02:00 pm- 03:00 pm",
    children: [

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
    ]
  },
  {
    "id": "03_04",
    "name": "03:00 pm - 04:00 pm",
    "hour": "03:00 pm - 04:00 pm",
    children: [

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
    ]
  },
  {
    "id": "04_05",
    "name": "04:00 pm - 05:00 pm",
    "hour": "04:00 pm - 05:00 pm",
    children: [

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
    ]
  },
]


// const exatractNestedChild = (data, level) => {
//   let listing = []
//   const listLastNestedItems = (data) => {
//     data.forEach((record) => {
//       record.id
//       if (level.includes(`${record.id}`.split('_').length)) {
//         listing.push(record)
//       }

//       if (record.children && record.children.length > 0) {
//         listLastNestedItems(record.children)
//       }
//     })
//   }
//   listLastNestedItems(data)


//   return listing
// }


// console.log(exatractNestedChild(data, [3]).length)


const removeNestedChild = (data, id) => { 
  const filterNestedItems = (data) => {
    data.forEach((record) => { 
      if ( record.id == id) {
        data.filter((rec)=>rec.id!==id)
      }

      if (record.children && record.children.length > 0) {
        filterNestedItems(record.children,id)
      }
    })
  }
  filterNestedItems(data)


  return data
}


console.log(removeNestedChild(data, '10_11'))