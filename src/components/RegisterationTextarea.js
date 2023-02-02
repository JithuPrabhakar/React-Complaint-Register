import { useField } from 'formik';
import React from 'react'

const RegisterationTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className='form-group mb-2'>
        <label>{ label }</label>
        <textarea
          {...field} {...props}
          className={ meta.error && meta.touched ? "input-error form-control" : "form-control" }
        ></textarea>
        { meta.error && meta.touched && <p className="error">{ meta.error }</p>}
      </div>
    )
}

export default RegisterationTextarea
