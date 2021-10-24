import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ data, getData,color }) => {
  const [scroll, setScroll] = useState(0);
  const handleNext = () => {
    let x = scroll - 400;
    const wihtTotal = 500 * 30;
    if (800 - wihtTotal > x) {
      x = 800 - wihtTotal - 60;
    }
    setScroll(x);
  };
  const handlePrev = () => {
    let x = scroll + 400;
    if (x > 0) {
      x = 0;
    }
    setScroll(x);
  };

  return (
    <header className="Header-container">
      <div className="listContainer">
        <div className="arrow-prev" onClick={handlePrev} style={{backgroundColor:color}}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="arrow-next" onClick={handleNext}  style={{backgroundColor:color}}>
          <i className="fas fa-chevron-right"></i>
        </div>

        <div className="list-item" style={{ marginLeft: `${scroll}px`,width: `${30*500}px` }}>
          {data.map((pokemon, i) => (
            <button
              className="btn-item"
              onClick={() => getData(pokemon)}
              key={i}
            >
              <Link to={`/${pokemon.name}`}>{i + 1}</Link>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
