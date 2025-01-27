 const childFormFields = {
    taskForm: [{ title: "name" }, { title: "description" }, { title: "category" }, { title: "status" }, { title: "time_spent" }, { title: "wasted_time" }, { title: "focus_rate" }, { title: "satisfaction_rate" }, { title: "reason_for_satisfaction" }, { title: "notes" }]
}


// const data = childFormFields['taskForm'].reduce((acc, child) =>{acc[child['title']]="s"},{})
// const data = (childFormFields['taskForm']).reduce((acc, child) =>{
//     console.log(acc, child)
//     acc.push(`child['title']`)} ,[])

// console.log(data)

 
  
  const fieldsWithValues = childFormFields.taskForm.reduce((acc, field) => {
    acc[field.title] = 1;
    return acc;
  }, {});
  
  console.log(fieldsWithValues);
  