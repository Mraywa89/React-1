import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Userspage from './pages/userspage';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Homepage></Homepage>}></Route>
      <Route path= "/users" element={<Userspage></Userspage>}></Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
