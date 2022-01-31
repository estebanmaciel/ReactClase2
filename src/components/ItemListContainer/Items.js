
import { Navigate, useNavigate } from 'react-router-dom'
import './Items.css'


function Items({codigo,titulo,autor,paginas,tapa,stock,precio,imagen}){

    const navegar = useNavigate()
    const goToItem= () =>{
        console.log(codigo)
        navegar ("/item/" + codigo)
    }
    


    return (
    <>
    <div className='items'>
        <div className="cardItem">
            <p>Codigo : {codigo}</p>
            <p>Titulo : {titulo}</p>
            {console.log (titulo)}
            <p>Autor : {autor}</p>
            <p>Precio $ : {precio}</p>
            <p>Stock : {stock}</p>
            <div className='centrado'>
                <img className='imagenes' src= {imagen}></img>
                <button onClick={goToItem}>Detalle del producto</button>
            </div>
            
            {/* <div className='centrado'>
                <ItemCount stock ={stock}/>
            </div> */}
        </div>
        
    </div>
    </>)
}
export default Items