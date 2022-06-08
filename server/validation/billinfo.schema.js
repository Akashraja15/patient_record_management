const {required} = require("joi");
const Joi = require("joi");

const billinfoschema = Joi.object({
    patientname: Joi.string()
    .regex(/[a-zA-Z]*/)
    .min(3)
    .required(),
    phone: Joi.string()
    .min(10)
    .max(10)
    .regex(/[+0]{0,2}(91)?\d{10}/)
    .required(),
    email: Joi.string()
    .regex(/^[\w]*[\w\.]*(?!\.)@gmail.com/)
    .required(),
    gender: Joi.string()
    .min(3)
    .required(),
})

module.exports = {billinfoschema}