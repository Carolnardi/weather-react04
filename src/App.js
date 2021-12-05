import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <small>
        Code by
        <a href="https://www.instagram.com/carolnardi/" target="_blank">
          {" "}
          Carol De Nardi
        </a>{" "}
        <a href="https://github.com/Carolnardi/weather-react04" target="_blank">
          GitHub
        </a>
      </small>
    </div>
  );
}

export default App;
