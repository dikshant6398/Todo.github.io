import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import TodoItem1 from "./components/TodoItem1";
//import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeComp from "./components/WelcomeComp";
function App() {
  const [todoItem, setTodoitem] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    //console.log(`new ${itemName} and ${itemDate}`);
    const newtodoItem = [...todoItem, { name: itemName, date: itemDate }];
    setTodoitem(newtodoItem);
  };

  const handleDeleteBtn = (todoItemName) => {
    const newtodoItem = todoItem.filter((item) => item.name !== todoItemName);
    setTodoitem(newtodoItem);
  };

  return (
    <center className="todo-containetr">
      <AppName />
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItem.length === 0 && <WelcomeComp></WelcomeComp>}
      <TodoItems
        key={todoItem}
        todoItem={todoItem}
        onDeleteClick={handleDeleteBtn}
      />
    </center>
  );
}

export default App;
