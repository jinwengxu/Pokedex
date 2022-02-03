import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import Loading from '../components/Loading';
import pikachu from '../assets/pikachu.png';

const PokemonDetails = () => {
  // const params = useParams();  
  const { id } = useParams();

  const [loading, setLoading] = useState(true);  
  const [pokemon, setPokemon] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setTimeout (() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        const { data } = response;
        // console.log(data);
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {        
        const { status, data } = error.response;        
        setError(`Page ${data} (${status})`); 
        setLoading(false);     
      });
    }, 2000);
  },[]);

  return (
    <div>  
      { loading && (
        <Loading />
      )} 

      { !loading && error && (
        <div className="text-center mt-5">
          <img src={pikachu} alt="pikachu" height="200px" />
          <h2 className="text-info m-5">{error}</h2>
          <p className="lead">Uh oh, we can't seem to find the page you're looking for.</p>
          <Link to="/" className="btn btn-primary my-5 px-4">GO BACK</Link>
        </div>
      )}

      { !loading && !error && pokemon && (
        <div className="text-center">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} height="120px" /> 
          <h1 className="text-info mb-5">{pokemon.name.toUpperCase()}</h1>       
          <table className="table table-striped table-warning p-5 shadow">            
            <thead>
              <tr>
                <th>Stats</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>        
              {pokemon.stats.map( (stat, i) => (
                <tr key={i}>
                  <td >{stat.stat.name.toUpperCase() || 'No data available'}</td>
                  <td>{stat.base_stat || 'No data available'}</td> 
                </tr>                
              ))}
            </tbody> 
            </table> 
            <Link to="/" className="btn btn-primary mt-3 px-4">GO BACK</Link>          
        </div>        
      )}      
    </div>
  );
}

export default PokemonDetails;