import express from "express";
import * as ClienteController from "../controllers/ClienteController";

const router = express.Router();

router.post("/clientes", ClienteController.criarCliente);
router.get("/clientes", ClienteController.pegarTodosOsClientes);
router.put("/clientes/:id", ClienteController.atualizarClientes);
router.delete("/clientes/:id", ClienteController.deletarClientes);

export default router;
