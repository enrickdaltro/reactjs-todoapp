import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
    }

    render() {
        return(
            <div className="addtodo container">
                <form className="addtodo form" onSubmit={(e) => this.submitTodo(e)} >
                    <input 
                        className="input-bar" 
                        onChange={(e) => this.updateInput(e)} 
                        type="text" 
                        placeholder="Adicione um item" 
                    />
                    <button className="add-button" type="submit">Adicionar</button>
                </form>
            </div>
        );
    }

    updateInput = (e) => {
        this.setState({ todo: e.target.value });
    }

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFunction(this.state.todo);
    }
}

export default AddTodo;