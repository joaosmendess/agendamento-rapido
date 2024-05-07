import express from "express";

import * as ServicoController from "../controllers/ServicoController";

const router = express.Router();

router.post("/servicos", ServicoController.CriarServico);
router.get("/servicos", ServicoController.listarServicos);
router.put("/servicos/:id", ServicoController.atualizarServicos);
router.delete("/servicos/:id", ServicoController.deletarServicos);

export default router;
