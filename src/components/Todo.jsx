import React, { useState } from "react";
import "./todo.css";
import ToDoList from "./ToDoList";

const Todo = () => {
  const [inputlist, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemevent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setInputList("");
  };

  const deleteItems=(id)=>{
    console.log("deleted");

    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
        return index!== id;
      })
    })
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            value={inputlist}
            onChange={itemevent}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((itemval, index) => {
              return <ToDoList key={index} id={index} text={itemval} 
              onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Todo;
