import React from "react";

/* 
      <button onClick={props.onCheckItem} type="button">
        check
      </button>
*/

export default function ShoppingItem(props) {
  return (
    <li>
      <h2
        style={{
          textDecoration: props.item.checked ? "line-through" : null
        }}
      >
        {props.item.name}
      </h2>
      <button onClick={() => props.onCheckItem(props.item)} type="button">
        check
      </button>
      <button onClick={() => props.onDeleteItem(props.item)} type="button">
        delete
      </button>
    </li>
  );
}

ShoppingItem.defaultProps = {
  item: {}
};
