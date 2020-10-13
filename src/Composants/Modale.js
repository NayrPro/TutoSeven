import React from 'react'
import './Modale.css'
function Modale(props) {
    return (
        <div className="overlay" onClick={props.closeFunc}>
            <div className="contenu" onClick={props.stopPropa}>
                Contenu Modale
                <button className="btnClose" onClick={props.closeFunc}>Fermer</button>
            </div>
        </div>
    )
}

export default Modale
