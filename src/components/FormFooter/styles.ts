import styled from "styled-components";
import theme from "../../styles/theme";


export const Container = styled.div`
    height: 8.5rem;
    width: 100%;
    background: ${({theme}) => theme.colors.shape};
    
    display: flex;
    flex-direction: row;

    padding-top: 2.875rem;
    padding-bottom: 2.25rem;

    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Icon = styled.img`
    margin-right: 1rem;
`;
export const Message = styled.span`
    color: ${({theme}) => theme.colors.text_info};
`;

export const ButtonStyled = styled.button`
  background: ${({ theme }) => theme.colors.btn_primary};
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
  font-weight: bold;
  font-size: 1.25rem;
  color: #ffffff;

`;