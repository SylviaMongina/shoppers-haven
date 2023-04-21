import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route element={<HomePage/>} index path='/' />
            <Route element={<About/>} exact path='/about' />
            <Route element={<Login/>} exact path='/login' />
            <Route element={<Signup/>} exact path='/signup' />
            <Route element={<PageNotFound/>} path = '*' />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

 export default App;
