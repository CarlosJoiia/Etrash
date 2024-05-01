import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("./home-background.svg") no-repeat 700px bottom;
  background-color: ${(props) => props.theme.background};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 44px;
  color: ${(props) => props.theme.primary};
  padding-bottom: 50px;
  text-align: center;

  max-width: 500px;

  .spinner {
    display: inline-block;
    text-align: center;
    margin-left: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid #ccc;
    border-top-color: ${(props) => props.theme.primary};
    animation: spinner 1s linear infinite;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;
`;

export const ButtonBox = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  height: 50px;
  width: 40px;
  font-size: 30px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 50px;
  border: none;

  border-radius: 5px;

  position: relative;
  padding-left: 50px;

  &:hover {
    filter: opacity(0.9);
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img.attrs(() => ({
  src: "map-pinned.svg",
}))`
  width: 50%;
`;

export const Image2 = styled.img.attrs(() => ({
  src: "./cursor.png",
  color: "white",
}))`
  width: 50%;
`;
