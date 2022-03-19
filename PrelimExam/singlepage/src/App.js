import React from 'react';
import { Switch,Route } from 'react-router-dom'; 
import Home from './Component/Home'; 
import Contact from './Component/Contact'; 
import Services from './Component/Services'; 
import Error from './Component/Error'; 
import List from './Component/List'; 
import Footer from './Component/Footer';
import About from './Component/About';
import bgImage from './video/liveback.mp4'



const App=()=> {
  return (
    <>
     
    <List/>
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route path="/services" component={Services} />
     <Route component={Error} />
        
   </Switch>
    

   <Footer/>
    </>
  );
}

export default App;
