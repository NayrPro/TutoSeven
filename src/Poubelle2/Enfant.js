import React from 'react'

const Enfant = function (props) {

    console.log("Mise a jour du composant enfant");

    return (
        <div>
         <h2>Le composant enfant</h2>
         <p>{props.chaine}</p>
         <button onClick={props.myFunc}>Clique Moi</button>   
        </div>
    )
}

export default React.memo(Enfant)

