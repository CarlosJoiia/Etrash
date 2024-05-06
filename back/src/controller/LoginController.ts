import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import validarPessoa from "./TwoFactorController";

const prisma = new PrismaClient();

const generateRandomNumbers = async () => {
  const numbers = await Promise.all(
    Array.from({ length: 4 }, async () => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      return randomNumber;
    })
  );
  return numbers.join(" ");
};

async function ValidarLogin(request: Request, response: Response) {
  const DadosREQ = request.body;

  const KEY_CODI = process.env.KEYCOD;
  const token = process.env.TOKEN;

  if (!KEY_CODI) {
    throw new Error("Variáveis de ambiente não estão definidas");
  }

  try {
    const cooperativa = await prisma.cooperativa.findFirst({
      where: {
        OR: [{ email: DadosREQ.email }],
      },
    });

    if (cooperativa) {
      if (
        cooperativa.email === DadosREQ.email &&
        cooperativa.senha === DadosREQ.senha
      ) {
        if (cooperativa.status != "Verificado") {
          return response
            .status(400)
            .json({
              mensagem:
                "Email Não Validado. Verifique Sua Caixa de Email e Confirme seu Cadastro",
            });
        }
        const numbers = await generateRandomNumbers();

        await validarPessoa(DadosREQ.email, DadosREQ.senha, numbers);
        console.log(numbers);

        return response
          .status(200)
          .json({ mensagem: "Verifique seu email", token: token });
      } else {
        return response
          .status(400)
          .json({ mensagem: "Email ou Senha Invalido" });
      }
    }

    const pessoafisica = await prisma.pessoafisica.findFirst({
      where: {
        OR: [{ email: DadosREQ.email }],
      },
    });

    if (pessoafisica) {
      if (
        pessoafisica.email === DadosREQ.email &&
        pessoafisica.senha === DadosREQ.senha
      ) {
        if (pessoafisica.status != "Verificado") {
          return response
            .status(400)
            .json({
              mensagem:
                "Email Não Validado. Verifique Sua Caixa de Email e Confirme seu Cadastro",
            });
        }
        const numbers = await generateRandomNumbers();

        await validarPessoa(DadosREQ.email, DadosREQ.senha, numbers);
        console.log(numbers);

        return response
          .status(200)
          .json({ mensagem: "Verifique seu email", token: token });
      } else {
        return response
          .status(400)
          .json({ mensagem: "Email ou Senha Invalido" });
      }
    }

    const empresa = await prisma.empresas.findFirst({
      where: {
        OR: [{ email: DadosREQ.email }],
      },
    });

    if (empresa) {
      if (
        empresa.email === DadosREQ.email &&
        empresa.senha === DadosREQ.senha
      ) {
        if (empresa.status != "Verificado") {
          return response.status(400).json({
            mensagem:
              "Email Não Validado. Verifique Sua Caixa de Email e Confirme seu Cadastro",
          });
        }
        const numbers = await generateRandomNumbers();

        await validarPessoa(DadosREQ.email, DadosREQ.senha, numbers);
        console.log(numbers);

        return response
          .status(200)
          .json({ mensagem: "Verifique seu email", token: token });
      } else {
        return response
          .status(400)
          .json({ mensagem: "Email ou Senha Invalido" });
      }
    }
  } catch (error) {
    console.error("Erro ao validar login:", error);
    return response.status(400).json({ mensagem: "Erro ao validar login." });
  }
}

export default ValidarLogin;
