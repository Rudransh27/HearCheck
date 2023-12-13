import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home'; 
import Services from './Services';
import About from './About';
import Contact from './Contact';
import AudioTest from './FrequecyTest'
import Navbar from './Navbar';
import Footer from './Fotter'
import { Route, Routes } from "react-router-dom";
import Login from './SignForm'
import Signup from './LogForm'

function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/services" element={<Services/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/audioTest" element={<AudioTest/>}/>
      <Route  path="/signup" element={<Contact/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
    </>
   
  );
}

export default App;