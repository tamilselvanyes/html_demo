import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const API = "http://localhost:4000/mobiles";
  const [mobiles, setMobiles] = useState(null);

  const getMobiles = () => {
    fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMobiles(mvs));
  };
  useEffect(() => {
    getMobiles();
  }, []);

  return (
    <div className="App">
      <h1>Hello Welcome</h1>
      <div className="phone-list-container">
        {mobiles != null
          ? mobiles.map((mobile, index) => (
              <Phone mobile={mobile} key={index} />
            ))
          : ""}
      </div>
    </div>
  );
}

function Phone({ mobile }) {
  console.log(mobile.model);
  return (
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model}></img>
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  );
}
