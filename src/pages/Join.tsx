import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List, ListItem, Link, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import introData from '../data/intro.json';

const Join = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      sx={{ pt: 8 }}
    >
      <Container maxWidth="lg">
        {/* servnicalExchange */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" gutterBottom>
            技術交流推廣
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              {!isMobile ? (
                // Desktop Mode
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell>服務項目</TableCell>
                      <TableCell>詳細說明</TableCell>
                      <TableCell>觀察會員</TableCell>
                      <TableCell>一般會員</TableCell>
                      <TableCell>貴賓會員</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {introData.services_module.technicalExchange.map((serv) => (
                      <TableRow 
                        key={serv.id} 
                        sx={{ 
                          bgcolor: 'rgba(244, 143, 177, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(244, 143, 177, 0.4)',
                            cursor: 'pointer',
                          }
                        }}
                      >
                        <TableCell>{serv.name}</TableCell>
                        <TableCell>{serv.detail}</TableCell>
                        <TableCell>{serv.observer}</TableCell>
                        <TableCell>{serv.ordinary}</TableCell>
                        <TableCell>{serv.premium}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              ) : (
                // Mobile Mode
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell width="40%">服務項目</TableCell>
                      <TableCell width="60%">詳情</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {introData.services_module.technicalExchange.map((serv) => (
                      <TableRow 
                        key={serv.id} 
                        sx={{ 
                          bgcolor: 'rgba(244, 143, 177, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(244, 143, 177, 0.4)',
                            cursor: 'pointer',
                          }
                        }}
                      >
                        <TableCell>{serv.name}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body2">
                              <strong>詳細說明：</strong> {serv.detail}
                            </Typography>
                            <Typography variant="body2">
                              <strong>觀察會員：</strong> {serv.observer}
                            </Typography>
                            <Typography variant="body2">
                              <strong>一般會員：</strong> {serv.ordinary}
                            </Typography>
                            <Typography variant="body2">
                              <strong>貴賓會員：</strong> {serv.premium}
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
        </Box>

        {/* technicalConsulting */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" gutterBottom>
            技術服務諮詢
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              {!isMobile ? (
                // Desktop Mode
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell>服務項目</TableCell>
                      <TableCell>詳細說明</TableCell>
                      <TableCell>觀察會員</TableCell>
                      <TableCell>一般會員</TableCell>
                      <TableCell>貴賓會員</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {introData.services_module.technicalConsulting.map((serv) => (
                      <TableRow 
                        key={serv.id} 
                        sx={{ 
                          bgcolor: 'rgba(244, 143, 177, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(244, 143, 177, 0.4)',
                            cursor: 'pointer',
                          }
                        }}
                      >
                        <TableCell>{serv.name}</TableCell>
                        <TableCell>{serv.detail}</TableCell>
                        <TableCell>{serv.observer}</TableCell>
                        <TableCell>{serv.ordinary}</TableCell>
                        <TableCell>{serv.premium}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              ) : (
                // Mobile Mode
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell width="40%">服務項目</TableCell>
                      <TableCell width="60%">詳情</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {introData.services_module.technicalConsulting.map((serv) => (
                      <TableRow 
                        key={serv.id} 
                        sx={{ 
                          bgcolor: 'rgba(244, 143, 177, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(244, 143, 177, 0.4)',
                            cursor: 'pointer',
                          }
                        }}
                      >
                        <TableCell>{serv.name}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body2">
                              <strong>詳細說明：</strong> {serv.detail}
                            </Typography>
                            <Typography variant="body2">
                              <strong>觀察會員：</strong> {serv.observer}
                            </Typography>
                            <Typography variant="body2">
                              <strong>一般會員：</strong> {serv.ordinary}
                            </Typography>
                            <Typography variant="body2">
                              <strong>貴賓會員：</strong> {serv.premium}
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
        </Box>

        {/* membership_step */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" gutterBottom>
            入會程序
          </Typography>
          <List sx={{ pl: 2 }}>
            {introData.membership_step.map((step) => (
              <ListItem key={step.step} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 3 }}>
                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                  <strong>{step.step}. {step.title}:</strong>
                </Typography>
                <List sx={{ pl: 2, width: '100%' }} disablePadding>
                  <ListItem sx={{ display: 'flex', pl: 0, pb: 0.5 }}>
                    <Typography component="span" sx={{ mr: 1 }}>-</Typography>
                    <Typography variant="body2">{step.detail}</Typography>
                  </ListItem>
                  
                  {step.step === 1 && step.email && (
                    <ListItem sx={{ display: 'flex', pl: 0, pb: 0.5 }}>
                      <Typography component="span" sx={{ mr: 1 }}>-</Typography>
                      <Typography variant="body2">聯絡信箱：<strong>{step.email}</strong></Typography>
                    </ListItem>
                  )}
                  
                  {step.step === 2 && step.agreement && (
                    <ListItem sx={{ display: 'flex', pl: 0, pb: 0.5 }}>
                      <Typography component="span" sx={{ mr: 1 }}>-</Typography>
                      <Link href={step.agreement_url} underline="hover">
                        <Typography variant="body2">{step.agreement}</Typography>
                      </Link>
                    </ListItem>
                  )}
                </List>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default Join;