import Input from '@/components/ui/Input'
import { FormItem, FormContainer } from '@/components/ui/Form'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { forwardRef, useRef, useState } from 'react'
import { Button, Dialog } from '@/components/ui'
import { childFormFields, RemoveElement, rowNestedFormData, ViewElement } from '../TaskForm/AddEditTaskModalComponents'

const AddEditNodeForm = forwardRef((props: NodeFormProps, formRef) => {
    const rowNestedFormState = { data: rowNestedFormData, action: 'none' }
    const [showNestedDialog, setShowNestedDialog] = useState(false);
    const [nestedFormData, setNestedFormData] = useState<IRowNestedFormState>(rowNestedFormState);
    const handleClose = () => {
        setNestedFormData(rowNestedFormState)
        setShowNestedDialog(false)
    };
    const nestedFormRef = useRef(null)
    const {
        disableSubmit = false,
        handleSubmit,
        data
    } = props



    let parseData = JSON.parse(JSON.stringify(data))
    let formaData = { ...parseData }
    delete formaData.id
    delete formaData.children
    delete formaData.color
    delete formaData.isExpanded

    let validationObj: any = {
    }
    if (validationObj) {
        Object.keys(formaData).forEach(key => {
            validationObj[key] = Yup.string()
                .required(`Please enter ${key}`)
                .label(key) // 
        })
    }

    const validationSchema = Yup.object().shape({
        ...validationObj
    })

    let initialValuesObj: any = {}

    Object.keys(formaData).forEach(key => {
        initialValuesObj[key] = formaData[key]
    })
    const test = (e: any) => {
        // console.log("eeee", data)
    }

    const getNewId = (lastId: string) => {
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
    const onNestedFormSubmit = () => {
        if (data.children) {
            // @ts-ignore

            let nestedFormRefCurrentValues = nestedFormRef?.current?.values || {}
            if (nestedFormData.action == 'add') {
                data.children.push({ ...nestedFormRefCurrentValues, id: getNewId(data.children.length > 0 ? `${data.children.map(child => child.id)[data.children.length - 1]}` : `${data.id}`) })
                console.log(data.children.length, getNewId(data.children.length > 0 ? `${data.children.map(child => child.id)[data.children.length - 1]}` : `${data.id}`))
            } else if (nestedFormData.action == 'update') {
                data.children = data.children.map((child, i) => child.id === nestedFormData.data.id ? { ...nestedFormData.data, ...nestedFormRefCurrentValues } : child)
            } else if (nestedFormData.action == 'delete') {
                data.children = data.children.filter((child, i) =>
                    child.id !== nestedFormData.data.id)
            }
        }
        handleClose()
    }

    const getFormFields = (formType: string) => {

        if (childFormFields[formType]) {
            const fieldsWithValues = childFormFields[formType].reduce((acc: any, field: ITaskForm) => {
                acc[field.title] = "";
                return acc;
            }, {});
            return fieldsWithValues;
        }
    }


    const onAction = (action: string, record: INode) => {
        if (action === 'add') {
            setShowNestedDialog(true)
            setNestedFormData({ data: record, action: "add" })
        } else if (action === 'update') {
            setShowNestedDialog(true)
            setNestedFormData({ data: record, action: "update" })
        } else if (action === 'delete') {
            setShowNestedDialog(true)
            setNestedFormData({ data: record, action: "delete" })
        }
    }
    return (
        <div  >
           
            <h3> Add/Edit Nodes </h3>
            <br />
            <Formik
                // @ts-ignore
                innerRef={formRef}
                initialValues={{
                    ...initialValuesObj
                }}
                validationSchema={validationSchema}
                onSubmit={(values: NodeFormSchema, { setSubmitting }) => {
                    if (!disableSubmit) {
                        // onSignIn(values, setSubmitting)
                        handleSubmit(values)
                    } else {
                        setSubmitting(false)
                    }
                }}
            >
                {({ touched, errors, isSubmitting, values }) => (
                    <Form>
                        <FormContainer>
                            {Object.keys(formaData).map(key => {
                                return (
                                    <div key={key} onClick={() => test({ errors, touched, values })}>
                                        <FormItem
                                            label={key}
                                            invalid={
                                                (errors[key] && touched[key]) as boolean
                                            }
                                            errorMessage={`${errors[key]}`}
                                        >
                                            <Field
                                                type="text"
                                                autoComplete="off"
                                                name={key}
                                                placeholder={key}
                                                component={Input}
                                            />
                                        </FormItem>
                                    </div>
                                )
                            })}
                        </FormContainer>
                    </Form>
                )}



            </Formik>

            <div className='form-child-list'>
                {
                    data.childFormType &&
                    <div className='flex justify-between'>
                        <h5>Child nodes</h5>
                        <Button
                            size="sm"
                            className="ltr:mr-2 rtl:ml-2"
                            onClick={() => onAction('add', { ...getFormFields('taskForm') })}
                            variant='solid' 
                        >
                            Add child
                        </Button>

                    </div>}

                {
                    data.children && data.children.length > 0 ? (
                        <>

                            {data.children.map((child: INode, index: number) => {
                                return (
                                    <div key={index} className='relative' onClick={() => console.log(child)}>
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name={child.name}
                                            component={Input}
                                            value={child.name}
                                            key={index}
                                        />
                                        <span className='absolute right-[13px] top-[12px] cursor-pointer' onClick={() => onAction('update', { ...child })}>🖊️</span>
                                        <span className='absolute right-[36px] top-[12px] cursor-pointer' onClick={() => onAction('delete', { ...child })}>❌</span>
                                    </div>

                                )
                            })}
                        </>) :
                        (
                            data.childFormType &&
                            <h3 className='text-center'>
                                No record found
                            </h3>

                        )

                }
            </div>

            <Dialog
                height={'auto'}
                isOpen={showNestedDialog}
                onClose={() => setShowNestedDialog(false)}
                children={
                    nestedFormData.action == 'delete' ?
                        <RemoveElement
                            data={nestedFormData.data}
                            formRef={nestedFormRef}
                            handleClose={handleClose}
                            onSubmitBtn={onNestedFormSubmit}
                        /> :
                        <ViewElement
                            data={nestedFormData.data}
                            formRef={nestedFormRef}
                            handleSubmit={onNestedFormSubmit}
                            handleClose={handleClose}
                            // @ts-ignore
                            onSubmitBtn={() => nestedFormRef.current.handleSubmit()}
                        />}
            />

        </div>
    )
})

export default AddEditNodeForm
