import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificatiosRoutes = Router();

specificatiosRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

export { specificatiosRoutes };
