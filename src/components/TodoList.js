import React from 'react';
import TodoItem from './TodoItem';

const TodoList = function({todos, ...actionProps}) {
    const todoList = todos.map((todo)=>{
        return (
            <TodoItem
                todoItem={todo}
                key={todo.id}
                {...actionProps} />
        );
    });

    return (
        <ul className="list-group">
            {todoList}
        </ul>
    );
};

export default TodoList;