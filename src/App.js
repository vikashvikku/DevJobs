import "./App.css";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import Cards from "./components/Card/Cards.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Searchbar />
        <Cards />
        <div className="load">
          <button className="load-button">Load More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
