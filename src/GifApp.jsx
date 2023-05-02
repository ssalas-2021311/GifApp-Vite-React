import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifApp = () => {
    //Un hook es una funcion predefinida en react
    const [categorias, setCategorias] = useState([])

    const onAddCategory = (newCategoryAdded) => {
        //Analizar si la categoria insertada ya existe en el array
        if (categorias.includes(newCategoryAdded)) return;

        //...Operador spret (su función es copiar todo lo demas del array)
        setCategorias([newCategoryAdded, ...categorias])
    }

    return (

        <>
            {/* Titulo */}
            <h1>GifApp</h1>
            {/* Input */}
            <AddCategory newCategory={(value) => onAddCategory(value)} />

            {/* Listado de los gifs */}
            {categorias.map(cat => 
                (
                    <GifGrid key={cat} category={cat} />
                )
            )}



            {/* gif item*/}
        </>
    )
}
