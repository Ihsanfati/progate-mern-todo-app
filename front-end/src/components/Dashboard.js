import React from "react";
import { useState, useEffect } from "react";
import Todos from './Todos';
import TodoForm from './TodoForm';
import SearchAppBar from "./SearchAppBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from "axios";


const Dashboard = ({id, username, job, email, password}) => {
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
            todo.completed = !todo.completed;
          }
          return todo; 
        })
        console.log(updateTodos);
        setTodos(updateTodos);
      }
      
      const deleteTodo = (todoId) => {
        const updateStates = todos.filter((todo) => {
          return todo.id !== todoId;
        })
        console.log(updateStates);
        setTodos(updateStates);
      }
      
      const addTodo = (todoTitle) => {
        const arrTodos = todos;
        if(todoTitle === ''){
          return
        }
        const newTodos = {
          'id': arrTodos.length + 1,
          'title': todoTitle,
          'completed': false
        }
        const updateTodos = arrTodos.concat(newTodos);
        setTodos(updateTodos);
        console.log("New ToDo has been added...");
      }
    
      return(
        <div className='Dashboard' style={{textAlign: 'center', padding: '12px'}}>
          <SearchAppBar addTodo={addTodo}/>
          <TodoForm addTodo={addTodo}/>
          <Todos todos={todos} changeStatus={toggleCompleted} deleteTodo={deleteTodo}/>
          <h1>{username}</h1>
        </div>
      );    
}

export default Dashboard;