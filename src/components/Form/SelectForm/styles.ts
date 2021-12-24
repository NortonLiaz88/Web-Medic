import AsyncSelect from "react-select/async";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & + div {
    margin-top: 1.5rem;
  }
`;

export const Label = styled.label`
  height: 24px;
  color: ${({ theme }) => theme.colors.label};
  margin-bottom: 0.5rem;
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
  & + div {
    margin-top: 8px;
  }
`;

// export const MySelect = styled(AsyncSelect).attrs((props) => ({
// }))`
  
//   border: 0px !important;
//   flex: 1;
//   border: 0px;
//   font-family:  ${({ theme }) => theme.fonts.regular};
//   color: ${({ theme }) => theme.colors.text};
//   font-size: 1rem;

//   & ::placeholder {
//     color: ${({ theme }) => theme.colors.placeholder};
//   }
// `;


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
