import React, {SelectHTMLAttributes} from "react";
import { Container, Label, SelectContainer, Select } from "./styles";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: IOptions[];
}

interface IOptions {
  value: string | ReadonlyArray<string> | number | undefined;
  label: string;
}


export const SelectForm: React.FC<Props> = ({label, value, options,...rest}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SelectContainer>
        <Select value={value} >
          {options.map((e, key) => {
            return <option key={key} value={e.value}>{e.label}</option>
          })}
        </Select>
      </SelectContainer>
    </Container>
  );
};
