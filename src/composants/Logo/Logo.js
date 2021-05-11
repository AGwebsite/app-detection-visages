import React from 'react' ;
import Tilt from 'react-tilt' ;
import './Logo.css' ;
import visage from './visage.png' ;


const Logo = () => {
    return (
     <div className='ma4 mt0'>
         <Tilt className="Tilt br2 shadow-5" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
        <div className="Tilt-inner pa3"> <img src={visage} alt="icon reconnaissance faciale" style={{height: 'auto' , width: '160px' , padding: '5px'
    }}/></div>
        </Tilt>
     </div>

    )
}

export default Logo 