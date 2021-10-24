import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import { getDataPokemonP } from "./Database/DatabaseApi";
import PokemonDetails from "./Pages/PokemonDetails";
import Loading from "./Assets/loading.svg";
import './index.css'

function App() {
  const [dataPokedex, setDataPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [color, setColor] = useState("#2c2b6e");

  useEffect(() => {
    const getDataList = async () => {
      const data = await getDataPokemonP();
      setDataPokedex(data);
    };
    getDataList();

    //  const newListPokemon = DbPokedex.filter(pokemon =>{
    //    if (pokemon.image) {
    //      return pokemon
    //    }else{
    //      pokemon.image = 'https:imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG.png'
    //      return pokemon
    //    }
    //  })
    //  setDataPokedex(newListPokemon);
  }, []);

  // const setColor = (color)=>{
  //   setColor(color)

  // }

  const getDataPokemon = (pokemonData) => {
    setPokemonDetails(pokemonData);
  };

  return (
    <div className="App">
      <Router>
        {dataPokedex.length <= 0 ? (
          <img className="Loading" src={Loading} alt="" />
        ) : (
          <Header data={dataPokedex} getData={getDataPokemon} color={color} />
        )}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id">
            <PokemonDetails changeColor={setColor} pokemon={pokemonDetails} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
