import logo from "./logo.svg";
import "./App.css";
import Heading from "./Components/Heading";
import Menu from "./Components/Menu";
import { useState } from "react";

function App() {
  const menuItems = [
    {
      id: 1,
      name: "Pancakes",
      category: "Breakfast",
      image: "pancakes.jpg",
      price: "$5",
    },
    {
      id: 2,
      name: "Omelette",
      category: "Breakfast",
      image: "omelette.jpg",
      price: "$6",
    },
    {
      id: 3,
      name: "Burger",
      category: "Lunch",
      image: "burger.jpg",
      price: "$8",
    },
    {
      id: 4,
      name: "Pizza",
      category: "Lunch",
      image: "pizza.jpg",
      price: "$10",
    },
    {
      id: 5,
      name: "Milkshake",
      category: "Shakes",
      image: "milkshake.jpg",
      price: "$4",
    },
    {
      id: 6,
      name: "Smoothie",
      category: "Shakes",
      image: "smoothie.jpg",
      price: "$5",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" ? menuItems : menuItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Heading />
      <div>
        <button onClick={() => setActiveCategory("All")}>All</button>
        <button onClick={() => setActiveCategory("Breakfast")}>Breakfast</button>
        <button onClick={() => setActiveCategory("Lunch")}>Lunch</button>
        <button onClick={() => setActiveCategory("Shakes")}>Shakes</button>
      </div>
      <Menu items={filteredItems}/>
    </>
  );
}

export default App;
