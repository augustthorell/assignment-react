import React from 'react'
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa'

const Item = ({ text, id, completed, deleteTodo, completeTodo }) => {

    const title = {
        alignSelf: 'center',
        marginLeft: '20px'
    }
    const todoNotDone = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px auto',
        maxWidth: '500px',
        minHeight: '100px',
        backgroundColor: '#e04f7d',
        boxShadow: '15px 15px 10px 5px rgba(0,0,0,0.2)'
    }
    const todoDone = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px auto',
        maxWidth: '500px',
        minHeight: '100px',
        backgroundColor: '#2aeb67',
        boxShadow: '15px 15px 10px 5px rgba(0,0,0,0.2)'
    }
    const button = {
        height: '100%',
        border: 'none',
        margin: '0 15px',
        outline: 'none',
        backgroundColor: 'transparent'
    }
    return (
        <div style={completed ? todoDone : todoNotDone}>
            <h1 style={title}>{text}</h1>

            <div>
                <button style={button} onClick={() => completeTodo(id)}>
                    {completed ? (
                        <FaTimes />
                    ) : (
                        <FaCheck />
                    )
                    }
                </button>
                <button style={button} onClick={() => deleteTodo(id)}><FaTrash /></button>
            </div>

        </div>
    )
}


export default Item
