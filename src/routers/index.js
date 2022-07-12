import { Router } from "express";
import authRouter from "./authRouter.js";
import permanenceRouter from "./permanenceRouter.js";

const router = Router()
router.use(authRouter)
router.use(permanenceRouter)

export {router}

//autenticação (login, recuperar senha, criar conta)
//controle de pemanência 
//cadastro de crianças e responsáveis

