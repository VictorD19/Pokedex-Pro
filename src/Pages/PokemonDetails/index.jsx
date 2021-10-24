import "./style.css";
import { handlerGenerateBg } from "../../Utils/GetColorBg";
import { useState } from "react";
import {getIconType} from '../../Utils/GetIcon'


const PokemonDetails = ({ pokemon, changeColor }) => {
  const { name, data } = pokemon;
  const { id, front_default, types, stats, abilities } = data;

  // get type pokemon
  const type = types.map((type) => {
    let name = type.type.name[0].toUpperCase() + type.type.name.substr(1);
    return name;
  });

  // get stat pokemon
  const statsD = stats.map((stats) => {
    let name = stats.stat.name[0].toUpperCase() + stats.stat.name.substr(1);
    return { value: stats.base_stat, type: name };
  });

  // get abitity pokemon
  const abilitys = abilities.map(({ ability }) => ability.name);

  const [opacity, setopacity] = useState(0);

  // get color by type
  let bgColor = handlerGenerateBg(type[0]);

  // change Color bacgroun
  document.body.style.backgroundColor = bgColor;

  // change color button
  changeColor(bgColor);

  //  change tittle name
  document.title = name;

  setTimeout(() => setopacity(1), 500);

  return (
    <div className="PokemonDetails-container" style={{ opacity: opacity }}>
      <div className="pokemon-info">
        <div className="nro-Pokemon">#{id}</div>
        <h1 className="name-pokemon">
          {name[0].toUpperCase() + name.substr(1)}
        </h1>
      </div>

      <div className="pokemon-img">
        <img src={front_default} alt="" />
      </div>

      <div className="pokemon-description">
        <div className="pokemon-types">
          {type.map((type, i) => (
            <div className="card-types-icon" key={i}>
              <img className='iconType' src={getIconType(type)} alt="" />
             
            </div>
          ))}
        </div>
        <div className="pokemon-stats">
          <h1>Base Stats:</h1>
          <div>
            {statsD.map(({ type, value }, i) => (
              <div key={i} className="card-types">{`${type}: ${value}`}</div>
            ))}
          </div>
        </div>
        <div className="pokemon-stats">
          <h1>Abilitys:</h1>
          <div>
            {abilitys.map((ability, i) => (
              <div key={i} className="card-types">
                {ability}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonDetails;
