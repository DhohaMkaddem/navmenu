import React from "react";
import Header from "./Components/Header";
import "./App.css";

const home = {
  id: 1,
  title: "Home",
  selected: false
};
const services = {
  id: 2,
  title: "Services",
  selected: true,
  dropDownArr: [
    { id: 1, title: "item1" },
    { id: 2, title: "item2" },
    { id: 3, title: "item3" }
  ]
};
const about = {
  id: 3,
  title: "About",
  selected: false
};
const navMenu = [home, services, about];

function App() {
  return (
    <div className="App">
      <Header linkListe={navMenu} />
    </div>
  );
}

export default App;
