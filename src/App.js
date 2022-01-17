
import logo1 from './logo1.png';
import "bootswatch/dist/cosmo/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import CartWidget from './components/CartWidget/CartWidgets';
import Items from './components/ItemListContainer/Items';
import ItemCount from './components/ItemCount/ItemCount';
// function App(){
//   return (
    
//     <div>
//       {console.warn("Hola")}
//       <h1 style={{color:"red"}}>Hola Mundo desde React {5+5}</h1>
//     </div>
//   )
// }

function App() {
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
          <Items  titulo={"El señor de los anillos"} paginas = {"220"} autor = {"Autor"} tapa ={"Dura"} stock = {"10"}/>
          <Items  titulo={"Harry Potter"} paginas = {"320"} autor = {"Autor Potter"} tapa ={"Dura"} stock= {"22"} />
          <Items  titulo={"Fundamentos Pyhton"} paginas = {"820"} autor = {"Autor Python"} tapa ={"Blanda"} stock= {"11"} />
          <Items  titulo={"React para tontos"} paginas = {"1820"} autor = {"Autor React"} tapa ={"Dura"} stock= {"2"} />
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
