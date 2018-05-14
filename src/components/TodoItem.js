import React from 'react';

const TodoItem = function({todoItem: {todo, id, completed}, onCheckboxClick, onDeleteBtnClick}) {
    return (
        <li className="list-group-item">
            <h3>
                <input
                    className="float-left"
                    type="checkbox"
                    checked={completed}
                    onChange={onCheckboxClick}
                    value={id}
                />
                {todo}
                <button
                    className="btn btn-default btn-danger float-right"
                    value={id}
                    onClick={onDeleteBtnClick}>
                    Delete
                </button>
            </h3>
        </li>
    );
};


export default TodoItem;