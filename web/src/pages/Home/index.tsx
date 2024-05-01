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
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>Coloque sua Cooperativa no mapa local da sua cidade</Title>
        <SubTitle>Encontre Empresas e pessoas</SubTitle>
        <Link to={"/Cadastro"}>
          <Button
            onClick={() => setTimeout(() => window.location.reload(), 100)}
          >
            <ButtonBox>
              <Image2 />
            </ButtonBox>
            Cadastre Agora!!
          </Button>
        </Link>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}
