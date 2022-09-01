// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Work from './Work';


function App() {
  return (
   <>
  
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>  </Route>
      <Route path="/About" element={<About />}> </Route>
      <Route path="/Contact" element={<Contact/>}> </Route>
      <Route path="/Work" element={<Work/>}> </Route>
  
      
    
    </Routes>
  </BrowserRouter>
  
  
   

   
   
   
   
   </>
  );
}

export default App;
