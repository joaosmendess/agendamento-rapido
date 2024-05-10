import express from "express";
import { engine } from "express-handlebars";
import path from "path";

// Importar todos os modelos para registrar associações
import "./models/Cliente";
import "./models/Servico";
import "./models/Veiculo";
import "./models/Agendamento";

// Importar rotas
import clienteRoutes from "./routes/ClienteRoutes";
import servicoRoutes from "./routes/ServicoRoutes";
import veiculoRoutes from "./routes/VeiculoRoutes";
import agendamentoRoutes from "./routes/AgendamentoRoutes";

import sequelize from "./config/database";

const app = express();
const PORT = 3000;

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(clienteRoutes);
app.use(servicoRoutes);
app.use(veiculoRoutes);
app.use(agendamentoRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado!");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
  });
