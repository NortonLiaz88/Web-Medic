import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Identity,
  Title,
  Logo,
  Footer,
  Button,
  TitleContainer,
  InfoContainer,
  TitleIcon,
  Description,
  IconButton,
} from "./styles";
import logoUrl from "../../assets/img/logo.svg";
import titleIcon from "../../assets/img/title-icon.svg";
import patientIcon from "../../assets/img/patient.svg";
import medicinIcon from "../../assets/img/medicin-icon.svg";
import { ReusableButton } from "../../components/Button";
import theme from "../../styles/theme";
import { FormFooter } from "../../components/FormFooter";

const Home: React.FC = () => {
  return (
    <Container>
      <Identity>
        <TitleContainer>
          <InfoContainer>
            <Title>Webmedic</Title>
            <TitleIcon src={titleIcon} />
          </InfoContainer>
          <Description>Plataforma de consultas online</Description>
        </TitleContainer>

        <Logo src={logoUrl} alt="logo"></Logo>
      </Identity>
      <Footer>
        <Link to="/patient-consult">
          <ReusableButton
            color={theme.colors.btn_secondary}
            text="Paciente"
            iconUrl={patientIcon}
          ></ReusableButton>
        </Link>
        <Link to="/menu-doctor">
        <ReusableButton
          color={theme.colors.primary}
          text="Médico"
          iconUrl={medicinIcon}
        ></ReusableButton>
        </Link>
      </Footer>
    </Container>
  );
};

export default Home;
