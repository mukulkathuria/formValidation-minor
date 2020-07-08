import * as Yup from 'yup';

const validationSchema = Yup.object({
        username:Yup.string().trim().min(3).required(),
        password:Yup.string().trim().min(3).required()
});

export default validationSchema;