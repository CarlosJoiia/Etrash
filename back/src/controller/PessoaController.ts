import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function savePessoa(request: Request, response: Response) {
  const pessoaFisica = request.body;

  const verificarCooperativa = await prisma.pessoafisica.findFirst({
    where: {
      OR: [{ email: pessoaFisica.email }, { contact: pessoaFisica.contact }],
    },
  });

  if (verificarCooperativa) {
    if (verificarCooperativa.email === pessoaFisica.email) {
      return response
        .status(400)
        .json({ mensagem: "Este E-mail já está registrado." });
    } else if (verificarCooperativa.contact === pessoaFisica.contact) {
      return response
        .status(400)
        .json({ mensagem: "Este Contato já está registrado." });
    }
  }

  const verificarEmpresa = await prisma.empresas.findFirst({
    where: {
      OR: [{ email: pessoaFisica.email }, { contact: pessoaFisica.contact }],
    },
  });

  if (verificarEmpresa) {
    if (verificarEmpresa.email === pessoaFisica.email) {
      return response
        .status(400)
        .json({ mensagem: "Este E-mail já está registrado." });
    } else if (verificarEmpresa.contact === pessoaFisica.contact) {
      return response
        .status(400)
        .json({ mensagem: "Este Contato já está registrado." });
    }
  }

  const verificarPessoa = await prisma.pessoafisica.findFirst({
    where: {
      OR: [{ email: pessoaFisica.email }, { contact: pessoaFisica.contact }],
    },
  });

  if (verificarPessoa) {
    if (verificarPessoa.email === pessoaFisica.email) {
      return response
        .status(400)
        .json({ mensagem: "Este E-mail já está registrado." });
    } else {
      return response
        .status(400)
        .json({ mensagem: "Este Contato já está registrado." });
    }
  }

  return (
    await response
      .status(201)
      .json({ mensagem: `${pessoaFisica.name} Foi Cadastrado.` }),
    prisma.pessoafisica.create({
      data: pessoaFisica,
    })
  );
}

export async function ValidarPessoa(request: Request, response: Response) {
  const pessoaFisica = request.body;

  const email = process.env.EMAIL;
  const senha = process.env.SENHA;
  const KEYcodi = process.env.KEYCOD;
  const URL = process.env.URL_SITE;

  if (!email || !senha || !KEYcodi) {
    return response
      .status(500)
      .json({ message: "Variáveis de ambiente não estão definidas" });
  }

  const token = jwt.sign({ email: pessoaFisica.email }, KEYcodi, {
    expiresIn: "1h", // Define o tempo de expiração do token
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: false,
    service: "yahoo",
    pool: true,
    auth: {
      user: email,
      pass: senha,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
    tls: {
      rejectUnauthorized: false,
    },
    debug: false,
    logger: true,
  });
  try {
    const mailOptions = {
      from: email,
      to: pessoaFisica.email,
      replyTo: email,
      subject: " Validar Cadastro",
      html: `
        <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Home</title>
      <style>
        /* Estilos inline são mais compatíveis com e-mails */
        .container {
          width: 100%;
          max-width: 600px; /* Largura máxima para melhor compatibilidade */
          margin: 0 auto; /* Centralizar na página */
          background-image: url("./media/home-background.svg");
          background-repeat: no-repeat;
          background-position: 700px bottom;
          background-color: #f0f0f5;
        }
  
        .content {
          padding: 50px; /* Espaçamento interno */
          text-align: center; /* Centralizar o conteúdo */
        }
  
        .title {
          font-size: 32px;
          color: #3cb371;
          margin-bottom: 20px;
        }
  
        .sub-title {
          font-size: 18px;
          margin-bottom: 20px;
        }
  
        .button {
          display: block; /* Transformar em bloco para centralizar */
          background-color: #3cb371;
          color: #ffffff;
          padding: 15px 30px;
          text-decoration: none; /* Remove o sublinhado padrão */
          border-radius: 5px;
          font-size: 20px;
          margin: 0 auto; /* Centralizar o botão */
          text-decoration: underline;
        }
  
        .button:hover {
          opacity: 0.9;
        }
  
        .icon-map-pinned {
          font-size: 64px; /* Tamanho aumentado do ícone */
          color: #3cb371; /* Cor definida como #3cb371 */
          width: 30%;
          max-width: 300px; /* Tamanho máximo do mapa */
          height: auto; /* Ajustar a altura automaticamente */
          margin: 0 auto 20px; /* Centralizar e adicionar espaço abaixo */
        }
      </style>
    </head>
    <body>
      <table class="container" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <div class="content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3cb371"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pinned icon-map-pinned"
              >
                <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
                <circle cx="12" cy="8" r="2" />
                <path
                  d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"
                />
              </svg>
              <h1 class="title">
                Confirmação de Cadastro
              </h1>
              <p class="sub-title">Email: ${pessoaFisica.email} </p>
              <p class="sub-title">Olá,</p>
              <p class="sub-title">Para ativar sua conta e começar a utilizar nossa plataforma, por favor, confirme seu endereço de email clicando no botão abaixo:</p>
              <a id="submitButton" href="${URL}/ValidacaoEmail?option=${pessoaFisica.option}&token=${token}" class="button">Cadastre Agora!!</a>
              <p class="sub-title">Se você não solicitou essa confirmação, ignore este email.</p>
              <p class="sub-title">Obrigado!</p>
            </div>
          </td>
        </tr>
      </table>
    </body>
  </html>
  
  `,
    };

    await transporter.sendMail(mailOptions);

    return response.status(200).json({ mensagem: "Validação Enviada." });
  } catch (error) {
    console.error("Erro ao enviar email de validação:", error);
    return response
      .status(500)
      .json({ mensagem: "Erro ao enviar email de validação." });
  }
}

export async function Validacao(request: Request, response: Response) {
  const { token } = request.body; // Obtém o e-mail da requisição

  const KEYcodi = process.env.KEYCOD;

  // Verificar o token
  if (!token) {
    return response.status(400).json({ mensagem: "Token não fornecido." });
  }

  if (!KEYcodi) {
    console.log("Variável de ambiente não Encontrada");
    return response.status(500).json({ message: "Erro" });
  }

  try {
    const decodedToken = jwt.verify(token, KEYcodi) as { email: string };
    const email = decodedToken.email;

    //verificar se a pessoa existe no banco de dados
    const pessoaFisica = await prisma.pessoafisica.findFirst({
      where: {
        email: email,
      },
    });

    // Se a pessoa não existir, retorne um erro 404
    if (!pessoaFisica) {
      return response
        .status(404)
        .json({ mensagem: "Cadastro não encontrado." });
    }

    // Verifica se o status atual é "NaoVerificado"
    if (pessoaFisica.status === "NaoVerificado") {
      const pessoaFisicaAtualizada = await prisma.pessoafisica.update({
        where: {
          email: email,
        },
        data: {
          status: "Verificado",
        },
      });

      // Retorna a pessoa atualizada
      return response.status(200).json({
        mensagem: "Email Confirmado com sucesso.",
        Empresa: pessoaFisicaAtualizada,
      });
    } else {
      // Se o status não for "NaoVerificado", retorna uma mensagem informando isso
      return response
        .status(400)
        .json({ mensagem: "O Email já está verificado." });
    }
  } catch (error) {
    // Se ocorrer algum erro durante o processo, retorne um erro 500
    console.error("Erro ao validar empresa:", error);
    return response
      .status(500)
      .json({ mensagem: "Erro ao validar a Empresa." });
  }
}
