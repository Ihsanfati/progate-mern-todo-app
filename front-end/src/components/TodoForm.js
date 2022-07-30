import React from "react";

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
            <div style={{marginTop: '30px', marginBottom: '30px'}}>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input 
                        type='text'
                        placeholder='   write down what you want to do'
                        style={{height: '66px', width: '33%', fontSize: '16px'}}
                        onChange={(event) => {this.handleChange(event)}}
                    />
                    <button className='button-add-todo' style={{height: '65px', fontSize: '16px', marginLeft: '5px'}}>Add ToDo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;