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
    touched: boolean
}

interface INode {
    id?: string
    name: string
    children?: INode[]
    isExpanded?: Boolean
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
    childFormType?: string
}
 

interface TreeProps {
    data: INode; // Expecting an array of INode
    key?: string | number;
}
interface IFormTree  {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}
interface ExtendedTreeProps extends TreeProps {
    formRef?: React.RefObject<HTMLFormElement>;
    handleSubmit?: (record:NodeFormSchema) => void;
    handleClose: () => void;
    onSubmitBtn: () => void;
}

interface NodeFormProps extends CommonProps {
    disableSubmit?: boolean
    forgotPasswordUrl?: string
    signUpUrl?: string
    handleSubmit: (value:NodeFormSchema) => void
    data:INode
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
    childFormType:string | undefined
}


interface ITaskForm {
    title:string
}
interface IChildFormField {
    [key: string] : ITaskForm[]
}
interface IRowNestedFormState {
   data:INode,
   action:string
}

 