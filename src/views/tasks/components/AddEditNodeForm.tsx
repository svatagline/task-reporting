import Input from '@/components/ui/Input'
import { FormItem, FormContainer } from '@/components/ui/Form'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { forwardRef } from 'react'
import { Button } from '@/components/ui'

const AddEditNodeForm = forwardRef((props: NodeFormProps, formRef) => {
    const {
        disableSubmit = false,
        handleSubmit,
        data
    } = props



    let parseData = JSON.parse(data)
    let formaData = JSON.parse(data)
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
    const test = (e) => {
        console.log("eeee", data)
    }
    return (
        <div  >

            <Formik
                innerRef={formRef}
                initialValues={{
                    ...initialValuesObj
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
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
                    parseData.children && parseData.children.length > 0 && (
                        <>
                            <div className='flex justify-between'>
                                <h5>Child nodes</h5>
                                <Button
                                    size="sm"
                                    className="ltr:mr-2 rtl:ml-2"
                                    onClick={()=>{}}
                                    variant='solid'
                                >
                                    Add child
                                </Button>
                            </div>
                            {parseData.children.map((child, index) => {
                                return (
                                    // <div key={index}>{child.name}</div>
                                    <Field
                                        type="text"
                                        autoComplete="off"
                                        name={child.name}
                                        component={Input}
                                        value={child.name}
                                        key={index}
                                    />
                                )
                            })}
                        </>

                    )
                }
            </div>

        </div>
    )
})

export default AddEditNodeForm
