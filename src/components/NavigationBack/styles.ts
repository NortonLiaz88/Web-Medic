import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4.75rem 10rem 2rem 10rem;
`;

export const Button = styled.button`
    background: transparent;
    border: 0px;

    &:hover{
        cursor: pointer;
    }
`;

export const LeftArrow = styled(FiArrowLeft)`
    font-size: 2.5rem;
    color: #fff;
`;

export const Text = styled.span`
    font-size: 1.8rem;
    font-family: ${({theme}) => theme.fonts.title_regular};
    color: #fff;
    
`;