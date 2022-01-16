import './Items.css'

function Items(){
    return (
    <div className='items'>
        <div className="cardItem">
            <p>Titulo : El señor de los anillos</p>
            <p>Autor : J. R. R. Tolkien</p>
            <p>Paginas : 1239</p>
            <p>Tapa : Dura</p>
        </div>
        <div className="cardItem">
            <p>Titulo : Harry Potter y la piedra filosofal</p>
            <p>Autor : J. K. Rowling</p>
            <p>Paginas : 2129</p>
            <p>Tapa : Blanda</p>
        </div>  
        <div className="cardItem">
            <p>Titulo : Sin Filtro: La Historia Secreta De Instagram</p>
            <p>Autor : Sarah Frier</p>
            <p>Paginas : 852</p>
            <p>Tapa : Blanda</p>
        </div>        
        <div className="cardItem">
            <p>Titulo : Python para Principiantes</p>
            <p>Autor : Programming Languages Academy </p>
            <p>Paginas : 1029</p>
            <p>Tapa : Dura</p>
        </div>   
    </div>)
}

export default Items