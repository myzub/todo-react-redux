import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addTask = () => {
    dispatch(addNewTodo(text));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      {status === "pending" && <h2>Loading...</h2>}
      {error && <h2>An Error occurred: {error}</h2>}

      <TodoList />
    </div>
  );
}

export default App;
