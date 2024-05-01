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
import { useLocation } from "react-router-dom";

interface LocationState {
  email: string;
  option: string;
}

export default function ValidarEmail() {
  const URL = process.env.REACT_APP_BACKEND_URL;
  const location = useLocation<LocationState>();
  const { email } = location.state || {};
  const { option } = location.state || {};

  console.log(email, option);

  useEffect(() => {
    async function enviarRequisicao() {
      try {
        const response = await fetch(URL + "Validar" + option, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            option: option,
          }),
        });

        if (response.ok) {
          console.log("Requisição enviada com sucesso!");
        } else {
          console.error("Erro ao enviar requisição:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
    }

    enviarRequisicao();
  });

  return (
    <Container>
      <LeftContainer>
        <Title>Uma Confirmação De Email Foi Enviada</Title>
        <SubTitle>Verifique sua Caixa de Email</SubTitle>
        <Button
          onClick={() => {
            fetch(URL + "Validar" + option, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                option: option,
              }),
            });
          }}
        >
          <ButtonBox>
            <Image2 />
          </ButtonBox>
          Enviar Novamente!!
        </Button>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}
