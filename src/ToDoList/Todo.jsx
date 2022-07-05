import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [inputlist, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemevent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems)=>{
        return [...oldItems,inputlist];
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a items" onChange={itemevent} />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((itemval) => {
              return <li>{itemval}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Todo;
