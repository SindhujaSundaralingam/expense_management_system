import * as yup from 'yup'

const addFormSchema = yup.object({
    category: yup.string().required('Select category from list or Add category in settings page'),
    item: yup.string().required('Enter the valid Item'),
    amount: yup.number().required('Enter the valid amount'),
    date: yup.date().required('Enter valid date'),
  });

const addCategorySchema = yup.object({
  category: yup.string().required('Enter Valid Category Name')
});



export { addFormSchema, addCategorySchema }