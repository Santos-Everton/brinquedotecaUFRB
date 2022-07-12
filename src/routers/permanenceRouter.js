import { Router } from "express";

import * as permanenceController from "../controllers/permanenceController.js";

const permanenceRouter = Router();

permanenceRouter.post(
    "/permanence", 
    /* implementar fluxos de verificação, se necessário */
    permanenceController.createPermanence
    )

permanenceRouter.get(
    "/permanence/:id", 
     /* implementar fluxos de verificação, se necessário */
    permanenceController.getPermanence)

permanenceRouter.put(
    "/permanence/:id", 
     /* implementar fluxos de verificação, se necessário */
    permanenceController.updatePermanence)
permanenceRouter.delete(
    "/permanence/:id", 
     /* implementar fluxos de verificação, se necessário */
    permanenceController.deletePermanence)

export default permanenceRouter;