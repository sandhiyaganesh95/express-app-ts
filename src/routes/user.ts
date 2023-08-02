import express from "express";
import UserController from "../controller/user";
const router = express.Router();

router.get("/", UserController.findAll);
router.get("/:id", UserController.findUser);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;