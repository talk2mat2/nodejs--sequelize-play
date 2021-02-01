const joi = require('@hapi/joi')

const authSchema= joi.object({
    email:joi.string().email().lowercase().required(),
    password:joi.string().min(2).required(),
    age:joi.number().min(0).max(10).required()

})
const registerSchema= joi.object({
    email:joi.string().email().lowercase().required(),
    password:joi.string().min(2).required(),
    age:joi.number().min(0).max(10).required(),
    DOB:joi.date().required()

})


module.exports={
    authSchema,
    registerSchema
}