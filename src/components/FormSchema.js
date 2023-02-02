import * as yup from 'yup';

const validateSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email('Enter a valid email address').required('Required'),
    phone: yup.number().positive().integer().required("Required"),
    address: yup.string().required("Required"),
    pincode: yup.number().positive().integer().required("Required"),
    village: yup.string().required("Required"),
    district: yup.string().required("Required"),
    state: yup.string().required("Required"),
    select: yup.string().oneOf(["VO", "SC", "DC"]).required(),
    complaint: yup.string().required()
});

export default validateSchema;