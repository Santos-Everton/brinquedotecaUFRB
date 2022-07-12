import db from "../config/databaseConfig.js";

export async function getUserByEmail(email) {
    const query =  db.query(
        `
        SELECT * from users u
        WHERE u.email = $1
        `,
        [email]
    );
    const {rows: users} = await query;
    const [user] = [users];
    return user
}

export async function createUser(name, email, password, phone, cpf, address) {
    return  db.query(
        `
        INSERT INTO users (name, email, password, phone, cpf, address)
        VALUES ($1, $2, $3, $4, $5, $6)
        `,
        [name, email, password, phone, cpf, address]
    );
}