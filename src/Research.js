// components/Research.js
import React from 'react';
import { Typography, Paper } from '@mui/material';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 10px;
  text-align: center;
`;

const Research = () => (
    <StyledPaper>
        <Typography variant="h4">Research Activities</Typography>
        <Typography variant="body1">
            Focused on the influence of EOTC on the environment, culture, art, welfare architecture, literature, philosophy, music, language, and national history, our research activities aim to contribute to the socio-economic and political development of East African countries.
        </Typography>
    </StyledPaper>
);

export default Research;
