import './App.css';
import MovieList from './components/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className="App">
      <img src="https://www.asicsulb.org/corporate/images/connect/beachfront/2019-01/movies-on-the-house.jpg" alt="Movies Banner" width="100%" />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/movie/:movieId' element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
