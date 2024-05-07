import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Servico extends Model {
  public id!: number;
  public titulo!: string;
  public descricao!: string;
  public precoHatchSedan!: number;
  public precoSuv!: number;
  public precoPicapeSuvGrande!: number;
}

Servico.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precoHatchSedan: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precoSuv: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precoPicapeSuvGrande: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Servico",
    tableName: "servicos",
  }
);

export default Servico;
