import express from "express";
import * as VeiculoController from "../controllers/VeiculoController";

const router = express.Router();

router.post("/veiculos", VeiculoController.criarVeiculo);
router.get("/veiculos", VeiculoController.listarVeiculos);
router.put("/veiculos/:id", VeiculoController.atualizarVeiculo);
router.delete("/veiculos/:id", VeiculoController.deletarVeiculo);

export default router;
