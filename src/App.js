import React from "react";
import AddItemForm from "./AddItemForm";
import ShoppingList from "./ShoppingList";

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false }
    ]
  };
  // using Fragment to avoid an unnecessary <div>
  // <div className="App"></div>

  /* == SAMPLE Call Back Prop Function to make sure it's working  
    handleCheckItem() {
    console.log("handle check item called");
  }
  */

  /* === Call Back Props (implementing arrow functions) == 
  Notice the = (item) => { usage of an arrow function 
  so that we don't encounter the this problem.*/

  handleDeleteItem = item => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item);
    this.setState({
      shoppingItems: newItems
    });
  };

  handleCheckItem = item => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked;
      }
      return itm;
    });
    this.setState({
      shoppingItems: newItems
    });
  };

  handleAddItem = itemName => {
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ];
    this.setState({
      shoppingItems: newItems
    });
    console.log("handle add item", { itemName });
  };

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>

        <main>
          <section>
            <AddItemForm onAddItem={this.handleAddItem} />
          </section>
          <ShoppingList
            items={this.state.shoppingItems}
            onDeleteItem={this.handleDeleteItem}
            onCheckItem={this.handleCheckItem}
          />
          <section />
        </main>
      </>
    );
  }
}
export default App;
