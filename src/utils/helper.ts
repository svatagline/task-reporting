import { childFormFields } from "@/views/tasks/TaskForm/AddEditTaskModalComponents"

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


 export     const getNewId = (lastId: string) => {
    console.log({ lastId })
    if (['5', '8'].includes(`${lastId.length}`)) {
        if (lastId.length < 6) {
            const newId = `${lastId}_01`
            return newId
        } else {
            const id = parseInt(lastId.split('_')[2])
            const newId = id < 10 ? `0${id + 1}` : id + 1
            return `${lastId.slice(0, 5)}_${newId}`
        }
    } else {
        alert("Id not valid")
    }
}


