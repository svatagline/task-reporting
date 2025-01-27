import { Button } from "@/components/ui"
import AddEditNodeForm from "../components/AddEditNodeForm"

export const ViewElement = ({ data, formRef,
    handleSubmit,
    handleClose,
    onSubmitBtn }: ExtendedTreeProps) => {

    return (

        <div className='viewElement'>
            <AddEditNodeForm
                ref={formRef}
                handleSubmit={(record:NodeFormSchema)=>handleSubmit ? handleSubmit(record):()=>{}}
                data={data} 
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
export const RemoveElement = ({ data, formRef, 
    handleClose,
    onSubmitBtn }: ExtendedTreeProps) => {

    return (

        <div className='viewElement'  >
            <h3>Are you sure to delete record?</h3>
            <br />
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




export const childFormFields:IChildFormField = {
    taskForm: [{ title: "name" }, { title: "description" }, { title: "category" }, { title: "status" }, { title: "time_spent" }, { title: "wasted_time" }, { title: "focus_rate" }, { title: "satisfaction_rate" }, { title: "reason_for_satisfaction" }, { title: "notes" }]
}


export const rowNestedFormData =   {
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