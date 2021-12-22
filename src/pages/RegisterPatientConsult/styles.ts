import styled from "styled-components";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { type } from "os";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 368px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 330px;
  width: 50%;
`;
export const Form = styled.form`
  background-color: #fff;
  padding: 56px 64px;

  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & + div {
    margin-top: 1.5rem;
  }
`;

export const TitleHeader = styled.span`
  font-family: ${({ theme }) => theme.fonts.title_bold};
  font-size: 2.5rem;
  color: #fff;

  margin: 0 auto;
  text-align: initial;
  margin: 0 auto;
  width: 50%;
  display: block;
`;

export const Title = styled.span`
  font-family: ${({theme}) => theme.fonts.medium};

font-size: 24px;
line-height: 34px;

`;

export const HorizontalDivider = styled.hr`
  flex: 1;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1.5rem;
`;

export const StyledLink = styled(Link)`
  margin: 0.75rem 0;
  color: ${({ theme }) => theme.colors.link};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const PeriodContainer = styled.div`
  display flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
