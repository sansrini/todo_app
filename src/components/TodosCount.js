import React from 'react';

const TodosCount = function({todosCount}) {
    return (
        <div className="well well-sm gray">
            <h4>
                Total Todos: {todosCount}
            </h4>
        </div>
    );
}

export default TodosCount;