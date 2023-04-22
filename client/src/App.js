import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import SearchPage from './components/Search/SearchPage';



function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <AuthContext>
          <Navbar/>
            <Routes>
              <Route element={<HomePage/>} index path='/' />
              <Route element={<About/>} exact path='/about' />
              <Route element={<Login/>} exact path='/login' />
              <Route element={<Signup/>} exact path='/signup' />
              <Route element={<SearchPage/>} exact path='/search' />
              <Route element={<PageNotFound/>} path = '*' />
            </Routes>
          <Footer />
          </AuthContext>
      </BrowserRouter>
    </div>
  );
}

 export default App;
