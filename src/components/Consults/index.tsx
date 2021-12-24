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
import { format, formatISO } from "date-fns";

export interface ConsultsProps {
  dataList: Props[];
}
interface Props {
  doctor: string;
  especialidade: string;
  doenca?: string;
  data_consulta: string;
}

const Consults: React.FC<ConsultsProps> = ({
  dataList
}: ConsultsProps) => {
  // const data = [
  //   {
  //     name: "Fulano de tal",
  //     speciality: "Especialidade",
  //     description: "NANANA",
  //     date: "19/12/1999",
  //   },

  //   {
  //     name: "Fulano de tal",
  //     speciality: "Especialidade",
  //     description: "NANANA",
  //     date: "19/12/1999",
  //   },
  // ];

  return (
    <Container>
      <Header>
        <NavigationBack></NavigationBack>
        <Title>Estas são suas consultas</Title>
      </Header>
      <CardsContainer>
        {dataList.map((consult) => (
          <Card>
            <Identification>
              <Icon src={defaultAvatar} />
              <Data>
                <Name>{consult.doctor}</Name>
                <Destiny>{consult.especialidade}</Destiny>
              </Data>
            </Identification>
            <DescriptionContainer>
              <Label>Descrição:</Label>
              <Description>
                {consult.doenca}
                {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. */}
              </Description>
            </DescriptionContainer>
            <CardFooter>
              <Info>
                <Label>data:</Label>
                <TextInfo>{format(new Date(consult.data_consulta), "dd/MM/yyy HH:mm")}</TextInfo>
              </Info>
              <ButtonStyled>
                <TextButton>Entrar em contato</TextButton>
              </ButtonStyled>
            </CardFooter>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Consults;
