import PokemonList from "@Components/PokemonList";
import Details from "@Pages/Details";
import Home from "@Pages/Home";
import Layout from "@Pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all" element={<PokemonList />}>
            <Route path=":pokemonId" element={<Details />} />
          </Route>
          <Route path="favorites" element={<PokemonList />}>
            <Route path=":pokemonId" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
