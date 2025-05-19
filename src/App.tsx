import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 懶加載頁面組件
const Home = lazy(() => import('./pages/Home'));
const Tech = lazy(() => import('./pages/Tech'));
const Services = lazy(() => import('./pages/Services'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const About = lazy(() => import('./pages/About'));
const Members = lazy(() => import('./pages/Members'));
const Join = lazy(() => import('./pages/Join'));

// 加載中的顯示組件
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/services" element={<Services />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/members" element={<Members />} />
                <Route path="/join" element={<Join />} />
              </Routes>
            </Suspense>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
