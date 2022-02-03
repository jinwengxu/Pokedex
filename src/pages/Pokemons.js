import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PokemonButton from '../components/PokemonButton';
import Loading from '../components/Loading';
import pikachu from '../assets/pikachu.png';

const Pokemons = () => {
  
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);


  useEffect( () => {
    window.setTimeout( () => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        // console.log(response);
        const { data } = response;        
        setPokemons(data.results);
        // setPokemons([]); // Test when get no data
        setLoading(false);
      })
      .catch((error) => {                
        const { status, data } = error.response;         
        setError(`Page ${data} (${status})`);
        setLoading(false);
      });
    }, 2000);
  }, []);

  return (
    <div>
      {loading && (
        <Loading />
      )}

      {!loading && error && (
        <div className="text-center mt-5">
          <img src={pikachu} alt="pikachu" height="200px" />
          <h2 className="text-info m-5">{error}</h2>
          <p className="lead">Uh oh, we can't seem to find the page you're looking for.</p>          
        </div>
      )}

      {!loading && !error && pokemons.length > 0 && (        
        <div className="row">     
          <h1>Top 151 Pokemons!</h1> 
          <p className="lead">Click the button to see the detail of the pokemon.</p>          
          { pokemons.map ( (pokemon, i) => (          
              <div key= {i} className="col">
                <Link to={`pokemon/${i+1}`} >
                  <PokemonButton className="m-3">{pokemon.name}</PokemonButton>            
                </Link>
              </div>)          
          )}
        </div>
      )}     
    </div>
  );
}

export default Pokemons;