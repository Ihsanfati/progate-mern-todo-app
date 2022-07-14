import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
    return(
        <div style={{width: '40%', margin: '0 auto'}}>
            {
                props.todos.map((todo) => {
                    return <TodoItem 
                        id={todo.id} 
                        title={todo.title} 
                        status={todo.completed} 
                        changeStatus={props.changeStatus}
                        deleteTodo={props.deleteTodo}
                    />
                })
            }
        </div>
    )
}

export default Todos;