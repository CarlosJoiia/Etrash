import {
  Container,
  Title,
  Button,
  Image,
  Image2,
  LeftContainer,
  RightContainer,
  SubTitle,
  ButtonBox,
} from "./styles";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function ValidacaoEmail() {
  const URL = process.env.REACT_APP_BACKEND_URL;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const option = searchParams.get("option");

  useEffect(() => {
    async function enviarRequisicao() {
      try {
        const response = await fetch(URL + "Validacao" + option, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Requisição enviada com sucesso!");
          toast(data.mensagem, {
            type: "success",
            autoClose: 8000,
          });
        } else {
          toast(data.mensagem, {
            type: "error",
            autoClose: 8000,
          });
          console.error("Erro ao enviar requisição:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
    }

    enviarRequisicao();
  }, []);

  return (
    <Container>
      <LeftContainer>
        <Title>Email Confirmado Com Sucesso!!</Title>
        <SubTitle>Seja Bem - Vindo</SubTitle>
        <Link to={"/"}>
          <Button
            onClick={() => setTimeout(() => window.location.reload(), 100)}
          >
            <ButtonBox>
              <Image2 />
            </ButtonBox>
            Voltar Para Home !!
          </Button>
        </Link>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}
