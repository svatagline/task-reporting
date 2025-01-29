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
                handleSubmit={(record: NodeFormSchema) => handleSubmit && handleSubmit(record)}
                data={{...data,childFormType:data.childFormType?data.childFormType :`${`${data.id}`.length  }`}} 
               
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