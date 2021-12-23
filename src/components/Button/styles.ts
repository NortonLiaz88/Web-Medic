import styled from "styled-components";

interface Props {
  color: string;
}

export const ButtonStyled = styled.button<Props>`
  background: ${({ color }) => color};
  border: 0px;

  padding: 1rem 2.5rem;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.span`
  font-family: Archivo;
  font-style: normal;
  font-weight: regular;
  font-size: 24px;
  color: #ffffff;

`;


export const IconButton = styled.img.attrs({})`
  height: 42px;
  width: 36px;
  margin-right: 21px;
`;
