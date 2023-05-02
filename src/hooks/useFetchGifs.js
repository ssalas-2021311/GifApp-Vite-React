import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
//Los hooks son funciones que retornan algo

export const useFetchGifs = ( category) => {

    //Manejar el array de las imagenes
    const [images, setImages] = useState([])

    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages(newImages)
    }

    //useEffect ejecuta efectos secundarios al realizar una acción
    useEffect(() => {
        getImages();
    }, [])
    
    return{
        images
    }
}
