import styled from "styled-components";
import { Link } from "react-router-dom";


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

export const CardMenu = styled.div`
  position: absolute;
  top: 330px;
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.06);
  padding: 1rem 2.5rem 4.5rem 2.5rem;
`;
export const Title = styled.span`
    font-family: ${({theme}) => theme.fonts.title_bold};
    color: #526089;
    font-size: 36px;
    display: block;
    margin-bottom: 5rem;
`;
export const MenuOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Item = styled(Link)`
    font-size: 1.5rem;
    font-family: ${({theme}) => theme.fonts.title_bold};
    color: ${({theme}) => theme.colors.text_info};
    margin-right: 1.5rem;
    cursor: pointer;
`;
