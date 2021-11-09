import React from "react";
import MealItemForm from "./MealItemForm";
import mealItemStyles from "./MealItem.module.css";

const MealItem = ({ id, name, description, price }) => {
  const fixedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={mealItemStyles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={mealItemStyles.description}>{description}</div>
        <div className={mealItemStyles.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
