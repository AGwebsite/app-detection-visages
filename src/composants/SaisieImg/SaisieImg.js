import React from 'react' ;

const SaisieImg = () => {
    return (
     <div>
         <p className='f3'>
            {'Detectez les visages grace à cettte appplication'}
         </p>
        <div className="flex">
            <input className='f4 pa2 w-70 center' type="text" id="lname" name="lname"/>
            <button className='w-30 grow f4 link ph3 dib white bg-ligth-purple'>Trouver les visages</button>
        </div>
     </div>

    )
}


export default SaisieImg