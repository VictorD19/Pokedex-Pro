import { useState } from "react";
import "./style.css";

const  Home = () => {
  const [fadeInd, setfadeInd] = useState(0);
  setTimeout(() => {
    setfadeInd(1);
  }, 500);



  return (
    <div className="Home-container" style={{ opacity: fadeInd }}>
      <div className="tittle">
        <h1>Pokedex Pro</h1>
        <img
          src="https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373__480.png"
          alt=""
        />
      </div>
      <h4>Realizado por VictorD</h4>
    </div>
  );
};
export default Home;
