import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">

   <Login/>
   <Signup/>
   <About/>
    </div>
  );
}

 export default App;
