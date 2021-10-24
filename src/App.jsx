import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";

import "./index.css";
import PokemonDetails from "./Pages/PokemonDetails"
import  ThemeProvide  from "./Context/ThemeContext";
import PokemonProvider from "./Context/PokemonContext";
function App() {
  
  return (
  
     <ThemeProvide>
         <PokemonProvider>
      <div className="App">
         <Router>
            <Header  />          
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/:id">
              <PokemonDetails   />
            </Route>
          </Switch>
         
         </Router>
      </div>
      </PokemonProvider>
    </ThemeProvide>

  );
}

export default App;
