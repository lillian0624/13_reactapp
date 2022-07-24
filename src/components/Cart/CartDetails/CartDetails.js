import React, { useContext, useState } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/CartContext";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../Meals/Meal/UI/Confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  //设置state来控制确认框的显示
  const [showConfirm, setShowConfirm] = useState(false);

  const showConfirmHandler = () => {
    setShowConfirm(true);
  };

  const CancelHandler = (e) => {
    e.stopPropagation(); //取消冒泡
    setShowConfirm(false);
  };

  const OkHandler = () => {
    //clear cart
    ctx.cartDispatch({ type: "CLEAR" });
  };

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          onCancel={CancelHandler}
          onOk={OkHandler}
          ConfirmText={"Confirm to clear the cart?"}
        />
      )}
      ;
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Details</h2>
          <div onClick={showConfirmHandler} className={classes.Clear}>
            <FontAwesomeIcon icon={faTrash} />

            <span>Clear Cart</span>
          </div>
        </header>

        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            <Meal noDesc key={item.id} meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
