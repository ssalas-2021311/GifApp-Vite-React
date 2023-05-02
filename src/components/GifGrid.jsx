import { GifGridItem } from "./GifGridItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const {images} = useFetchGifs(category)
    
    return (

        <>
            <h3>{category} </h3>
            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifGridItem key={img.id} 
                                    //title={img.title}
                                    {...img}/*Mandar todas las propiedades*/ />
                    ))
                }
            </div>
        </>
    )
}
