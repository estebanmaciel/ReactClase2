import Items from "../components/ItemListContainer/Items"
import { useState, useEffect} from 'react';
import {getBooks} from "../Database/dataBase"

const Products = () => {

    const [books, setBooks] = useState([]);   
    const [isLoading, setIsLoading] = useState(false);
  
       useEffect(() => {
        setIsLoading(true);
        getBooks()
          .then((data) => setBooks(data))
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false));
      }, []);
    
    return (
        <body className='body'>
        <div className='items'>
          {isLoading? (
            <div className='loader'></div>
          ) :
          (
            books ? books.map((books)=> <Items key={books.id} titulo={books.titulo} autor={books.autor} paginas={books.paginas} tapa={books.tapa} stock={books.stock} precio={books.precio} imagen={books.imagen} />)  :
            <h1>No se encontraron datos para mostrar. Intenta mas tarde</h1>
          )}
        </div>
        </body> 
    )
}

export default Products