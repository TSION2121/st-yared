import {keyframes, styled} from "@mui/system";
import {Typography, Box, Container, Grid, Card, CardMedia, useTheme, CardContent, Divider, Paper} from '@mui/material';
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import NewsSection from "../NewsSection";

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;



const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;
const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%; // 16:9 aspect ratio
`;

const StyledBox = styled(Container)(({ theme }) => ({
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.03)',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
    animation: `${fadeIn} 0.8s ease-out`,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',

}));
const StyledCard = styled(Card)(({ theme }) => ({
    margin: '20px',
    padding: '20px',
    // alignItems:'center',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    color: theme.palette.text.primary,

}));
const Layout = ({darkMode}) => {
    const theme = useTheme();
    const { title } = useParams(); // Get the title from the URL
    const navigate = useNavigate(); // Hook to access the navigate function
    const [newsDetail, setNewsDetail] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/news');
                console.log('Fetched news:', response.data); // Log the fetched data
                const decodedTitle = decodeURIComponent(title).replace(/-/g, ' ');
                const matchedNews = response.data.find(news => news.title.toLowerCase() === decodedTitle.toLowerCase());
                console.log('Matched news:', matchedNews); // Log the matched news
                if (matchedNews) {
                    setNewsDetail(matchedNews);
                } else {
                    console.log('No matching news found');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, [title]);

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };




    return (
        <>

            <StyledBox>

                            <Container maxWidth="lg">
                                <Button onClick={handleBack} style={{ background:"white", margin: '20px 0' }}>
                                    Back
                                </Button>
                                <Paper elevation={3} sx={{ padding: "20px", marginTop: "20px", flexGrow: 1 }}>
                                    {newsDetail ? (
                                        <Grid container spacing={3}>
                                            {/* ... layout for displaying news details ... */}
                                            <Grid item xs={12} md={8}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {newsDetail.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {/*{paper.date.substring(0,10)}*/}
                                                    {new Date(newsDetail.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

                                                </Typography>
                                                <Divider sx={{ my: 1 }} />

                                                <Typography variant="body2" style={{ textAlign: 'justify' }}>
                                                    {newsDetail.content}
                                                </Typography>
                                                <Box
                                                    sx={{display: "flex", flexDirection:"row" , flexWrap:"wrap", width: '40%', height: 'auto',justifyContent: "center"
                                                    }}
                                                    component={"img"}  src={newsDetail.imageUrl}
                                                >
                                                </Box>
                                                {/* ... other news details ... */}
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                                <Grid container  md={12}   rowGap={2}>
                                                    {/* Use Box instead of Grid for better spacing control */}
                                                    <Box sx={{backgroundColor:"skyblue" ,width: '100%',flexGrow: 1 }}>
                                                        <NewsSection darkMode={darkMode} showPagination={true} />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ) : (
                                        <Typography variant="body1">News details are not available.</Typography>
                                    )}
                                </Paper>
                            </Container>


            </StyledBox>

        </>
    );
}

export default  Layout;