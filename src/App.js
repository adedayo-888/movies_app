import { Container, CssBaseline } from '@mui/material';
import './App.css';
import './index.css';
import PersistentDrawerRight from './components/Header';
import SimpleBottomNavigation from './components/BottomNav';
import { Routes, Route } from 'react-router-dom';
import Trends from './pages/Trends';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
import SingleContent from './components/SingleContent/SingleContent';
function App() {
  return (
    <>
      <CssBaseline />
      <PersistentDrawerRight />
      <SimpleBottomNavigation />
      <div className='app'>
        <Container>
          <Routes>
            <Route path='/trends' element={<Trends />} />
            <Route path='/singleContent' element={<SingleContent />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;
