import React from "react";
import { useState } from "react";
import { Navbar, NavLink, Nav, Link, Container } from "react-bootstrap";
import Todos from './Todos';
import TodoForm from './TodoForm';
import { MDBContainer } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Dashboard = () => {
    const [todos, setTodos] = useState([
        {
          'id': 1,
          'title': 'Aljabar Linear',
          'completed': true
        },
        {
          'id': 2,
          'title': 'Matrix',
          'completed': true
        },
        {
          'id': 3,
          'title': 'Regression',
          'completed': false
        },
        {
          'id': 4,
          'title': 'Dimensionality Reduction',
          'completed': false
        },
        {
          'id': 5,
          'title': 'Classification',
          'completed': false
        },
        {
          'id': 6,
          'title': 'Joint Probability Distribution',
          'completed': false
        },
        {
          'id': 7,
          'title': 'Discrete Distribution',
          'completed': false
        },
        {
          'id': 8,
          'title': 'Continous Distribution',
          'completed': false
        },
        {
          'id': 9,
          'title': 'Normal Distribution',
          'completed': false
        },
        {
          'id': 10,
          'title': 'Correlation',
          'completed': false
        },
        {
          'id': 11,
          'title': 'Statistic',
          'completed': true
        },
        {
          'id': 12,
          'title': 'Algorithm Complexity',
          'completed': true
        }
      ]);
    
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
      <div className='heavy-rain-gradient color-block-5 mb-3 mx-auto z-depth-1-half' style={{textAlign: 'center', padding: '12px'}}>
          <div>
              <Navbar bg="dark" variant="dark">
                  <Container>
                      <Navbar.Brand href="/">Home</Navbar.Brand>
                      <Nav className="me-auto">
                          <Nav.Link href="/logout">Logout</Nav.Link>
                      </Nav>
                  </Container>
              </Navbar>
          </div>
          <h1>My Todo List</h1>
          <TodoForm addTodo={addTodo}/>
          <Todos todos={todos} changeStatus={toggleCompleted} deleteTodo={deleteTodo}/>
        </div>
      );    
}

export default Dashboard;