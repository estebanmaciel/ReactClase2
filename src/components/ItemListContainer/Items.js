import ItemCount from '../ItemCount/ItemCount'
import './Items.css'

function Items({titulo,autor,paginas,tapa,stock}){
    return (
    <>
    <div className='items'>
        <div className="cardItem">
            <p>Titulo : {titulo}</p>
            <p>Autor : {autor}</p>
            <p>Paginas : {paginas}</p>
            <p>Tapa : {tapa}</p>
            <div className='centrado'>
                <ItemCount stock ={stock}/>
            </div>
        </div>
        
    </div>
    </>)
}

export default Items