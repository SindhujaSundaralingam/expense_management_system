import * as yup from 'yup'

const addFormSchema = yup.object({
    category: yup.string().required(),
    item: yup.string().required(),
    amount: yup.string().required(),
    date: yup.string().required(),
  });

  export { addFormSchema }