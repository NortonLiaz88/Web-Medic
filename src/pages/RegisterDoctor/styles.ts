import styled from "styled-components";
import { Link } from "react-router-dom";

import { type } from "os";
import theme from "../../styles/theme";
import DatePicker from "react-modern-calendar-datepicker";

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

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  font-family: ${({ theme }) => theme.fonts.medium};

  font-size: 24px;
  line-height: 34px;
`;

export const AddButton = styled.button`
  padding: 1rem 2.5rem;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  > svg {
    margin-right: 1rem;
  }
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

export const SpecialityContainer = styled.div`
  & + div {
    margin-top: 0.5rem;
  }
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #fa514d;
  font-size: 1.5rem;
  cursor: pointer;
  svg {
    margin-top: 32px;
  }
`;

export const DatePickerStyled = styled(DatePicker)`
  background: ${({ theme }) => theme.colors.input_background} !important;
  height: 56px !important;
  border: 2px solid ${({ theme }) => theme.colors.border} !important;
  border-radius: 10px !important;
  padding: 0 16px !important;
  width: 100% !important;
  color: #666360 !important;
  display: flex !important;
  align-items: center !important;
  & + div {
    margin-top: 8px;
  }
`;

export const Papa = styled.div`
  display: flex;
  & + div {
    margin-top: 8px;
  }
`;

export const SelectContainer = styled.div`
  background: ${({ theme }) => theme.colors.input_background};
  height: 56px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
 

  display: flex;
  flex-direction:row;
`;

export const Select = styled.select`
  background: transparent;
  flex: 1;
  border: 0px;
  font-family:  ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  & ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const PeriodContainer = styled.div`
  display flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
