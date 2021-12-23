import React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { Control, Controller } from "react-hook-form";
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
  name: string;
  onChange: (date) => void;
}

export const DatePickerForm: React.FC<Props> = ({
  control,
  name,
  value,
  label,
  onChange,
  ...rest
}: Props) => {
  return (
    <DateContainer>
      <Label>{label}</Label>
      <DateInputContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePickerStyled
            locale={ptBR}
            dateFormat="dd/MM/yyyy"
            {...rest}
            onChange={onChange}
            selected={value}
          />
          )}
          name={name}
        />
      </DateInputContainer>
    </DateContainer>
  );
};
