import * as userRepository from '../repositories/userRepository.js';


export async function getUser(email){
    const user = await userRepository.getUserByEmail(email);
    if(!user) throw {
        status: 401,
        message: 'User not found'
    };

    return user
}

export async function createUser(name, email, password, phone, cpf, address){
    const user = await userRepository.getUserByEmail(email);
    if(user) throw {
        status: 401,
        message: 'User already exists'
    };

    const passwordHash = bcrypt.hashSync(password, 10);
    await userRepository.createUser(name, email, passwordHash, phone, cpf, address);
}