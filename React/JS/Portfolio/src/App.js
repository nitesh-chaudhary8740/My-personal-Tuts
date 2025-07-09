
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/CssAssests/MainContainer.css';
import Navbar from './Components/Navbar';
import './logo.svg'
import HomeContent from './Components/HomeContent';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Blog from './Components/Blog';

function App() {
  return (
    <BrowserRouter>
    <div className='mainDiv'>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<HomeContent/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>
      <Route exact path='/Projects' element={<Projects/>}/>
      <Route exact path='/Blog' element={<Blog/>}/>
    </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
