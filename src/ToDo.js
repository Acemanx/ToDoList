import React from "react";
import { withRouter } from "react-router-dom";
import TodoItems from "./ToDoItems";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      items: [],
      currentItem: { text: "", key: "", state: "" }
    };
  }
  render() {
    return (
      <div className="toDoContainer">
        <TodoItems
          entries={this.state.items}
          markAsComplete={this.markAsComplete}
          deleteItem={this.deleteItem}
        />
        <div className="header">
          <h3>ToDo List</h3>
          <form onSubmit={this.addItem}>
            <input
              placeholder="Task"
              value={this.state.currentItem.text}
              onChange={this.handleChange}
              maxLength="32"
            />
            <button type="submit"> Add Item </button>
          </form>
        </div>
      </div>
    );
  }

  handleChange = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now(), state: "undone" };
    this.setState({
      currentItem
    });
  };
  addItem = event => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", value: "", state: "undone", key: "" }
      });
    }
  };
  markAsComplete = key => {
    console.log(key);
    const mapDoneElement = this.state.items.map(item => {
      if (item.key === key && item.state !== "done") {
        item.state = "done";
        return item;
      } else if (item.state === "done" && item.key === key) {
        item.state = "undone";
        return item;
      } else {
        return item;
      }
    });
    console.log(mapDoneElement);
    this.setState({
      items: mapDoneElement
    });
  };
  deleteItem = key => {
    console.log(key);
    const filterElements = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filterElements
    });
  };
}
export default withRouter(ToDo);
