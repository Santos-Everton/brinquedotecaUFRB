import { Router } from "express";
import * as authController from "../controllers/authController.js";
import * as schemaMiddlewares from "../middleware/schemaValidationMiddleware.js";
import * as authSchemas from "../schemas/authSchemas.js";
import { validateToken } from "../middleware/tokenMiddleware.js";

const authRouter = Router();
authRouter.post(
    "/signin", 
    schemaMiddlewares.validateSchema(authSchemas.signinSchema) ,
    authController.signIn
    );
    
authRouter.post(
    "/signup", 
    schemaMiddlewares.validateSchema(authSchemas.signupSchema),
    authController.signUp
    );
    
authRouter.post(
    "/signout", 
    validateToken,
    authController.signOut
    );
authRouter.post("/recoverypassword", authController.recoveryPassword);
export default authRouter;