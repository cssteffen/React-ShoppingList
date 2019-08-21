import React from "react";

/*
Call the callback prop when the form is submitted. 
We can use properties of the event to get the value 
from the input node.

Make sure you add a name='some-name' to the <input />.
*/

export default class AddItemForm extends React.Component {
  render() {
    /*TODO: need to wire up the for to add items in App state...*/
    const onSubmitForm = e => {
      e.preventDefault();
      //e.target['inputName'] references '<input Name = 'inputName' />
      this.props.onAddItem(e.target.itemToAdd.value);
    };
    return (
      <form onSubmit={onSubmitForm}>
        <input
          name="itemToAdd"
          type="text"
          placeholder="carrots"
          aria-label="Shopping list item"
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}
