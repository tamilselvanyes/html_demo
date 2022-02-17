import {useState} from 'react'; 
import React from 'react';
import { useContext, createContext } from "react";
const context = createContext(null);

export  function ThemeSetting(){
    
  
  const [mode, setMode] = useState("light");
  const styles = { background: mode === "light" ? "black" : "white",
  height:"500px",
  justifyContent:"center",
  display: "flex"
};
  return (
    <context.Provider value={[mode, setMode]}>
      <div style={styles} className="App">
        <List />
      </div>
    </context.Provider>
  );
}

const List = () => (
  <ul>
    <ListItem value="Light" />
    <ListItem value="Dark" />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);

const Button = ({ value }) => {
  const [mode, setMode] = useContext(context);
  const styles = {
    background: !(mode === "light") ? "black" : "white",
    color: mode === "light" ? "black" : "white"
  };

  return (
    <button
      style={styles}
      onClick={() => setMode(value === "Light" ? "light" : "dark")}
    >
      {value}
    </button>
  );
};
