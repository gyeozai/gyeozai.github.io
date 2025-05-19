import { Box, Container, Typography } from '@mui/material';
import membersData from '../data/members.json';
import introData from '../data/intro.json';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 2, md: 3 },
        px: 2,
        mt: { xs: 4, md: '33vh' },
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* 左側聯絡資訊 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 1,
            }}
          >
            <Typography variant="h6" gutterBottom>
              聯絡我們
            </Typography>
            {membersData.contact.map((contact) => (
              <Box key={contact.id}>
                <Typography variant="body2" color="text.secondary">
                  {contact.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {contact.email}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 中間 Logo */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: { xs: -1, md: 0 },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              src={introData.logo_transparent_blue}
              alt="Logo"
              sx={{
                height: { xs: '40px', md: '80px' },
                width: 'auto',
              }}
            />
          </Box>

          {/* 右側版權資訊 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' },
              gap: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © 2025 國立臺灣大學智慧感測器聯盟
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 