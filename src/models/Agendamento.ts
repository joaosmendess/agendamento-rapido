import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Agendamento extends Model {
  public id!: number;
  public clienteId!: number;
  public servicoId!: number;
  public veiculoId!: number;
  public data!: Date;
}

Agendamento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clientes",
        key: "id",
      },
    },
    servicoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "servicos",
        key: "id",
      },
    },
    veiculoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "veiculos",
        key: "id",
      },
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Agendamento",
    tableName: "agendamentos",
  }
);

export default Agendamento;
