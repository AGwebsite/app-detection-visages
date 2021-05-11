import React from 'react' ;
import './SaisieImg.css'

const SaisieImg = ({onInputChange, onButtonSubmit}) => {
    return (
     <div>
         <p className='f3'>
            {'Detectez les visages grace à cettte application'}
         </p>
         <div className="center">
           <div className='formulaire center pa4 br3 shadow-5 '>
                <input className='f4 pa2 w-70 center' type="text" id="lname" name="lname" onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 dib bg-yellow' onClick={onButtonSubmit}>Detectez !</button>
            </div>  
         </div>         
     </div>

    )
}


export default SaisieImg