import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Agendamento from "./Agendamento";

class Veiculo extends Model {
  public id!: number;
  public tipo!: string;
}

Veiculo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Veiculo",
    tableName: "veiculos",
  }
);

Veiculo.hasMany(Agendamento, { foreignKey: "veiculoId", as: "agendamentos" });

export default Veiculo;
