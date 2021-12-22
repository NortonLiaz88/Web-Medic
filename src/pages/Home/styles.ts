import styled from "styled-components";

interface Props {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 100vh;
`;

export const Identity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 0px 142px 0px 76px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.span`
  font-family: ${({ theme }) => theme.fonts.title_regular};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 36px;
  max-width: 268px;
  word-wrap: break-word;
`;

export const TitleIcon = styled.img.attrs({})``;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.title_regular};
  font-size: 64px;

  margin-right: 30px;
`;
export const Logo = styled.img.attrs({})``;
export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-self: flex-end;
  align-self: flex-start;

  padding: 58px 76px;
  gap: 16px;

  a {
    text-decoration: none;
  }
`;

export const Button = styled.button<Props>`
  background: ${({ color }) => color};
  border: 0px;

  width: 280px;
  height: 100px;
  border-radius: 8px;

  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  padding: 0 54px;
`;

export const IconButton = styled.img.attrs({})`
  margin-right: 21px;
`;
