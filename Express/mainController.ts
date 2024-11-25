import { Router, Request, Response } from "express";

const router = Router();

router.get("/healthCheck", (req: Request, res: Response) => {
  res.send({ status: "OK" });
});

export default router;
