import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Chip, Button, Modal, IconButton } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import newsData from '../data/news.json';

interface NewsImage {
  image1?: string;
  image2?: string;
  image3?: string;
}

const NewsDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const news = newsData.news.find((n) => n.id === Number(id));

  useEffect(() => {
    if (news) {
      fetch(`/markdowns/${news.markdownFile}`)
        .then((response) => response.text())
        .then((text) => setContent(text))
        .catch((error) => console.error('Error loading markdown:', error));
    }
  }, [news]);

  // 獲取新聞中所有的圖片
  const getNewsImages = () => {
    if (!news) return [];
    
    const newsWithImages = news as NewsImage;
    const images: string[] = [];
    
    // 檢查 image1 是否存在且有效
    if (newsWithImages.image1) {
      images.push(newsWithImages.image1);
      if (newsWithImages.image2) images.push(newsWithImages.image2);
      if (newsWithImages.image3) images.push(newsWithImages.image3);
    }
    
    return images;
  };

  const images = getNewsImages();

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsImageModalOpen(false);
  };

  if (!news) {
    return (
      <Box sx={{ pt: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4">找不到新聞</Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ pt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="caption" color="text.secondary">
            {news.date}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {news.title}
          </Typography>
          <Box sx={{ mb: 2 }}>
            {news.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{ mr: 0.5 }}
              />
            ))}
          </Box>
          {images.length > 0 && (
            <>
              <Box sx={{ position: 'relative', mb: 4 }}>
                <Box
                  component="img"
                  src={images[currentImageIndex]}
                  alt={`${news.title} - 圖片 ${currentImageIndex + 1}`}
                  onClick={handleImageClick}
                  sx={{
                    width: '100%',
                    maxHeight: 400,
                    objectFit: 'cover',
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />
                {images.length > 1 && (
                  <>
                    <Button 
                      onClick={handlePrevImage}
                      sx={{
                        position: 'absolute',
                        left: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        minWidth: '40px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    >
                      <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                    </Button>
                    <Button 
                      onClick={handleNextImage}
                      sx={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        minWidth: '40px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                    </Button>
                    <Box 
                      sx={{
                        position: 'absolute',
                        bottom: 20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 1,
                      }}
                    >
                      {images.map((_, index) => (
                        <Box
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: index === currentImageIndex 
                              ? 'primary.main' 
                              : 'rgba(255, 255, 255, 0.7)',
                            cursor: 'pointer',
                          }}
                        />
                      ))}
                    </Box>
                  </>
                )}
              </Box>

              {/* Image Modal */}
              <Modal
                open={isImageModalOpen}
                onClose={handleCloseModal}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                }}
              >
                <Box sx={{ 
                  position: 'relative', 
                  maxWidth: '90vw',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}>
                  <Box
                    component="img"
                    src={images[currentImageIndex]}
                    alt={`${news.title} - 圖片 ${currentImageIndex + 1}`}
                    sx={{
                      maxWidth: '100%',
                      height: '80vh',
                      objectFit: 'contain',
                    }}
                  />
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                  }}>
                    {images.length > 1 && (
                      <>
                        <Button 
                          onClick={handlePrevImage}
                          sx={{
                            minWidth: '40px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            },
                          }}
                        >
                          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                        </Button>
                        <Button 
                          onClick={handleNextImage}
                          sx={{
                            minWidth: '40px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            },
                          }}
                        >
                          <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                        </Button>
                      </>
                    )}
                    <IconButton
                      onClick={handleCloseModal}
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Modal>
            </>
          )}
          <Box sx={{ typography: 'body1' }}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsDetail;