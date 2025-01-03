// components/Home.js
import React from 'react';
import {Typography, Paper, Card, Grid} from '@mui/material';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 10px;
  text-align: center;
  background-color: dodgerblue;
`;

// components/DigitalArchive.js
export const DigitalArchive = () => (
    <StyledPaper>
        <Typography variant="h4">Digital Archive</Typography>
        <Typography variant="body1">
            We collect, preserve, and restore the unique and valuable written heritage of EOTC through digital means and artifacts, ensuring accessibility for future generations.
        </Typography>
    </StyledPaper>
);

// components/Education.js
export const Education = () => (
    <StyledPaper>
        <Typography variant="h4">Education</Typography>
        <Typography variant="body1">
            Our academy provides a learning environment for academics and individuals of all ages, offering knowledge and experiences about EOTC's beliefs, history, language, literature, music, archaeology, art, and architecture.
        </Typography>
    </StyledPaper>
);

// components/Integration.js
export const Integration = () => (
    <StyledPaper>
        <Typography variant="h4">Integration</Typography>
        <Typography variant="body1">
            We support the integration of migrants from the Horn of Africa in Germany and Europe, offering training events, seminars, and conferences to facilitate their successful integration and life paths.
        </Typography>
    </StyledPaper>
);

// components/Ecumenism.js
export const Ecumenism = () => (
    <StyledPaper>
        <Typography variant="h4">Ecumenism</Typography>
        <Typography variant="body1">
            Our research projects explore the multifaceted relationship between EOTC and German and worldwide ecumenism, fostering understanding and cooperation.
        </Typography>
    </StyledPaper>
);

// components/Dissemination.js
export const Dissemination = () => (
    <StyledPaper>
        <Typography variant="h4">Dissemination</Typography>
        <Typography variant="body1">
            We disseminate new research results about EOTC from our academy and other sources, contributing to the global body of knowledge through publications and our website.
        </Typography>
    </StyledPaper>
);

// components/Publicity.js
export const Resources = () => (
    <StyledPaper>
        <Typography variant="h4">Publicity</Typography>
        <Typography variant="body1">
            Our association enhances the visibility of research on EOTC through various activities such as training events, seminars, conferences, and specialized publications.
        </Typography>
    </StyledPaper>
);

// components/Courses.js
export const Courses = () => (
    <StyledPaper>
        <Typography variant="h4">Courses</Typography>
        <Typography variant="body1">
            We organize, coordinate, and offer courses and trainings about EOTC studies to all interested parties, in both digital and face-to-face formats.
        </Typography>
    </StyledPaper>
);

// components/Networks.js
export const Projects = () => (
    <StyledPaper>

        <Grid container alignItems="flex-start" spacing={2}
        //       sx={{  backgroundColor: 'dodgerblue'
        // }}
        >
            <Grid  item xs={12} >
            <Typography variant="h4">
            List of projects
        </Typography>
            </Grid>

            <Grid  item xs={6} >

                <Card sx={{  backgroundColor: 'dodgerblue'
                }} variant="outlined">
                    <Typography>
                        Project 1

                    </Typography>
                </Card>
            </Grid>
            <Grid  item xs={6} >

            <Card sx={{  backgroundColor: 'dodgerblue'
            }}    variant="outlined">
                <Typography>
                    Project 2

                </Typography>              </Card>
        </Grid>
            <Grid  item xs={6} >

                <Card sx={{  backgroundColor: 'dodgerblue'
                }} variant="outlined">
                    <Typography>
                        Project 3

                    </Typography>
                </Card>
            </Grid>
            <Grid  item xs={6} >

                <Card sx={{  backgroundColor: 'dodgerblue'
                }}    variant="outlined">
                    <Typography>
                        Project 4

                    </Typography>              </Card>
            </Grid>
        </Grid>

</StyledPaper>
);

// components/InternationalCooperation.js
export const InternationalCooperation = () => (
    <StyledPaper>
        <Typography variant="h4">International Cooperation</Typography>
        <Typography variant="body1">
            Our association is dedicated to organizing and supporting national and international exchange, training, partnership, and cooperation programs related to EOTC studies.
        </Typography>
    </StyledPaper>
);


