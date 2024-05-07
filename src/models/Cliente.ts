import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Cliente extends Model {
  public id!: number;
  public nome!: string;
  public telefone!: string;
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cliente",
  }
);

export default Cliente;
