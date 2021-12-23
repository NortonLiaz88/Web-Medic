import React from "react";
import { NavigationBack } from "../NavigationBack";
import {
  Container,
  Header,
  Card,
  Title,
  Identification,
  Icon,
  Data,
  Name,
  Destiny,
  DescriptionContainer,
  Label,
  Description,
  ButtonStyled,
  CardFooter,
  Info,
  TextButton,
  TextInfo,
  CardsContainer,
} from "./styles";
import defaultAvatar from "../../assets/img/avatar.svg";

interface Props {
  name: string;
  speciality: string;
  description?: string;
  date: string;
}

const Consults: React.FC<Props> = ({ name, speciality, description, date }: Props) => {
  return (
    <Container>
      <Header>
        <NavigationBack></NavigationBack>
        <Title>Estas são suas consultas</Title>
      </Header>
      <CardsContainer>
        <Card>
          <Identification>
            <Icon src={defaultAvatar} />
            <Data>
              <Name>Fulano de Tal</Name>
              <Destiny>Área de consulta</Destiny>
            </Data>
          </Identification>
          <DescriptionContainer>
            <Label>Descrição:</Label>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </Description>
          </DescriptionContainer>
          <CardFooter>
            <Info>
              <Label>data:</Label>
              <TextInfo>dd/mm/yyyy</TextInfo>
            </Info>
            <ButtonStyled>
              <TextButton>Entrar em contato</TextButton>
            </ButtonStyled>
          </CardFooter>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Consults;
