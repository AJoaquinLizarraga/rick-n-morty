import SearchBar from "../SearchBarComponent/SearchBar";
import { NavLink } from "react-router-dom";
import './NavBar.module.css'


const Nav = ({onSearch, random}) =>{
  
  // const handleRandomClick = () => {
  //   random()
  //  }
  return(

    <nav className="nav"> 

    <button>
      <NavLink to= '/home' > HOME </NavLink>
    </button>
    <button>
      <NavLink to= '/favorites'> FAVORITOS </NavLink>
    </button>

    <SearchBar onSearch = {onSearch} random={random}/> 

    <button>
      <NavLink to= '/about' > ABOUT </NavLink>
    </button>

    </nav>
  )
}

export default Nav;