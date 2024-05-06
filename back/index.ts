import "reflect-metadata";
import express from "express";

import cors from "cors";
import * as CooperativaController from "./src/controller/CooperativaController";
import * as EmpresaController from "./src/controller/EmpresaController";
import * as PessoaController from "./src/controller/PessoaController";
import * as listController from "./src/controller/ListController";
import ValidarLogin from "./src/controller/LoginController";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PORT = process.env.PORT;

async function startup() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post("/Cooperativa", CooperativaController.saveCooperativa);
  app.post("/ValidarCooperativa", CooperativaController.ValidarCooperativa);
  app.post("/ValidacaoCooperativa", CooperativaController.Validacao);

  app.post("/Empresa", EmpresaController.saveEmpresa);
  app.post("/ValidarEmpresa", EmpresaController.ValidarEmprersa);
  app.post("/ValidacaoEmpresa", EmpresaController.Validacao);

  app.post("/PessoaFisica", PessoaController.savePessoa);
  app.post("/ValidarPessoaFisica", PessoaController.ValidarPessoa);
  app.post("/ValidacaoPessoaFisica", PessoaController.Validacao);

  app.post("/Login", ValidarLogin);

  app.get("/list", async (req, res) => {
    const List = await listController.listController();
    res.json(List);
  });

  app.listen(PORT, () => {
    console.log("App running on port " + PORT);
  });
}

startup();
