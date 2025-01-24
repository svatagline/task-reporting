type Image = {
    id: string
    name: string
    img: string

}

type FormModel = {
    imgList: Image[]
    [key: string]: unknown
}



type TaskImagesProps = {
    values: FormModel
}

interface INode {
    id: String
    name: String
    children?: INode[]
    isExpanded?: Boolean
    color?: String
    description?: String
    category?: String
    status?: String
    time_spent?: String
    wasted_time?: String
    focus_rate?: String
    satisfaction_rate?: String
    reason_for_satisfaction?: String
    notes?: String
    hour?: String
}
type TreeProps = {
    data: INode; // Expecting an array of INode
    key?: String | Number; //
};


interface NodeFormProps extends CommonProps {
    disableSubmit?: boolean
    forgotPasswordUrl?: string
    signUpUrl?: string
    handleSubmit: (value:NodeFormSchema) => void
    data:string
}

type NodeFormSchema = { 
    name?: string
    children?: INode[]
    isExpanded?: boolean
    color?: string
    description?: string
    category?: string
    status?: string
    time_spent?: string
    wasted_time?: string
    focus_rate?: string
    satisfaction_rate?: string
    reason_for_satisfaction?: string
    notes?: string
    hour?: string
}