import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {

  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand mx-5" to="/">
          <img src={ logo } alt="" height="70" />
        </Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Pokemons</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;