import React from 'react'
import Item from './Item'


const List = ({ todos, deleteTodo, completeTodo }) => {

    return (
        <ul>
            {todos.slice(0).reverse().map(todo => (
                <Item key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    id={todo.id}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                />
            ))}

        </ul>
    )
}

export default List
