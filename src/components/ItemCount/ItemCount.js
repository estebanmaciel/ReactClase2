import "./ItemCount.css"
import React from 'react'

function ItemCount({stock}){

    const [conuter,setCounter]=React.useState(1)
    const addToCart = () =>{
        alert ("Se agrega producto al carrito")
    }
    const suma=()=>{
        if (conuter<stock)
        {
            setCounter(conuter+1)
        }
        else
        {
            alert ("No podes agregar mas articulos")
        }
    }
    const resta=()=>{
        if (conuter>1)
        {
            setCounter(conuter-1)
        }
    }
    return (
        <>

        <div className="counterItem">
            <button onClick={resta}>-</button>        
            <label>{conuter}</label>
            <button onClick={suma}>+</button>        
        </div>
        <div className="cartButton">
            <button onClick={addToCart}>Agregar</button>
        </div>
        </>
    

)
}

export default ItemCount
