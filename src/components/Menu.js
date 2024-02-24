import React from "react";
import "../styles/Menu.css";
import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";

export const MenuList = [
  {
    name: "Pepperoni Pizza",
    image: Pepperoni,
    price: 15.99,
  },
  {
    name: "Margherita Pizza",
    image: Margherita,
    price: 11.99,
  },
  {
    name: "PedroTech Special Pizza",
    image: PedroTechSpecial,
    price: 256.53,
  },
  {
    name: "Vegan Pizza",
    image: Vegan,
    price: 17.99,
  },
  {
    name: "Pineapple Pizza",
    image: Pineapple,
    price: 4.99,
  },
  {
    name: "Very Expensive Pizza",
    image: Expensive,
    price: 1997.99,
  },
];
function Menu() {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((item) => {
            return (
              <div className="menuItem">
                <div style={{ backgroundImage: `url(${item.image})` }}> </div>
                <h1> {item.name} </h1>
                <p> ${item.price} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
