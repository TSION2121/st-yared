import {StyledSocialIcons} from "./SocialIcons.styled";
import styled from "styled-components";
// import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'


export const  SocialIcons =() => {
    return (
        <StyledSocialIcons>
            <li>
                <a href='https://twitter.com'>
                    {/*<FaTwitter />*/}
                </a>
            </li>
            <li>
                <a href='https://facebook.com'>
                    {/*<FaFacebook />*/}
                </a>
            </li>
            <li>
                <a href='https://linkedin.com'>
                    {/*<FaLinkedin />*/}
                </a>
            </li>
        </StyledSocialIcons>
    )
}
export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`


export const Flex = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  color : white;
  opacity:0/9;
  background-color : transparent;
  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  position: ${({ margin }) => margin || 'relative'};
  margin-top: ${({top}) => top || '0px'};
  bottom: 0;
  width: 100%;
  z-index:1;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`
