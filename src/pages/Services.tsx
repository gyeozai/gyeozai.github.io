import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import introData from '../data/intro.json';

const Services = () => {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      sx={{ pt: 8 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            聯盟服務
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            {introData.services}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={introData.services_image}
              alt="聯盟服務"
              sx={{
                width: '80%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 