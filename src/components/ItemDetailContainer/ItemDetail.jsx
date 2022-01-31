
import './Items_detail.css'

function ItemsDetail({id,titulo,autor,paginas,tapa,stock,precio,imagen}){
    return (
    <>
    <div className='items'>
        <div className="cardItem">
            <p>Codigo : {id}</p>
            <p>Titulo : {titulo}</p>
            <p>Autor : {autor}</p>
            <p>Paginas : {paginas}</p>
            <p>Precio $ : {precio}</p>
            <p>Stock : {stock}</p>
            <div className='centrado'>
                <img className='imagenes' src= {imagen}></img>
            </div>
        </div>
        
    </div>
    </>)
}
export default ItemsDetail