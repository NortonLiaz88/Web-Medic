import React, {TextareaHTMLAttributes} from "react";
import { 
    Container, 
    Label, 
    TextAreaContainer, 
    TextArea 
} from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLSelectElement> {
    label: string;
  }
  

export const TextAreaForm: React.FC<Props> = ({label, rows, cols, ...rest}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextAreaContainer>
        <TextArea rows={rows} cols={cols}></TextArea>
      </TextAreaContainer>
    </Container>
  );
};
