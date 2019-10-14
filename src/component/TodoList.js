import React from 'react';

class TodoList extends React.Component {
    render() {

        const { todos } = this.props;

        return(
            <div className="todolist container">
                {
                    todos.map((_todo, _index) => {
                        return(
                            <div key={_index}>{_todo}</div>
                        );
                    })
                }
            </div>
        );
    }
}

export default TodoList;