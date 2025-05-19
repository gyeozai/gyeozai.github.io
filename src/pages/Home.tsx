import { Container, Typography, Box, Grid, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import membersData from '../data/members.json';
import introData from '../data/intro.json';
import { motion } from 'framer-motion';

interface AcademicMember {
  id: number;
  name: string;
  title: string;
  department: string;
  research: string;
  website: string;
  image: string;
}

interface IndustryMember {
  id: number;
  name: string;
  image: string;
}

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{ pt: 8 }}
    >
      <Container maxWidth="lg">
        {/* 成立宗旨 */}
        <Box 
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${introData.logo_transparent_only})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.1,
              zIndex: 0,
            }
          }}
        >
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
            成立宗旨
          </Typography>
          <Typography variant="h6" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
            {introData.mission}
          </Typography>
        </Box>

        {/* 核心技術 */}
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
            核心技術
          </Typography>
          <Grid container spacing={4}>
            {/* Sensor Technology */}
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom align="center" sx={{ mb: 4 }}>
                Sensor Technology
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {introData.technologies_module.sensor.map((tech) => (
                  <Grid item xs={12} sm={6} md={3} key={tech.id}>
                    <Card
                      sx={{
                        height: '100%',
                        transition: 'all 0.3s ease',
                        bgcolor: 'rgba(76, 175, 80, 0.2)',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: 6,
                          bgcolor: 'rgba(76, 175, 80, 0.4)',
                        },
                      }}
                    >
                      <RouterLink 
                        to="/tech" 
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <CardContent>
                          <Typography variant="h6" gutterBottom align="center" color="text.primary">
                            {tech.name}
                          </Typography>
                        </CardContent>
                      </RouterLink>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* AI-Related Technology */}
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom align="center" sx={{ mb: 4, mt: 6 }}>
                  AI-Related Technology
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  {introData.technologies_module.ai.map((tech) => (
                    <Grid item xs={12} sm={6} md={3} key={tech.id}>
                      <Card
                        sx={{
                          height: '100%',
                          transition: 'all 0.3s ease',
                          bgcolor: 'rgba(255, 193, 7, 0.2)',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: 6,
                            bgcolor: 'rgba(255, 193, 7, 0.4)',
                          },
                        }}
                      >
                        <RouterLink 
                          to="/tech" 
                          style={{ textDecoration: 'none', color: 'inherit' }}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <CardContent>
                            <Typography variant="h6" gutterBottom align="center" color="text.primary">
                              {tech.name}
                            </Typography>
                          </CardContent>
                        </RouterLink>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* 聯盟成員 - 只在桌面模式顯示 */}
        {!isMobile && (
          <Box 
            sx={{ 
              position: 'relative',
              my: 8,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${introData.logo_transparent_only})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.1,
                zIndex: 0,
              },  
            }}
          >
            <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
              學界成員
            </Typography>
            <Grid container spacing={3}>
              {membersData.academic.map((member: AcademicMember) => (
                <Grid item xs={12} sm={6} md={3} key={member.id}>
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all 0.3s ease',
                      bgcolor: 'rgba(255, 255, 255, 0.4)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        transform: 'scale(1.05)', 
                        boxShadow: 6,
                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                      },
                    }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <RouterLink 
                      to="/members"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                        <Box
                          component="img"
                          src={member.image}
                          alt={member.name}
                          sx={{
                            width: 'auto',
                            maxWidth: '100%',
                            height: 150,
                            objectFit: 'contain',
                            mb: 2,
                          }}
                        />
                        <Typography variant="body1" align="center">
                          <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                          {member.title && <Typography color="text.secondary">{member.title}</Typography>}
                          {member.department && <Typography color="text.secondary">{member.department}</Typography>}
                        </Typography>
                      </CardContent>
                    </RouterLink>
                  </Card>
                </Grid>
              ))}
            </Grid>
          
            <Typography variant="h4" gutterBottom align="center" sx={{ mt: 15, mb: 6 }}>
              業界會員
            </Typography>
            <Grid container spacing={3}>
              {membersData.industry.map((member: IndustryMember) => (
                <Grid item xs={12} sm={6} md={3} key={member.id}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 'auto',
                        maxWidth: '100%',
                        height: 150,
                        objectFit: 'contain',
                      }}
                    />
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      {member.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );    
};    

export default Home; 