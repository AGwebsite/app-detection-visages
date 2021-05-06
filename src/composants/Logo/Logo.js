import React from 'react' ;
import Tilt from 'react-tilt' ;
import './Logo.css' ;
import visage from './visage.png' ;


const Logo = () => {
    return (
     <div className='ma4 mt0'>
         <Tilt className="Tilt br2 shadow-5" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner pa3"> <img src={visage} alt="icon reconnaissance facile" style={{height: 'auto' , width: '180px' , padding: '10px', marginTop: '12px'
    }}/></div>
        </Tilt>
     </div>

    )
}

export default Logo 