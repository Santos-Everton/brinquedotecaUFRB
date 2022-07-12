import * as userServices from '../services/userServices.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export function signIn(email, password){
    const user = userServices.getUser(email);
    const passwordValidation = bcrypt.compareSync(password, user.password)
    if(!passwordValidation) throw {
        status: 401,
        message: "Passwords don't match"
    }
    const token = jwt.sign({ id: user._id }, process.env.APP_SECRET);

    return {user, token}
}

export async function signUp(name, email, password, phone, cpf, address){
    const passwordHash = bcrypt.hashSync(password, 10);
    await userServices.createUser(name, email, passwordHash, phone, cpf, address);
}
