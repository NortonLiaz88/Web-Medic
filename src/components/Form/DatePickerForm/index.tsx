import React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { Control } from "react-hook-form";
import { date } from "yup";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

import {
  DateContainer,
  Label,
  DateInputContainer,
  DatePickerStyled,
} from "./styles";

interface Props extends ReactDatePickerProps {
  control: Control;
  label: string;
  onChange: (date) => void;
}

export const DatePickerForm: React.FC<Props> = ({
  control,
  value,
  label,
  onChange,
  ...rest
}: Props) => {
  return (
    <DateContainer>
      <Label>{label}</Label>
      <DateInputContainer>
        <DatePickerStyled
          locale={ptBR}
          dateFormat="dd/MM/yyyy"
          {...rest}
          onChange={onChange}
        />
      </DateInputContainer>
    </DateContainer>
  );
};
