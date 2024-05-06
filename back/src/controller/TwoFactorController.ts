import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

async function validarPessoa(email: string, senha: string, codigo: string) {
  const EMAIL_RESP = process.env.EMAIL;
  const SENHA_RESP = process.env.SENHA;

  const URL_SITE = process.env.URL_SITE;

  if (!EMAIL_RESP || !SENHA_RESP) {
    throw new Error("Variáveis de ambiente não estão definidas");
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: false,
      service: "yahoo",
      pool: true,
      auth: {
        user: EMAIL_RESP,
        pass: SENHA_RESP,
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

    const mailOptions = {
      from: EMAIL_RESP,
      to: email,
      replyTo: EMAIL_RESP,
      subject: "Validar Cadastro",
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
                  Verificação de Dois Fatores
                </h1>
                <p class="sub-title">Email: ${email} </p>
                <p class="sub-title">Código: ${codigo} </p>
                <p class="sub-title">Olá,</p>
                <p class="sub-title">Para ativar sua conta e começar a utilizar nossa plataforma, por favor, confirme seu endereço</p>
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

    return { mensagem: "Codigo enviado." };
  } catch (error) {
    console.error("Erro ao enviar email de validação:", error);
    return { mensagem: "Erro ao enviar email de validação." };
  }
}

export default validarPessoa;
