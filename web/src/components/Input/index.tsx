import { Container } from "./styles";
import InputMask from "react-input-mask";

interface InputProps {
  label: string;
  name: string;
  value: string;
  mask: string;
  type: string;
  onChange: Function;
}

export default function Input(props: InputProps) {
  return (
    <Container>
      <label>{props.label}</label>

      <InputMask
        required
        type={props.type}
        name={props.name}
        value={props.value}
        mask={props.mask}
        onChange={(ev) => {
          props.onChange((prev: any) => ({
            ...prev,
            [props.name]: ev.target.value,
          }));
        }}
        style={{
          border: "none",
          backgroundColor: "#F0F0F5",
          color: "#6C6C80",
          borderRadius: "8px",
          height: "28px",
          fontSize: "24px",
          padding: "10px",
        }}
      />
    </Container>
  );
}
