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
    },
    servicoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    veiculoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
