import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputTextChangeEvt = this.handleInputTextChangeEvt.bind(this);
        this.handleRefInputEvt = this.handleRefInputEvt.bind(this);
    }

    handleFormSubmit(evt) {
        evt.preventDefault();
        this.props.onNewTodoItem();
    }

    handleInputTextChangeEvt(evt) {
        const todoText = evt.target.value;
        this.props.onTodoSearch(todoText);
    }

    handleRefInputEvt(inputRef) {
        inputRef.focus(); // use ref only for focusing
    }

    render() {
        const {todoText} = this.props;
        const {
            handleFormSubmit,
            handleInputTextChangeEvt,
            handleRefInputEvt
        } = this;
        return (
            <form className="form-group"
                  onSubmit={handleFormSubmit}>
                <input type="text"
                       className="form-control"
                       placeholder="Type to search or enter to add Todo"
                       value={todoText}
                       onChange={handleInputTextChangeEvt}
                       ref={handleRefInputEvt}/>
            </form>
        );
    }
}

export default TodoForm;