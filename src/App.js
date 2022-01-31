
import "bootswatch/dist/cosmo/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar/Navbar"


import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from './pages/About';
import Primario from './pages/primario';
import Inicial from './pages/inicial';
import Secundario from "./pages/secundario"
import ItemDetail from './pages/ItemDetail';
import Products from './pages/products';
import A404 from './pages/404'



function App() {


   return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path = "/">
          <Route index element= {<HomePage />}></Route>
          <Route path = "about" element= {<About />}></Route>
          <Route path = "ofertas" element= {<ofertas />}></Route>
          <Route path = "primario" element= {<Primario />}></Route>
          <Route path = "inicial" element= {<Inicial />}></Route>
          <Route path = "secundario" element= {<Secundario />}></Route>
          <Route path = "category" element= {<HomePage/>}></Route>
        </Route>          
        <Route path = "item">
          <Route index element= {<Products />}/>
          <Route path = ":id" element= {<ItemDetail/>}/>
        </Route>
        <Route path = "*" element={<A404/> }></Route>
      </Routes>
    </BrowserRouter>
    //  <div className="App">
    //    <header className="App-header">
    //      <div>
    //      {/* <img src={logo1} className="App-logo" alt="logo" />   */}
    //      </div>
    //      <div className='nav'>
    //        <Navbar />
    //        <CartWidget/>
    //      </div>
    //    </header>
    //    <body className='body'>
         
    //        {isLoading? (
    //          <div className='loader'></div>
    //        ) :
    //        <div className='items'>
    //         {(
    //           books.length>0 ? books.map((books)=> <Items key={books.id} titulo={books.titulo} autor={books.autor} paginas={books.paginas} tapa={books.tapa} stock={books.stock} precio={books.precio} imagen={books.imagen} />)  :
    //           <div className='centrado'>
    //             <h1>No se encontraron datos para mostrar. Intenta mas tarde</h1>
    //           </div>        
    //         )}
    //        </div>}
         
    //      </body>  
    //      <footer className='App-header'>
    //      <div>
    //        <h2>Todos los derechos reservados</h2>
    //      </div>
    //      </footer>
    //   </div>

   );
 }

export default App;
