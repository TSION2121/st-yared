import React from 'react';
import { Typography, Box, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
const StudyAtAcademy = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                {t('study_at_academy.welcome')}
            </Typography>
            <Grid container spacing={4}>
                {/* Add more Grid items as needed */}
                {/* Example for Language */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://th.bing.com/th?id=OIP.qYkzJNgDFuSEd0upFPcbCgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" // replace with your image path
                            alt={t('study_at_academy.language')}
                        />
                        <CardContent>
                            <Typography variant="h6">{t('study_at_academy.language')}</Typography>
                            <Typography variant="body2">
                                {t('study_at_academy.language_description')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Example for Literature */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://th.bing.com/th?id=OIP.RpJKC8ksDwK_Nw6SQVdJEgHaEl&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" // replace with your image path
                            alt={t('study_at_academy.literature')}
                        />
                        <CardContent>
                            <Typography variant="h6">{t('study_at_academy.literature')}</Typography>
                            <Typography variant="body2">
                                {t('study_at_academy.literature_description')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Example for Music */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://th.bing.com/th/id/OIP.cnbYxWjEUi_SJwrpq1jAIQAAAA?w=235&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" // replace with your image path
                            alt={t('study_at_academy.music')}
                        />
                        <CardContent>
                            <Typography variant="h6">{t('study_at_academy.music')}</Typography>
                            <Typography variant="body2">
                                {t('study_at_academy.music_description')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* And many more... */}
                <Grid item xs={12}>
                    <Button component={Link} to="/more-courses" variant="contained" color="primary">
                        {t('study_at_academy.more_courses')}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudyAtAcademy;