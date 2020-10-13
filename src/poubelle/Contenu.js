import React from 'react'
import useCatImg from './useCatImg'

function Contenu() {

    // const handleClick = () => {
    //     setData("")t
    const catUrl = useCatImg()
    return (
        <div>
            <img src={catUrl} alt="un chat"/>
        </div>
        
//         data !== ''?
//         <div>
//             <img style={{maxWidth: "100%",
//   height: "auto"}} src={data} alt="un chat"
//             onClick={handleClick}/>

//         </div>
//         :
//         <p>Loading...</p>
    )
}

export default Contenu