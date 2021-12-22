import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyled, Text, IconButton } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  iconUrl?: string;
  buttonPress?: () => void;
}

export const ReusableButton: React.FC<Props> = ({
  color,
  text,
  iconUrl,
  buttonPress,
  ...rest
}: Props) => {
  return (
    <ButtonStyled onClick={buttonPress} color={color}>
      {iconUrl && <IconButton src={iconUrl} />}
      <Text>{text}</Text>
    </ButtonStyled>
  );
};
