import React from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${Number(props.price).toFixed(2)}`; // it was `$${props.price.toFixed(2)}`
  // JSX code
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
