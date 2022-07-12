import * as authServices from '../services/authServices.js';

export async function signIn(req, res) {
  const { email, password } = req.body;
  const authenticatedUser = authServices.signIn(email, password); 
  return res.status(200).send(authenticatedUser)  
}

export async function signUp(req, res) {
  const { name, email, password, phone, cpf, address } = req.body;
  authServices.signUp(name, email, password, phone, cpf, address);
  return res.sendStatus(201);
}

export async function signOut(req, res) {
  //implementar logout
}

export async function recoveryPassword(req, res) {
  const { email } = req.body;
  //implementar recuperação de senha
}

