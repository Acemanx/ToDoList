import React, { Component } from "react";
class TodoItems extends Component {
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
  createTasks = item => {
    return (
      <div key={item.key} className="toDoDiv">
        <li
          className={item.state}
          onClick={() => this.props.markAsComplete(item.key)}
        >
          {item.text}
        </li>
        <i onClick={() => this.props.deleteItem(item.key)}>
          <img
            className="deleteIcon"
            src="https://img.icons8.com/ios-glyphs/64/000000/delete-sign.png"
          />
        </i>
      </div>
    );
  };
}
export default TodoItems;
