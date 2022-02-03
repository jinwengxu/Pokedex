import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Pokemons from './pages/Pokemons';
import PokemonDetails from './pages/PokemonDetails';
import Footer from './components/Footer';

function App() {

  const match = useRouteMatch();
  // console.log(match);
  // console.log(match.url);

  return (
    <div className="App">
      <div className="mb-3">
        <Header />
      </div>
      <div className="mainContent container">
        <Switch>
          <Route exact path={`${match.url}pokemon/:id`}>
            <PokemonDetails />
          </Route>
          <Route exact path={match.url}>
            <Pokemons />
          </Route>
        </Switch>
      </div>
      <div className="mt-5 mb-0">
        <Footer />
      </div>    
    </div>
  );
}

export default App;
