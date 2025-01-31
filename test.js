

const data = {
    "id": "1738207800_1738222200_02",
    "name": "Programming",
    "description": "Bug fixing in modifying tree |---|Bug fixing in modifying tree ",
    "category": "1",
    "status": "-|---|-",
    "time_spent": "180|---|180",
    "wasted_time": "-|---|-",
    "focus_rate": "-|---|-",
    "satisfaction_rate": "10|---|10",
    "reason_for_satisfaction": "null|---|null",
    "notes": "",
    "parent_id": "1738207800_1738222200",
    "assignedTime": "240 |---| 60",
    "mergeId": "1738207800_1738222200_02|---|1738207800_1738222200_02",
    "mergedRecord": 2
}
// const output = [
//     {
//         "id": "1738207800_1738222200_02",
//         "name": "Programming",
//         "description": "Bug fixing in modifying tree",
//         "category": "1",
//         "status": "-",
//         "time_spent": "180",
//         "wasted_time": "-",
//         "focus_rate": "-",
//         "satisfaction_rate": "10",
//         "reason_for_satisfaction": "null",
//         "notes": "",
//         "parent_id": "1738207800_1738222200",
//         "assignedTime": "240",
//         "mergeId": "1738207800_1738222200_02",
//         "mergedRecord": 2
//     },
//     {
//         "id": "1738207800_1738222200_02",
//         "name": "Programming",
//         "description": "Bug fixing in modifying tree ",
//         "category": "1",
//         "status": "-",
//         "time_spent": "180",
//         "wasted_time": "-",
//         "focus_rate": "-",
//         "satisfaction_rate": "10",
//         "reason_for_satisfaction": "null",
//         "notes": "",
//         "parent_id": "1738207800_1738222200",
//         "assignedTime": "60",
//         "mergeId": "1738207800_1738222200_02",
//         "mergedRecord": 2
//     }
// ]

function splitObjectValues(input) {
    const separator = "|---|";
    
    // Determine the maximum number of splits in any property
    const maxSplits = Math.max(
        ...Object.values(input)
            .filter(value => typeof value === "string")
            .map(value => value.split(separator).length)
    );
    
    // Generate array of objects
    const result = Array.from({ length: maxSplits }, (_, index) => {
        return Object.fromEntries(
            Object.entries(input).map(([key, value]) => {
                if (typeof value === "string") {
                    const splitValues = value.split(separator);
                    return [key, splitValues[index] ?? splitValues[0]];
                }
                return [key, value];
            })
        );
    });
    
    return result;
}

console.log(splitObjectValues(data))