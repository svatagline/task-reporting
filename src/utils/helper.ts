import { childFormFields } from "@/constants/tree.constant"


export function makeTreeView(data: INode[]) {
    let newData: INode[] = data.map((i) => { return { ...i, children: [] } })
    const keys = newData.map((i) => i.id)

    keys.forEach((child) => {
        const parentId = keys.find((k) => k && `${child}`.includes(k) && k !== child)
        if (parentId) {
            const childData = newData.find((c) => c.id === child)
            // @ts-ignore
            newData = newData.map((d: INode) => (d && d.children && (d.id == parentId)) ? { ...d, children: [...d.children, childData] } : d.id == child ? `false` : d)
        }
    })

    const filterdData = newData.filter(item =>
        typeof item === 'object'
    )

    return filterdData
}

export const getFormFields = (formType: string) => {

    if (childFormFields[formType]) {
        // @ts-ignore
        const fieldsWithValues = Object.values(childFormFields[formType]).reduce((acc: any, field: ITaskForm) => {
            acc[`${field.title}`] = "";
            return acc;
        }, {});
        return fieldsWithValues;
    }
}

export const timeStamp = (str: string) => {
    return new Date(str).getTime();
}
export const parseObj = (str: string) => {
    try {
        return JSON.parse(str);
    } catch (error) {
        return {}
    }
}


export const getNewId = (lastId: string) => {
    console.log({ lastId })
    if (['21', '24'].includes(`${lastId.length}`)) {
        if (lastId.length < 6) {
            const newId = `${lastId}_01`
            return newId
        } else {
            const id = parseInt(lastId.split('_')[2])
            const newId = id < 10 ? `0${id + 1}` : id + 1
            return `${lastId.slice(0, 21)}_${newId}`
        }
    } else {
        alert("Id not valid")
    }
}


function generateHourlyRanges(dateString: string) {
    const date = new Date(dateString);
    date.setHours(7, 0, 0, 0); // Start from 7 AM

    let hourlyRanges = [];

    for (let i = 7; i < 23; i++) { // 7 AM to 11 PM
        let startTimestamp = Math.floor(date.getTime() / 1000);
        date.setHours(i + 1);
        let endTimestamp = Math.floor(date.getTime() / 1000);

        hourlyRanges.push({
            id: `${startTimestamp}_${endTimestamp}`,
            name: `${formatTime(i)} to ${formatTime(i + 1)}`
        });
    }

    // Full-day range
    hourlyRanges.push({
        id: `${hourlyRanges[0].id.split('_')[0]}_${hourlyRanges[hourlyRanges.length - 1].id.split('_')[1]}`,
        name: "7 AM to 11 PM"
    });

    return hourlyRanges;
}

// Helper function to format time in 12-hour format
function formatTime(hour: number) {
    let period = hour >= 12 ? "PM" : "AM";
    let formattedHour = hour % 12 || 12; // Convert 0 -> 12 for AM/PM format
    return `${formattedHour} ${period}`;
}

// Example usage
// console.log(generateHourlyRanges("January 30, 2025"));


export function mergeTasksData(data: INode[]) {
    let result: INode[] = [];
    data.forEach(item => {

        const existTask = result.find(task => task.name == item.name)

        let getTime = 0
        try {
            const time_span = `${item.id}`.split('_')
            getTime = (parseInt(time_span[1]) - parseInt(time_span[0])) / 60
        } catch (error) {
            console.error('Error parsing time in mergeTasksData:', error);
        }
        if (existTask && existTask.id) {
            result = result.map((t, i) => {

                if (t.name == item.name) {
                    let modifiedTask = {
                        ...t, 
                        mergedRecord: existTask.mergedRecord + 1,
                        mergeId: (t.id ? t.id : 'null') + "|---|" + (existTask.id ? existTask.id : 'null'),
                        assignedTime: `${existTask.assignedTime} |---| ${getTime}`,
                        time_spent: (t.time_spent ? t.time_spent : 0) + "|---|" + (existTask.time_spent ? existTask.time_spent : 0),
                        wasted_time: (t.wasted_time ? t.wasted_time : 0) + "|---|" + (existTask.wasted_time ? existTask.wasted_time : 0),
                        reason_for_satisfaction: (t.reason_for_satisfaction ? t.reason_for_satisfaction : 'null') + "|---|" + (existTask.reason_for_satisfaction ? existTask.reason_for_satisfaction : 'null'),
                        description: (t.description ? t.description : 'null') + "|---|" + (existTask.description ? existTask.description : 'null'),
                        status: (t.status ? t.status : 'null') + "|---|" + (existTask.status ? existTask.status : 'null'),
                        focus_rate: (`${t.focus_rate ? t.focus_rate : 0}` + "|---|" + `${existTask.focus_rate ? existTask.focus_rate : 0}`),
                        satisfaction_rate: (`${t.satisfaction_rate ? t.satisfaction_rate : 0}` + "|---|" + `${existTask.satisfaction_rate ? existTask.satisfaction_rate : 0}`),

                    }
                    return modifiedTask
                } else {
                    return t
                }
            })
        } else {
            result.push({ ...item, assignedTime: getTime, mergeId: item.id,mergedRecord: 1, })
        }
    });
    return result;
}

export function splitObjectValues(input:any) {
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

export  const optIndex = (index:number|string)=>{
    return `0ABCD`.charAt(parseInt(`${index}`))
}

export const getValidParsedJsonData = (values:string)=>{
        try {
            console.log(values)
            return JSON.parse(values)
        } catch (error) {
            return null
        }
    }