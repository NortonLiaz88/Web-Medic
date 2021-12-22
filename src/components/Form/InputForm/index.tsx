import React from "react";
import { Control } from "react-hook-form";
import { Container, InputContainer, Input, Label } from "./styles";

interface Props {
  label: string;
  control: Control;
}

export const InputForm: React.FC<Props> = ({label}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <Input></Input>
      </InputContainer>
    </Container>
  );
};
