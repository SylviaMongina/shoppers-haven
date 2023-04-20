import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <HomePage />
     <Login/>
     <Signup/>
     <About/>
      <Footer />
    </div>
  );
}

 export default App;
