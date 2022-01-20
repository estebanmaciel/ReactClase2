
import logo1 from './logo1.png';
import "bootswatch/dist/cosmo/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import CartWidget from './components/CartWidget/CartWidgets';
import Items from './components/ItemListContainer/Items';
import { useState, useEffect} from 'react';
import {getBooks} from "./Database/dataBase"



function App() {
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
     <div className="App">
       <header className="App-header">
        <div>
        <img src={logo1} className="App-logo" alt="logo" />  
        </div>
        <div className='nav'>
          <Navbar />
          <CartWidget/>
        </div>
      </header>
      <body className='body'>
        <div className='items'>
          {isLoading? (
            <div className='loader'></div>
          ) :
          (
            books.map((books)=> <Items key={books.id} titulo={books.titulo} autor={books.autor} paginas={books.paginas} tapa={books.tapa} stock={books.stock} precio={books.precio} imagen={books.imagen} />)
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
