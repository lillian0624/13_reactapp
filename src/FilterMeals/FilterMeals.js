import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  const [keyword, setkeyword] = useState("");

  useEffect(() => {
    //   //Reduce the number of data filtering，Improve user experience
    //   //Search after the user stops typing for 1 second
    //   //turns one timer on should turn the last one off
    const timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 1000);

    //在Effect 的回调函数中，可以指定一个函数作为返回值
    //这个函数可以称之为清理函数，会在下次Effect执行前调用

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const inputChangeHandler = (e) => {
    setkeyword(e.target.value.trim());
    // const keyword = e.target.value;
  };
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          value={keyword}
          onChange={inputChangeHandler}
          className={classes.SearchInput}
          type="text"
          placeholder={"input key word"}
        />
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
      </div>
    </div>
  );
};

export default FilterMeals;
