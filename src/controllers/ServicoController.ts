import Servico from "../models/Servico";
import { Request, Response } from "express";

export const CriarServico = async (req: Request, res: Response) => {
  try {
    const servico = await Servico.create(req.body);
    res.status(201).json(servico);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};

export const listarServicos = async (req: Request, res: Response) => {
  try {
    const servicos = await Servico.findAll();
    res.json(servicos);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};

export const atualizarServicos = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [updated] = await Servico.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedServico = await Servico.findOne({ where: { id: id } });
      res.status(200).json(updatedServico);
    } else {
      res.status(404).send("Serviço não encontrado.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Erro desconhecido");
    }
  }
};

export const deletarServicos = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await Servico.destroy({ where: { id: id } });
    if (deleted) {
      res.status(200).send("Serviço deletado com sucesso.");
    } else {
      res.status(404).send("Serviço não encontrado");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Erro desconhecido");
    }
  }
};
