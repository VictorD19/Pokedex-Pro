const base_url = "https://pokeapi.co/api/v2/pokemon/";
const base_list = "?limit=500";

const getPokemon = async (endpoit) => {
  try {
    const req = await fetch(`${base_url}${endpoit}`);
    return req.json();
  } catch (error) {
    if (error) throw new Error("List Pokemon not Found");
  }
};

const getDataPokemonP = async () => {
  const { results } = await getPokemon(base_list);
  const newList = [];
  for (let i = 0; i < results.length; i++) {
    let {
      id,
      abilities,
      stats,
      types,
      sprites: {
        other: {
          dream_world: { front_default },
        },
      },
    } = await getPokemon(`${i + 1}/`);
    newList.push({
      ...results[i],
      data: {
        id,
        stats,
        types,
        front_default,abilities
      },
    });
  }

  return newList;
};

export { getDataPokemonP };
