
import React from 'react' ;

const ReconnaissanceFaciale = ({imageUrl}) => {
    return (
       <div className='center'>
           <img className='w-40 h-auto' alt='' src={imageUrl}/>
       </div>
    )
}

export default ReconnaissanceFaciale ;