//import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Block from "../src/components/Block/Block.js";
// import BlockData from "./transaction.json";
//import Navbar from "./components/Navbar/Navbar";
import { Route ,Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Logs from './components/Logs/Logs';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';



function App() {
  
 // const [visible, setVisible] = React.useState(false);
  return (
    // <div className='box'>
    //    {/* <Navbar></Navbar>  */}
      
      
      
    //   <div className='buttonmain'>
    //      <button onClick={() => setVisible(!visible)}>{visible ? 'Abstract' : 'Display'}</button>
         
    //   </div>
    //   {visible?BlockData.map(block => (
    //     <Block block={block}/>
        
    //   )): <div/>}
  

      
    // </div>
    
    <>
    <NavBar/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/logs' element={<Logs/>}/>
      
    </Routes>

    </>

    
  );
  
};

// create-react-component Block


export default App;
