import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // const handleClickDelete = () => {

  // }
  async function fetchData() {
      let resp = await axios.get('https://playground.4geeks.com/todo/users/saeed');
      let respData = await resp.data;
      setTodos(respData);
      console.log(todos)
    }


  useEffect(() => {
  
    fetchData();
  }, []);

  const createPost = async (text) => {

    let response = await axios.post('https://playground.4geeks.com/todo/todos/saeed', {

      label: text && text.length === 0,
      is_done: false,

    }
    );

    fetchData()

    console.log(response.json)
  }

  createPost();



  return (
    <div className='text-center text-light'>

      <form className='card-container border bg-secondary rounded' onSubmit={(e) => {
        e.preventDefault();
        createPost()       //prevents the page from reloading when submit
      }}>

        <label className='label me-1 mb-2 text-primary '><h1><em>My must have :</em></h1></label><br />
        <input
          className="bg-success rounded me-2"
          type='text'
          placeholder='Add to your list'
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button type='submit'>Submit</button>
      </form>
<ul>
      {todos && todos.map((el, i) => {
        return (
          
            <li key={i}>{el.label}</li>
          

        )
      })}
</ul>

    </div>
  );
}

export default App;