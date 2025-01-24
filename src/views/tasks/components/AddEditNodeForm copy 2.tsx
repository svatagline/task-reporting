import Input from '@/components/ui/Input' 
import { FormItem, FormContainer } from '@/components/ui/Form' 
import PasswordInput from '@/components/shared/PasswordInput' 
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { CommonProps } from '@/@types/common'
import { forwardRef } from 'react'
import { error } from 'console'
import { values } from 'lodash' 

const AddEditNodeForm = forwardRef((props: NodeFormProps, formRef) => {
    const {
        disableSubmit = false, 
        handleSubmit,
        data
    } = props 


     
    let formaData =  JSON.parse(data)
    delete formaData.id
    delete formaData.children
    delete formaData.color
    delete formaData.isExpanded

    let validationObj =  { 
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

    let initialValuesObj = {}
    
    Object.keys(formaData).forEach(key => { 
        initialValuesObj[key] = formaData[key] 
    })
    const test = (e)=>{
        console.log("eeee",e) 
    }
    return (
        <div  > 

            <Formik
                innerRef={formRef}
                initialValues={{
                    ...initialValuesObj,
                    node_name: data.name,
                    password: '123Qwe',
                    rememberMe: true,
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
                {({ touched, errors, isSubmitting ,values}) => (
                    <Form>
                        <FormContainer>
                        {Object.keys(formaData).map(key => {
                                return (
                                    <div key={key} onClick={()=>test({errors,touched,values})}>
                                        <FormItem 
                                            label={key}
                                            invalid={
                                                (errors[key] && touched[key]) as boolean
                                            }
                                            errorMessage={errors[key]}
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
        </div>
    )
})

export default AddEditNodeForm
