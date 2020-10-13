import React, {useState, useMemo, useCallback} from 'react'
import Enfant from './Enfant'
function Contenu() {
    const [compteur, setCompteur] = useState(0)
    
    console.log('Parent à jour');

    const array = useMemo(() =>{
        return [1,2,3,4,5]
    },[])

    const foo = useCallback(() => {
        console.log("Click");
    },[])
     

    return (
        <div>
            <h1>Le Parent</h1>
            <p>{compteur}</p>
            <button onClick={() => setCompteur(compteur+1)}>Incremente</button>
            <Enfant chaine={array} myFunc={foo}/>        
        </div>
    )
}

export default Contenu
