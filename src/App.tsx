import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useWeatherForecastQuery } from "./queries";

const API_KEY = '39612356bfcb87e2061a89eb187b5f9c';

const lat = '40.8141';

const lon = "14.3391";

const units = 'metric';


const App = () => {
  const [count, setCount] = useState(0);

  const params = {
    lat,
    lon,
    units,
    appid: API_KEY
  };

  const weatherQuery = useWeatherForecastQuery(params);

  console.log(weatherQuery.data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
