import React from "react";
import FoodItems from "./FoodItems";

const Menu = () => {
  return (
    <div>
      <div>
        <h2>Chaats</h2>
        <hr />

        <div className="row">
          <FoodItems/>
          <FoodItems/>
          <FoodItems/>
        </div>
        <div>
          <h2>Main Cours</h2>
          <div className="row">
            <FoodItems/>
            <FoodItems/>
            <FoodItems/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
