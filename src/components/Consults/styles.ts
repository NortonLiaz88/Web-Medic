import styled from "styled-components";

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

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.title_bold};
  font-size: 2.5rem;
  color: #fff;

  margin: 0 auto;
  text-align: initial;
  margin: 0 auto;
  width: 50%;
  display: block;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 330px;
  width: 50%;
`;



export const Card = styled.div`
  background: #fff;
`;

export const Identification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
`;

export const Icon = styled.img``;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const Name = styled.span`
  font-family: ${({theme}) => theme.fonts.title_medium};
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #2D2E43;
`;

export const Destiny = styled.span`
    font-family: ${({theme}) => theme.fonts.regular};
  font-size: 1rem;
  line-height: 1rem;
  color: #6A6180;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
`;

export const Label = styled.span`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 1rem;
  color: #6A6180;
`;

export const Description = styled.p`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 1rem;
  color: #6A6180;

`;

export const CardFooter = styled.div`
  height: 8.5rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};

  display: flex;
  flex-direction: row;

  padding-top: 2.875rem;
  padding-bottom: 2.25rem;
  padding-right: 1.5rem;
  padding-left: 4rem;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextInfo = styled.span`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 20px;
  line-height: 26px;
  margin-left: 1.25rem;
  color: #AAAAAA;
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.text_info};
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

export const TextButton = styled.span`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 1.25rem;
  color: #ffffff;
`;
