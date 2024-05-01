import {
  Container,
  Image,
  LeftContainer,
  RightContainer,
  Title,
} from "./styles";

export default function ObLocal() {
  return (
    <Container>
      <LeftContainer>
        <Title>Obtendo Localização...</Title>
        <Title>
          <span className="spinner" />
        </Title>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}
