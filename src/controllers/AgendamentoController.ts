import Agendamento from "../models/Agendamento";
import { Request, Response } from "express";
import Cliente from "../models/Cliente";
import Servico from "../models/Servico";
import Veiculo from "../models/Veiculo";

export const criarAgendamento = async (req: Request, res: Response) => {
  try {
    const agendamento = await Agendamento.create(req.body);
    res.status(201).json(agendamento);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};

export const listarAgendamentos = async (req: Request, res: Response) => {
  try {
    const agendamentos = await Agendamento.findAll({
      include: [
        { model: Cliente, as: "clientes" },
        { model: Servico, as: "servicos" },
        { model: Veiculo, as: "veiculos" },
      ],
    });
    res.render("agendamentos", { agendamentos });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};
export const atualizarAgendamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [updated] = await Agendamento.update(req.body, {
      where: { id },
    });
    if (updated) {
      const agendamentoAtualizado = await Agendamento.findByPk(id);
      res.json(agendamentoAtualizado);
    } else {
      res.status(404).send("Agendamento não encontrado.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};

export const deletarAgendamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await Agendamento.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(200).send("Agendamento deletado com sucesso.");
    } else {
      res.status(404).send("Agendamento não encontrado.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};
