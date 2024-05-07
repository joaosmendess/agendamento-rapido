import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

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

export default Veiculo;
