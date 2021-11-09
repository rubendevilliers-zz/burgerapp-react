import React from "react";
import mealItemFormStyles from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = ({id}) => {
  return (
    <form className={mealItemFormStyles.form}>
        <Input label="Amount" 
        input={
            {
                id: `amount_${id}`, 
                type: "number", 
                min: 1, max: 5, 
                step: 1,
                defaultValue: 0
                }
            } 
        />
        <button> + Add </button>
    </form>
  );
};

export default MealItemForm;
