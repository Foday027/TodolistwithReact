import { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // const handleClickDelete = () => {

  // }

  async function fetchData() {
    let resp = await axios.get(
      "https://playground.4geeks.com/todo/users/saeed"
    );
    let respData = await resp.data.todos;
    setTodos(respData);
    console.log(todos);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const createPost = async (text) => {
    let response = await axios.post(
      "https://playground.4geeks.com/todo/todos/saeed",
      {
        label: text.length === 0 ? "fill the input tupid!!!" : text,
        is_done: false,
      }
    );

    setInput("");

    fetchData();

    console.log(response.data);
  };

  return (
    <div className="text-center text-dark">
      <form
        className="form-container border border-dark"
        onSubmit={(e) => {
          e.preventDefault();
          createPost(input);
        }}
      >
        <label className="label me-1">My must buy:</label>
        <input
          className="bg-success rounded"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>

      {todos.map((element) => {
        return <li>{element.label}</li>;
      })}
    </div>
  );
}

export default TodoList;
