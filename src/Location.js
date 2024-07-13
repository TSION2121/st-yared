import React from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 'auto',
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
    padding: '50px 0'
}));

// LocationComponent
const Location = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <StyledGrid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <Typography variant="h5" gutterBottom>
                            {t('location.we_are_located_at')}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {t('location.academy_description')}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {t('location.address')}
                        </Typography>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ height: '300px', width: '100%' }}>
                        <iframe
                            title={t('location.map_title')}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?&q=Hamburg+Germany&output=embed"
                        ></iframe>
                    </div>
                </Grid>
            </StyledGrid>
        </Container>
    );
};

export default Location;
