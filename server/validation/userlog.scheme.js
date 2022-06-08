const { required } = require("joi");
const Joi = require("joi");

const userlogschema = Joi.object({
    patientname: Joi.string()
    .regex(/[a-zA-Z]*/)
    .min(3)
    .required(),   
    password: Joi.string()
    .regex(/[A-Za-z0-9@!_]{6,}/)
    .required(),
})

module.exports = {userlogschema}