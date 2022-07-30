import React from "react";
import axios from "axios";
import Login from "./Login";
import Todos from './Todos';
import TodoForm from './TodoForm';
import SearchAppBar from "./SearchAppBar";
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



const Dashboard = ({id, username, job, email, password}) => {
    const [log, setLog] = useState(true);
    const [todos, setTodos] = useState([]);

    console.log(id);
    console.log(username);
    console.log(job);
    console.log(email);
    console.log(password);

    useEffect(() => {
      axios.post("http://localhost:3001/data", {id}).then((response) => {
        console.log(response.data);
        setTodos(response.data);
        console.log(todos);
      })
    }, []);
    
      const toggleCompleted = (todoId) => {
        const updateTodos = todos.map((todo) => {
          if(todo.id === todoId) {
            if(todo.completed === 0)
            todo.completed = 1;
            else {
              todo.completed = 0;
            }
          }
          return todo; 
        })
        console.log(updateTodos);
        setTodos(updateTodos);
      }
      
      const deleteTodo = (todoId, title) => {
        const updateStates = todos.filter((todo) => {
          return todo.id !== todoId;
        });
        axios.post("http://localhost:3001/data/delete", {id, title}).then((response) => {
          console.log(response);
        })
        console.log(updateStates);
        setTodos(updateStates);
      }
      
      const addTodo = (todoTitle) => {
        const arrTodos = todos;
        if(todoTitle === ''){
          return
        } else {
          const users_id = id;
          const todos_id = arrTodos.length + 1;
          const title = todoTitle;
          const completed = 0;
          axios.post("http://localhost:3001/data/insert", {users_id, todos_id, title, completed}).then((response) => {
            console.log(response);
          });
          axios.post("http://localhost:3001/data", {id}).then((response) => {
            console.log(response.data);
            setTodos(response.data);
          })
          console.log("New ToDo has been added...");
        }
      }

      const handleLog = () => {
        setLog(!log);
        console.log("clicked");
      }

      if(log){
        return(
          <div className='Dashboard' style={{textAlign: 'center', padding: '12px'}}>
            <SearchAppBar handleLog={handleLog}/>
            <TodoForm addTodo={addTodo}/>
            <Todos todos={todos} changeStatus={toggleCompleted} deleteTodo={deleteTodo}/>
          <h1>{username}</h1>
        </div>
        );
      } else {
        return <Login />
      }
}

export default Dashboard;