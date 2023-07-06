import SearchBar from "../SearchBarComponent/SearchBar";
import { Link } from "react-router-dom";
import './NavBar.module.css'


const Nav = ({onSearch, random}) =>{
  
  // const handleRandomClick = () => {
  //   random()
  //  }
  return(

    <nav className="nav"> <SearchBar onSearch = {onSearch} random={random}/> 

    <button>
      <Link to= '/about' > ABOUT </Link>
    </button>
    <button>
      <Link to= '/home' > HOME </Link>
    </button>
    <button>
      <Link to= '/favorites'> FAVORITOS </Link>
    </button>

    </nav>
  )
}

export default Nav;