import { Container, InputStyled } from "./styles";
interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: Function;
}

export default function Inputemail(props: InputProps) {
  return (
    <Container>
      <label>{props.label}</label>
      <InputStyled
        required
        type="email"
        value={props.value}
        onChange={(ev) => {
          props.onChange((prev: any) => ({
            ...prev,
            [props.name]: ev.target.value,
          }));
        }}
      />
    </Container>
  );
}
