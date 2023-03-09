import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Description from './components/Description';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route index element={<MovieList/>}/>
        <Route path='/description' element={<></>}/>
        <Route path='/description/:id' element={<Description/>}/>
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
