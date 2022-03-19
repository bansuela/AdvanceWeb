import React from 'react';
import mond from '../Images/mond.jpg'
import liyue from '../Images/liyue.jpg'
import inazuma from '../Images/inazuma.jpg'


const Services = () => {
    return (
        <>
        <h1 className='abouttitle2'>TEYVAT</h1>

            <div>
            <p className='mond'>MONDSTADT</p>
            </div>
            <div className='logocontainers2'>
            <img src={mond} alt='logo' className='logo16' />
            </div>

            <div>
                <p className='liyue'>LIYUE</p>
            </div>
            <div className='logocontainers2'>
                <img src={liyue} alt='logo' className='logo17' />
            </div>

            <div>
                <p className='Inazuma'>INAZUMA</p>
            </div>
            <div className='logocontainers2'>
                <img src={inazuma} alt='logo' className='logo18' />
            </div>
            <h1 className='abouttitle3'>You have arrived in Teyvat — a fantasy world where 
            the seven elements flow and converge.
                In the distant past, the Archons granted mortals unique elemental abilities. 
                With the help of <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; such powers, people formed a bountiful homeland out of the wilderness. 
                However, 500 years ago, the collapse of an ancient civilization turned the universe upside 
                down...<br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Though the calamity the world suffered has ceased, peace has yet to be restored.</h1>
          
        </>
    )
}
export default Services;
