import styled from 'styled-components';

const PokemonButton = styled.button`
  color: #fff;
  font-weight: 500;
  border: 0;
  background-color: #0c6196;
  font-size: 16px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  height: 100px;
  width: 100px; 
  
  &:hover {
    background-color:#0C456E;   
    box-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue; 
  }
`;

export default PokemonButton;