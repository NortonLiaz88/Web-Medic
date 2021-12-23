import React from "react";
import { Control, Controller } from "react-hook-form";

import {
  DateContainer,
  Label,
  TimeInputContainer,
  TimePickerStyled,
} from "./styles";

interface Props {
  control: Control;
  name: string;
}

export const TimeForm: React.FC<Props> = ({control, name}: Props) => {
  return (
    <DateContainer>
      <Label>Hora</Label>
      <TimeInputContainer>
      <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TimePickerStyled onChange={onChange} />
          )}
          name={name}
        />
        
      </TimeInputContainer>
    </DateContainer>
  );
};
