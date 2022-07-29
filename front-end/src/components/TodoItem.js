import React from "react";

const TodoItem = (props) => {
    const getStyle = () => {
        let textDecoration = '';
        if(props.status) {
            textDecoration = 'line-through'
        } else {
            textDecoration = 'none'
        }
        return{
            flexGrow: '2',
            textDecoration: textDecoration
        }
    }

    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '2px solid #f4f4f4',
        fontSize: '20px',
        padding: '10px'
    }

    const buttonStyle = {
        backgdroundColor: "#BB0000",
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        cursor: 'pointer',
        fontSize: '16px'
    }
    
    return(
        <div style={wrapperStyle}>
            <input type={'checkbox'} onChange={() => {props.changeStatus(props.id)}}></input>
            <p style={getStyle()} key={props.id}>{props.title}</p>
            <button style={buttonStyle} onClick={() => {props.deleteTodo(props.id, props.title)}}>x</button>
        </div>
    )
}

export default TodoItem;