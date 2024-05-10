import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Cliente from "./Cliente";
import Servico from "./Servico";
import Veiculo from "./Veiculo";

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

Agendamento.belongsTo(Cliente, { foreignKey: "clienteId", as: "clientes" });
Agendamento.belongsTo(Servico, { foreignKey: "servicoId", as: "servicos" });
Agendamento.belongsTo(Veiculo, { foreignKey: "veiculoId", as: "veiculos" });

export default Agendamento;
