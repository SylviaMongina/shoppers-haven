import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
