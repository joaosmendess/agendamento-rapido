import express from "express";
import * as AgendamentoController from "../controllers/AgendamentoController";

const router = express.Router();

router.post("/agendamentos", AgendamentoController.criarAgendamento);
router.get("/agendamentos", AgendamentoController.listarAgendamentos);
router.put("/agendamentos/:id", AgendamentoController.atualizarAgendamento);
router.delete("/agendamentos/:id", AgendamentoController.deletarAgendamento);

export default router;
