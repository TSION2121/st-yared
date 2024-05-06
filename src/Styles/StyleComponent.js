// Styled components


import styled from "styled-components";
import {AppBar, Menu, MenuItem, Tabs} from "@mui/material";
import {Box} from "@mui/joy";

export const StyledVerticalTabs = styled(Tabs)`
  display: none; // Hide vertical tabs on larger screens

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledLogo = styled('img')`
  height: 50px;
  margin-right: 20px;
`;
export const StyledMenuItem = styled(MenuItem)`
  &:hover {
    background-color: #f2f2f2;
    transition: background-color 0.3s ease;
  }
`;


export const StyledMenus = styled(Menu)`
margin: 10vh;
  height: 30vh;
color: blue`;


export const StyledAppBar = styled(AppBar)`
  margin-bottom: 30px;
  overflow: hidden;

`;

export const StyledMainContent = styled(Box)`
  flex-grow: 1;
  
`;

export const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
