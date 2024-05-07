import express from "express";

import clienteRoutes from "./routes/ClienteRoutes";
import servicoRoutes from "./routes/ServicoRoutes";
import veiculoRoutes from "./routes/VeiculoRoutes";
import agendamentoRoutes from "./routes/AgendamentoRoutes";

import sequelize from "./config/database";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(clienteRoutes);
app.use(servicoRoutes);
app.use(veiculoRoutes);
app.use(agendamentoRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado!");
    // Iniciando o servidor somente após a sincronização do banco de dados
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
  });
