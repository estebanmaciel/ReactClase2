
import './Items_detail.css'

function ItemsDetail({titulo,autor,paginas,tapa,stock,precio,imagen}){
    return (
    <>
    <div className='items'>
        <div className="cardItem">
            <p>Titulo : {titulo}</p>
            {console.log (titulo)}
            <p>Autor : {autor}</p>
            <p>Paginas : {paginas}</p>
            <p>Tapa : {tapa}</p>
            <p>Precio : {precio}</p>
            <p>Stock : {stock}</p>
            <div className='centrado'>
                <img className='imagenes' src= {imagen}></img>
            </div>
        </div>
        
    </div>
    </>)
}
export default ItemsDetail