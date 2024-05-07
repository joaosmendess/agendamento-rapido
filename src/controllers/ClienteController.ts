import { Request, Response } from "express";
import Cliente from "../models/cliente";

export const criarCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};

export const pegarTodosOsClientes = async (req: Request, res: Response) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Erro desconhecido");
    }
  }
};

export const atualizarClientes = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [updated] = await Cliente.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedCliente = await Cliente.findOne({ where: { id: id } });
      res.status(200).json(updatedCliente);
    } else {
      res.status(404).send("Cliente não encontrado.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Erro desconhecido");
    }
  }
};

export const deletarClientes = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await Cliente.destroy({ where: { id: id } });
    if (deleted) {
      res.status(200).send("Cliente deletado com sucesso.");
    } else {
      res.status(404).send("Cliente não encontrado");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Erro desconhecido");
    }
  }
};
