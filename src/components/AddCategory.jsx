import { useState } from "react"

export const AddCategory = ( {newCategory} ) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmitCategory = (event) => {
        //preventDefault ayuda a mantener los datos del formulario sin recargar la pagina
        event.preventDefault();
        
        //Verificar que no se envien espacios en blanco
        if (inputValue.trim().length <= 1) return;

        newCategory(inputValue);
        //Limpiamos el input
        setInputValue('');
    }
  
    return (

        <>
            <form onSubmit={onSubmitCategory} aria-label="form">
                <input type='text'
                    placeholder="Search gifs" 
                    value={inputValue}
                    onChange={(event) => onInputChange(event)}  
                    />
            </form>
        </>

    )
}
