import React from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <ShoppingItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem}
          onCheckItem={props.onCheckItem}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;

ShoppingList.defaultProps = {
  items: []
};
