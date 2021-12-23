import React from 'react';
import { NavigationBack } from '../../components/NavigationBack';
import { CardMenu, Container, Header, Item, MenuOptions, Title } from './styles';


const PatientMenu: React.FC = () => {
    return(<Container>
        <Header>
            <NavigationBack></NavigationBack>
        </Header>
        <CardMenu>
          <Title>Menu</Title>
          <MenuOptions>
            <Item to="/patient-consult">Cadastrar consulta</Item>
            <Item to="/my-consults-patient">Minhas Consultas</Item>
          </MenuOptions>
        </CardMenu>
      </Container>)
}


export default PatientMenu;
