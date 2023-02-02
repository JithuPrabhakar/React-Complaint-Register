import React from 'react';
import { Form, Formik } from 'formik';
import RegisterationInput from './RegisterationInput';
import validateSchema from './FormSchema'
import RegisterationSelect from './RegisterationSelect';
import RegisterationTextarea from './RegisterationTextarea';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) ;
    actions.resetForm();
}

const RegisterationMain = () => (
    <div className='container'>
    <Formik
        initialValues={{
            name: '',
            email: "",
            phone: "",
            address: "",
            pincode: "",
            village: "",
            district: "",
            state: "",
            select: "",
            complaint: ""
        }}
        validationSchema={ validateSchema }
        onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <Form>
            <div className='container'>
            <RegisterationInput 
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your Name"
            />
            <RegisterationInput 
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
            />
            <RegisterationInput 
                label="Phone Number"
                name="phone"
                type="number"
                placeholder="Enter your Phone Number"
            />
            <RegisterationInput 
                label="Adddress"
                name="address"
                type="text"
                placeholder="Enter your Adddress"
            />
            <RegisterationTextarea
                label="Please accurately describe the details of your complaint and to whom"
                name="complaint"
                rows="8"
                columns="50"
                placeholder="Enter your complaint here"
            />
            <RegisterationSelect
                label="To whom your complaint is registering : "
                name="select"
                placeholder="Select a position"
            >
                <option value="">Select a position</option>
                <option value="VO">Village Officer</option>
                <option value="SC">Sub Collector</option>
                <option value="DC">Collector</option>
            </RegisterationSelect>

            <button disabled={isSubmitting} className='btn' type="submit">Submit</button>
            </div>
        </Form>
      )}
    </Formik>
  </div>

);

export default RegisterationMain;