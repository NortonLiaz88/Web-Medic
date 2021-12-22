import React from "react";

import {
  DateContainer,
  Label,
  TimeInputContainer,
  TimePickerStyled,
} from "./styles";

export const TimeForm: React.FC = () => {
  return (
    <DateContainer>
      <Label>Hora</Label>
      <TimeInputContainer>
        <TimePickerStyled />
      </TimeInputContainer>
    </DateContainer>
  );
};
