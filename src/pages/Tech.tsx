import { Container, Typography, Box, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import introData from '../data/intro.json';

const Tech = () => {
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
            核心技術
          </Typography>

          <Grid container spacing={4}>
            {/* Sensor Technology */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Sensor Technology
              </Typography>
              <Grid container spacing={2}>
                {introData.technologies_module.sensor.map((tech) => (
                  <Grid item xs={12} key={tech.id}>
                    <Card sx={{
                      bgcolor: 'rgba(76, 175, 80, 0.2)',
                      '&:hover': {
                        bgcolor: 'rgba(76, 175, 80, 0.4)',
                      }
                    }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {tech.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {tech.detail1}
                          {tech.detail2 && <><br />{tech.detail2}</>}
                          {tech.detail3 && <><br />{tech.detail3}</>}
                          {tech.detail4 && <><br />{tech.detail4}</>}
                          {tech.detail5 && <><br />{tech.detail5}</>}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* AI-Related Technology */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                AI-Related Technology
              </Typography>
              <Grid container spacing={2}>
                {introData.technologies_module.ai.map((tech) => (
                  <Grid item xs={12} key={tech.id}>
                    <Card sx={{
                      bgcolor: 'rgba(255, 193, 7, 0.2)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 193, 7, 0.4)',
                      }
                    }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {tech.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {tech.detail1}
                          {tech.detail2 && <><br />{tech.detail2}</>}
                          {tech.detail3 && <><br />{tech.detail3}</>}
                          {tech.detail4 && <><br />{tech.detail4}</>}
                          {tech.detail5 && <><br />{tech.detail5}</>}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Sensor Technology Table */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" gutterBottom>
            Sensor Technology 詳細資訊
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>技術名稱</TableCell>
                  <TableCell>詳細說明</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {introData.technologies_module.sensor_table.map((tech) => (
                  <TableRow 
                    key={tech.id} 
                    sx={{ 
                      bgcolor: 'rgba(76, 175, 80, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(76, 175, 80, 0.4)',
                        cursor: 'pointer',
                      }
                    }}
                  >
                    <TableCell>
                      <Typography variant="subtitle1">{tech.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{tech.enname}</Typography>
                    </TableCell>
                    <TableCell>{tech.detail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* AI Technology Table */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" gutterBottom>
            AI-Related Technology 詳細資訊
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>技術名稱</TableCell>
                  <TableCell>詳細說明</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {introData.technologies_module.ai_table.map((tech) => (
                  <TableRow 
                    key={tech.id} 
                    sx={{ 
                      bgcolor: 'rgba(255, 193, 7, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255, 193, 7, 0.4)',
                        cursor: 'pointer',
                      }
                    }}
                  >
                    <TableCell>
                      <Typography variant="subtitle1">{tech.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{tech.enname}</Typography>
                    </TableCell>
                    <TableCell>{tech.detail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default Tech; 