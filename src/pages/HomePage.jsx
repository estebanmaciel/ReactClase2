
import { useState, useEffect} from 'react';
import {getBooks} from "../Database/dataBase";
import Items from "../components/ItemListContainer/Items"


const HomePage = () => {
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
            {isLoading? (
              <div className='loader'></div>
            ) :
            <div className='items'>
             {(
               books.length>0 ? books.map((books)=> <Items key={books.id} codigo={books.id} titulo={books.titulo} autor={books.autor} paginas={books.paginas} tapa={books.tapa} stock={books.stock} precio={books.precio} imagen={books.imagen} />)  :
               <div className='centrado'>
                 <h1>No se encontraron datos para mostrar. Intenta mas tarde</h1>
               </div>        
             )}
            </div>}
            </body>

    )
}

export default HomePage