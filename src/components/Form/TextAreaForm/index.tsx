import React, {TextareaHTMLAttributes} from "react";
import { Control, Controller } from "react-hook-form";
import { 
    Container, 
    Label, 
    TextAreaContainer, 
    TextArea 
} from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLSelectElement> {
    label: string;
    control: Control;
    name: string;
  }
  

export const TextAreaForm: React.FC<Props> = ({label, control, name, rows, cols, ...rest}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextAreaContainer>
      <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextArea value={value} onChange={onChange} rows={rows} cols={cols}></TextArea>
          )}
          name={name}
        />
        
      </TextAreaContainer>
    </Container>
  );
};
