import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar(){
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand"><Link to = "/">Libreria</Link></div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">

        <li className="nav-item">
          <a className="nav-link" href="#">Infantiles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Novelas</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Educación</a>
          <div className="dropdown-menu">
            <div className="dropdown-item"><Link to = "/inicial">Nivel inicial</Link></div>
            <div className="dropdown-item"><Link to = "/primario">Nivel primario</Link></div>
            <div className="dropdown-item"><Link to = "/secundario">Nivel secundario</Link></div>
            <div className="dropdown-item"><Link to = "/about">Nivel universitario</Link></div>
          </div>
        </li>        
        <li className="nav-item">
          <div className="nav-link"> <Link to = "/about">Sobre nosotros</Link> </div>
        </li>

      </ul>

    </div>
  </div>
</nav>
    
//     <div >
//     <nav classNameName="Navbar">
//         <ul>
//             <li><a href="#">Novelas</a></li>
//             <li><a href="#">Historia</a></li>
//             <li><a href="#">Nivel Inicial</a></li>
//             <li><a href="#">Educación primaria</a></li>
//             <li><a href="#">Educación secundaria</a></li>
//             <li><a href="#">Educación superior</a></li>
//             <li><a href="#">Sobre nosotros</a></li>
//         </ul>
//   </nav>
//   </div>)
    )}

export default Navbar