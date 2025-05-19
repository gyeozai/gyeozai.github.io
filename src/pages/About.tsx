import { Container, Typography, Box, Grid } from '@mui/material';
import introData from '../data/intro.json';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const About = () => {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      sx={{ pt: 8 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ pt: { xs: 4, md: 6 } }}>
          <Box
            component="img"
            src={introData.logo_ori}
            alt="核心技術"
            sx={{
              width: '50%',
              height: 'auto',
              maxHeight: 400,
              objectFit: 'contain'
            }}
          />
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            成立宗旨
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
            {introData.mission}
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            核心技術
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
                {introData.technologies}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <RouterLink
                to="/tech"
                style={{ textDecoration: 'none' }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Box
                  component="img"
                  src={introData.technologies_image}
                  alt="核心技術"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 400,
                    objectFit: 'contain',
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}
                />
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 