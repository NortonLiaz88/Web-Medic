import React from "react";
import { Control, Controller } from "react-hook-form";
import { Container, InputContainer, Input, Label } from "./styles";

interface Props {
  name: string;
  label: string;
  control: Control;
  type?: string;
}

export const InputForm: React.FC<Props> = ({
  label,
  name,
  control,
  type,
  ...rest
}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input type={type} onChange={onChange} value={value} {...rest} />
          )}
          name={name}
        />
      </InputContainer>
    </Container>
  );
};
