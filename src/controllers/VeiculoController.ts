import { Request, Response } from "express";
import Veiculo from "../models/Veiculo";

export const criarVeiculo = async (req: Request, res: Response) => {
  try {
    const veiculo = await Veiculo.create(req.body);
    res.status(201).json(veiculo);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};

export const listarVeiculos = async (req: Request, res: Response) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};

export const atualizarVeiculo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [updated] = await Veiculo.update(req.body, {
      where: { id },
    });
    if (updated) {
      const veiculoAtualizado = await Veiculo.findByPk(id);
      res.json(veiculoAtualizado);
    } else {
      res.status(404).send("Veículo não encontrado.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};

export const deletarVeiculo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await Veiculo.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(200).send("Veículo deletado com sucesso.");
    } else {
      res.status(404).send("Veículo não encontrado.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
};
