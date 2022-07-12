import db from "../config/databaseConfig.js";

export async function createPermanence(/* variáveis necessárias */) {
    return db.query(/* código SQL */);
}


export async function getPermanence(/* variáveis necessárias */) {
    const query = db.query(/* código SQL */);
    const {rows: permanences} = await query;
    const [permanence] = [permanences];
    return permanence
}

export async function updatePermanence(/* variáveis necessárias */) {
    return db.query(/* código SQL */);
}


export async function deletePermanence(/* variáveis necessárias */) {
    return db.query(/* código SQL */);
}
