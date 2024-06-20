import { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState("");

  // const handleClickDelete = () => {

  // }

  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get(
        "https://playground.4geeks.com/todo/users/saeed"
      );
      let respData = await resp.data.todos;
      setTodos(respData);
      console.log(todos);
    }
    fetchData();
  }, []);

  // const createData = axios.post('https://playground.4geeks.com/todo/users/saeedkallon', {
  //     NickName: 'Bones',
  //     Hobby: 'Football',
  //     Aim: 'Web Developer',
  //     ShoppingCart: 'Mechanical Keyboard + LG Monitor',
  //     Order: [1, 2, 3]
  // }, {
  //     headers: { "content-type": "application/json" },

  //    }
  // )
  // console.log(createData)

  return (
    <div className="text-center text-dark">
      <form className="form-container border border-dark">
        <label className="label me-1">My must buy:</label>
        <input className="bg-success rounded" />
      </form>

      {/* {todos.map((task, i) => (

      ))} */}
    </div>
  );
}

export default TodoList;
