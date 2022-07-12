export function validateSchema(schema) {
    return async (req, res, next) => {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
    };
}