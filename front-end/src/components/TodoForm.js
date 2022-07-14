import React, { Component } from "react";

class TodoForm extends React.Component{
    state = {
        title: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
    }

    handleChange = (event) => {
        const newTodoTitle = event.target.value;
        this.setState({
            title: newTodoTitle
        });
    }

    render(){
        console.log(this.state.title);
        return(
            <div style={{marginBottom: '32px'}}>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input 
                        type='text'
                        placeholder='Add your ToDo'
                        style={{height: '66px', width: '33%', fontSize: '16px'}}
                        onChange={(event) => {this.handleChange(event)}}
                    />
                    <button style={{height: '72px', fontSize: '16px'}}>Add ToDo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;