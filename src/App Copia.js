
import logo1 from './logo1.png';
import "bootswatch/dist/cosmo/bootstrap.min.css";
import './App.css';
import { useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import {getOneBooks} from "./Database/dataBase"
import ItemsDetail from './components/ItemDetailContainer/ItemDetail';





function App() {
  const [books, setBooks] = useState([]);   
  const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
      setIsLoading(true);
      getOneBooks()
        .then((data) => setBooks(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, []);

   return (
     <div className="App">
       <header className="App-header">
       <div className='nav'>
           <Navbar />
         </div>
       </header>
       <body className='body'>
         <div className='items'>
           {isLoading? (
             <div className='loader'></div>
           ) :
           (
             books ? books.map((books)=> <ItemsDetail key={books.id} titulo={books.titulo} autor={books.autor} paginas={books.paginas} tapa={books.tapa} stock={books.stock} precio={books.precio} imagen={books.imagen} />)  :
             <h1>No se encontraron datos para mostrar. Intenta mas tarde</h1>
           )}
         </div>
         </body>  
         <footer className='App-header'>
         <div>
           <h2>Todos los derechos reservados</h2>
         </div>
         </footer>
      </div>

   );
 }

export default App;
