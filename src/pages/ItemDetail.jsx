import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemsDetail from "../components/ItemDetailContainer/ItemDetail"

const ItemDetailContainer = () => {
    const [books, setBooks] = useState([]);   
    const {id} = useParams()
  

    console.log (id)

    useEffect(()=>{
        const url = "http://localhost:3001/books/" + id
        fetch(url)
        .then((res)=>res.json())
        .then((data) => setBooks(data));}
        ,[])

    return (
        <div>
            <ItemsDetail key={books.id} id = {books.id} titulo={books.titulo} autor={books.autor} paginas={books.paginas} tapa={books.tapa} stock={books.stock} precio={books.precio} imagen={books.imagen} />)
        </div>
    )
    }       

export default ItemDetailContainer
