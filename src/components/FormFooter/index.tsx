import React from "react";
import theme from "../../styles/theme";
import { ReusableButton } from "../Button";
import { Container, Info, ButtonStyled, Text, Icon, Message } from "./styles";
import warningIconUrl from "../../assets/img/warning.svg";

interface Props {
  buttonPress: () => void;
}

export const FormFooter: React.FC<Props> = ({ buttonPress }: Props) => {
  function handleClick() {
    console.log("RAPAZ");
  }
  return (
    <Container>
      <Info>
        <Icon src={warningIconUrl} />
        <Message>Importante! Preencha todos os dados</Message>
      </Info>
      <ButtonStyled onClick={buttonPress}>
        <Text>Salvar Cadastro</Text>
      </ButtonStyled>
      {/* <ReusableButton
        onClick={() => handleClick}
        text="Salvar Cadastro"
        color={theme.colors.btn_primary}
      ></ReusableButton> */}
    </Container>
  );
};
