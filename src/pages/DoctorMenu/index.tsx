import React from "react";
import { NavigationBack } from "../../components/NavigationBack";
import {
  Container,
  Header,
  CardMenu,
  Title,
  MenuOptions,
  Item,
} from "./styles";

const DoctorMenu: React.FC = () => {
  return (
    <Container>
      <Header>
      </Header>
      <CardMenu>
        <Title>Menu</Title>
        <MenuOptions>
          <Item to="/doctor-avaliabilty">Cadastrar dados médicos</Item>
          <Item to="/">Minhas Consultas</Item>
        </MenuOptions>
      </CardMenu>
    </Container>
  );
};

export default DoctorMenu;
