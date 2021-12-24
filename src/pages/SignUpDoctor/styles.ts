import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReusableButton } from "../../components/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 225px;
  height: 106px;
  margin: 48px 0px 0px 41px;
`;

export const Cover = styled.div`
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const CoverImg = styled.img`
  width: 540px;
  height: 380px;
  align-self: center;
  justify-self: center;
  margin: 126px;
`;

export const FormContainer = styled.div`
  background: #fff;
  width: 40%;
  padding: 7.5rem 3.75rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 2.25rem;
  color: #484b4d;
  margin-bottom: 0.5rem;
`;

export const SecondaryTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 1.25rem;
  color: #484b4d;
`;

export const NavigateToSignUp = styled(Link)`
  color: #484b4d;
`;

export const HorizontalDivider = styled.hr`
  flex: 1;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.link};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 1rem;
`;

export const CheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  margin-right: 0.5rem;
  width: 28px;
  height: 28px;
`;

export const ButtonContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
`;

export const RegisterButton = styled.button`
  width: 100% !important;
  background: ${({ theme }) => theme.colors.primary};
  border: 0px;

  padding: 1rem 2.5rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.span`
  font-family: Archivo;
  font-style: normal;
  font-weight: regular;
  font-size: 24px;
  color: #ffffff;
`;


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & + div {
    margin-top: 1.5rem;
  }
`;