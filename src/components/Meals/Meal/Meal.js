import React from "react";
import classes from "./Meal.module.css";
import Counter from "./UI/Counter/Counter";

const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src="/img/meals/1.png" />
      </div>
      <div>
        <h2 className={classes.Title}>hamburger1</h2>
        <p className={classes.Desc}>
          100% Australian Beef juicy delicious yum yummy
        </p>
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>12</span>
          <Counter amount={3} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
