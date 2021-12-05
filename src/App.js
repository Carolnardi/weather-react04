import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <small>
        Code by
        <a
          href="https://www.instagram.com/carolnardi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Carol De Nardi
        </a>{" "}
        <a
          href="https://github.com/Carolnardi/weather-react04"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </small>
    </div>
  );
}

export default App;
