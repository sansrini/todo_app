import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodosCount from './TodosCount';
import FilterLinks from './FilterLinks';
import constants from '../constants';
const { ALL, ACTIVE, COMPLETED } = constants;

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            currentFilter: ALL,
            todos: []
        };

        this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
        this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleTodoSearch = this.handleTodoSearch.bind(this);
    }

    handleNewTodoItem() {
        this.setState(({searchTerm, todos})=>{
            const todoItem = {
                todo: searchTerm,
                completed: false,
                id: Date.now().toString()
            };
            todos = [...todos, todoItem];
            return {
                todos: todos,
                searchTerm: ''
            };
        });
    }

    handleDeleteBtnClick(evt) {
        const id = evt.target.value;

        this.setState(({todos}) => {
            todos = todos.filter(({id: todoId})=>{
                return (todoId !== id);
            });

            return {
                todos: todos
            };
        });
    }

    handleCheckboxClick(evt) {
        const id = evt.target.value;

        this.setState(({todos}) => {
            const index = todos.findIndex(({id: todoId})=>{
                return todoId === id;
            });

            const {todo, completed} = todos[index];

            // todos = (todos.slice(0,index)
            //     .concat([{
            //         todo: todo,
            //         id: id,
            //         completed: !completed
            //     }])
            //     .concat(todos.slice(index + 1)));

            todos = [
                ...todos.slice(0,index),
                {
                    todo: todo,
                    id: id,
                    completed: !completed
                },
                ...todos.slice(index + 1)
            ];
            return {
                todos: todos
            };
        });
    }

    handleFilterChange(evt, currentFilter) {
        evt.preventDefault();
        this.setState((prevState)=>{
            return {
                currentFilter: currentFilter
            };
        });
    }

    handleTodoSearch(searchTerm) {
        this.setState(()=>{
            return {
                searchTerm: searchTerm
            }
        });
    }

    filterTodos() {
        const {todos, currentFilter, searchTerm } = this.state;
        const filteredTodos = todos.filter(({todo, completed})=>{
            if( todo.indexOf(searchTerm) === -1 ||
                currentFilter === COMPLETED && !completed  ||
                currentFilter === ACTIVE && completed ) {
                return false;
            }
            return true;
        });
        return filteredTodos;
    }

    render() {
        const todos = this.filterTodos();
        const{
            state: {searchTerm, currentFilter},
            handleTodoSearch,
            handleNewTodoItem,
            handleFilterChange,
            handleDeleteBtnClick,
            handleCheckboxClick
        } = this;
        return(
            <div>
                <TodoForm
                    todoText={searchTerm}
                    onNewTodoItem={handleNewTodoItem}
                    onTodoSearch={handleTodoSearch}/>
                <FilterLinks
                    currentFilter={currentFilter}
                    onFilterChange={handleFilterChange}/>
                <TodoList
                    todos={todos}
                    onDeleteBtnClick={handleDeleteBtnClick}
                    onCheckboxClick={handleCheckboxClick}
                />
                <TodosCount todosCount={todos.length}/>
            </div>
        );
    }
}

export default Todo;