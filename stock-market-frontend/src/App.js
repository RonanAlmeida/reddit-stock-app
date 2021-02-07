import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [ticks, setTicks] = useState([]);

  useEffect(() => {
    fetch('/get_stock_analysis').then(response =>
      response.json().then(data => {
        // setTicks(data)
        // console.log(data)
        setTicks(data.tickers)
      }))

  }, [])
  console.log(ticks)

  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
