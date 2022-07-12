import joi from "joi";

const signupSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().required(),
    cpf: joi.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).required(),
});

const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const tokenSchema = joi
    .string()
    .pattern(/^Bearer /)
    .required();

export { signupSchema, signinSchema, tokenSchema };