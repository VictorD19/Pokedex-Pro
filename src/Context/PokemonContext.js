import React, { createContext, useContext, useEffect, useState } from "react";
import { getDataPokemonP } from "../Database/DatabaseApi";
const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [listPokemonData, setListPokemonDate] = useState([]);
  

  useEffect(() => {
    const getDataList = async () => {
      const data = await getDataPokemonP();
      setListPokemonDate(data);
    };
    getDataList();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        listPokemonData,
        setListPokemonDate,
        setPokemonData,
        pokemonData
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
export const usePokemonData = () => {
     const context = useContext(PokemonContext);
    const {listPokemonData, setListPokemonDate, setPokemonData,
        pokemonData} = context
       return ({
           listPokemonData,setListPokemonDate, setPokemonData,
           pokemonData

      });

};
