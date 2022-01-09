import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"

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
         <Navbar />
         <img src={logo} className="App-logo" alt="logo" />
         {/* <p>
           Editar <code>src/App.js</code> y guardarlo para recargar la página.
         </p> */}
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Tienda de libros
         </a>
       </header>
     </div>
   );
 }

export default App;
