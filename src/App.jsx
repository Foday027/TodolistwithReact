import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { label: input, done: false }]);
    setInput('')
  };

  // const handleDelete = (i) => {
  //   let aux = todos;
  //   aux = aux.filter((el, index) => i !== index);
  //   setTodos(aux);
  // }




  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get('https://playground.4geeks.com/todo/users/saeed');
      let respData = await resp.data;
      setTodos(respData);
      console.log(todos)
    }
    fetchData();

  }, []);


  const createPost = async (text) => {

    let response = await axios.post('https://playground.4geeks.com/todo/todos/saeed', {

      label: text && text.length === 0,
      is_done: false,

    }
    );


    console.log(response.json);
  };
  createPost();



  return (
    <div className='text-center text-light bg-secondary pb-1 rounded'>

      <form className='mx-3' onSubmit={handleSubmit}>

        <label className='label me-1 mb-2 text-primary'><h1><em>My must have</em></h1></label><br />
        <input
          className="bg-success rounded  me-2"
          type='text'
          placeholder='Add to your desire'
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button className='mb-3' type='submit'>Submit</button>
      </form>
      <ul>
        {todos && todos.map((el, i) => {
          return (

            <li className=" list-style list-group-item border-light mt-1 me-4 rounded" key={i}>{el.label}</li>

          )
        })}
      </ul>

    </div>
  );
}

export default App;