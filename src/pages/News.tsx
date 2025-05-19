import { Container, Typography, Box, Card, CardContent, Chip, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import newsData from '../data/news.json';
import { motion } from 'framer-motion';
import { useState } from 'react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 過濾並排序新聞
  const filteredAndSortedNews = newsData.news
    .filter(news => 
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.id - a.id); // 按 id 倒序排列

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      sx={{ pt: 8 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ my: 4, mb: 4 }}>
          最新消息
        </Typography>

        {/* 搜索框 */}
        <TextField
          fullWidth
          label="搜尋新聞標題"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 4 }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {filteredAndSortedNews.map((news) => (
            <Card
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                bgcolor: 'rgba(33, 150, 243, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(33, 150, 243, 0.3)',
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <RouterLink 
                to={`/news/${news.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="h6" component="div">
                      {news.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {news.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {news.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: 'grey.200',
                          color: 'text.primary',
                          border: '1px solid',
                          borderColor: 'grey.600',
                          '&:hover': {
                            bgcolor: 'grey.300',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </RouterLink>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default News; 