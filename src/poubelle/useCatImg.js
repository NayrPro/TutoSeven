import React, {useState, useEffect} from 'react'
import axios from 'axios'

function useCatImg() {
    const [dataImg, setDataImg] = useState("")
    
    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search")
            .then(response => {
                const [Object] = response.data
                setDataImg(Object.url)
            })
    },[])

    
    return dataImg
}

export default useCatImg
