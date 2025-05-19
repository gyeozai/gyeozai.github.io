import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Link, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import membersData from '../data/members.json';

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

const Members = () => {
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
        {/* 聯盟簡介 */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            聯盟成員
          </Typography>
          <Typography variant="body1" paragraph>
            {membersData.intro}
          </Typography>
        </Box>

        {/* 學術界成員 */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            學界成員
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              {!isMobile ? (
                // Desktop Mode
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell width="17%">成員</TableCell>
                      <TableCell width="15%">身份</TableCell>
                      <TableCell width="25%">學校單位</TableCell>
                      <TableCell width="28%">研究領域</TableCell>
                      <TableCell width="15%">個人網站</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {membersData.academic.map((member: AcademicMember) => (
                      <TableRow 
                        key={member.id}
                        sx={{
                          bgcolor: 'rgba(33, 150, 243, 0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(33, 150, 243, 0.3)',
                          }
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Link href={member.website} target="_blank" rel="noopener noreferrer">
                              <Box
                                component="img"
                                src={member.image}
                                alt={member.name}
                                sx={{
                                  width: 100,
                                  height: 100,
                                  objectFit: 'cover',
                                  borderRadius: 1,
                                  transition: 'transform 0.3s ease',
                                  '&:hover': {
                                    transform: 'scale(1.05)',
                                  },
                                }}
                              />
                            </Link>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              {member.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{member.title}</TableCell>
                        <TableCell>{member.department}</TableCell>
                        <TableCell>{member.research}</TableCell>
                        <TableCell>
                          <Link href={member.website} target="_blank" rel="noopener noreferrer">
                            前往網站
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              ) : (
                // Mobile Mode
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell width="40%">成員</TableCell>
                      <TableCell width="60%">詳情</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {membersData.academic.map((member: AcademicMember) => (
                      <TableRow 
                        key={member.id}
                        sx={{
                          bgcolor: 'rgba(33, 150, 243, 0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(33, 150, 243, 0.3)',
                          }
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Link href={member.website} target="_blank" rel="noopener noreferrer">
                              <Box
                                component="img"
                                src={member.image}
                                alt={member.name}
                                sx={{
                                  width: 100,
                                  height: 100,
                                  objectFit: 'cover',
                                  borderRadius: 1,
                                  transition: 'transform 0.3s ease',
                                  '&:hover': {
                                    transform: 'scale(1.05)',
                                  },
                                }}
                              />
                            </Link>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              {member.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body2">
                              <strong>身份：</strong> {member.title}
                            </Typography>
                            <Typography variant="body2">
                              <strong>學校單位：</strong> {member.department}
                            </Typography>
                            <Typography variant="body2">
                              <strong>研究領域：</strong> {member.research}
                            </Typography>
                            <Typography variant="body2">
                              <strong>個人網站：</strong>{' '}
                              <Link href={member.website} target="_blank" rel="noopener noreferrer">
                                前往網站
                              </Link>
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

        {/* 業界會員 */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 6 }}>
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
      </Container>
    </Box>
  );
};

export default Members; 