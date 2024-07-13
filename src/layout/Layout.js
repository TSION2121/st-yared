import {keyframes, styled} from "@mui/system";
import {Typography, Box, Container, Grid, Card, CardMedia, useTheme, CardContent} from '@mui/material';

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyledCard = styled(Card)(({ theme }) => ({
    margin: '20px',
    padding: '20px',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    color: theme.palette.text.primary,

}));


const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    width: '300px',
    height: '200px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

const Layout = () => {
    const theme = useTheme();

    const StyledBox = styled(Box)(({ theme }) => ({
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
  return (
      <>
          <StyledBox>
              <Grid item  xs={12} sm={6} md={4}>
                  <StyledCard>
                      <StyledCardMedia

                      />
                      <StyledCardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                          </Typography>
                          <Typography>
                          </Typography>
                      </StyledCardContent>
                  </StyledCard>
              </Grid> </StyledBox>


      </>
  );
}

export default  Layout;