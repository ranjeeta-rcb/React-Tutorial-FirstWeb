import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
 
  return (
    <div className="main">
<Header/> 
 <div className='container'>
  <h1 className='text-danger'>Welcome to Home page</h1>

 </div>
<Footer/> 
    </div>
  );
}

export default App;

function Card(){
  return(
    <div className='cardItems'>Card div</div>
  )
}