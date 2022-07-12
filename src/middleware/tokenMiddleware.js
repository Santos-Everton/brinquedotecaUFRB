import { tokenSchema } from "../schemas/authSchemas.js";

export async function validateToken (req, res, next) {
    const {authorization} = req.headers;

    const validation = tokenSchema.validate(authorization);
    if (validation.error) return res.status(403);

    const token = authorization?.replace('Bearer ', '').trim();
    if (!token) return res.sendStatus(401);

    next()
}