import React from 'react';
import genlogo1 from '../Images/genlogo1.png'
import elementsb from '../Images/elementb.png'
import bgImage from '../video/liveback.mp4'


const Home=()=>{
    return(
    <>

     <div className='home'>
                <video autoPlay loop muted>
                    <source src={bgImage} type="video/mp4" />
                </video>
                    <div className='logocontainers2'>
                        <img src={genlogo1} alt='logo' className='logo3' />
                    </div>
            
        <div>
          <p className='subtitle'>It's an open world outside for you to venture<br></br>  &nbsp; &nbsp; &nbsp; &nbsp; 
             &nbsp; &nbsp; &nbsp; &nbsp;    beware of the walls within</p>
        </div>
                <button className='btn button'>Get Started</button>

     </div> 
    </>
    )
}  
export default Home;


 