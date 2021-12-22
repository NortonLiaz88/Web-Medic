import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & + div {
    margin-top: 1.5rem;
  }
`;

export const Label = styled.label`
  height: 24px;
  color: ${({ theme }) => theme.colors.label};
  margin-bottom: 0.5rem;
`;

export const InputContainer = styled.div`
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

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0px;
  color: ${({ theme }) => theme.colors.text};
  font-family:  ${({ theme }) => theme.fonts.regular};
  font-size: 1rem;

  & ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
