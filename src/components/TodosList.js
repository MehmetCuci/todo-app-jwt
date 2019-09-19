import React from 'react';
import PropTypes from "prop-types";
import { List, Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const TodosList = ({todos}) => {
    const emptyMsg = (
        <p>
            There are no todos yet.
        </p>
    );


    const todosList = (
        todos.todos.map(todo =>
            <List divided verticalAlign='middle' key={todo._id}>

                <List.Item>
                    <List.Content floated='right'>
                        {todo.done === 0 ? <Button><Icon name='close' /></Button>
                            : <Button color={"green"}><Icon name='check' /></Button>}
                    </List.Content>

                    <Icon color='teal' name='circle thin' />
                    <List.Content>{todo.done === 1 ? <s>`${todo.name}`</s> : `${todo.name}` }</List.Content>
                </List.Item>

            </List>
        )
    );
    return (
        <div>
            { todos.length === 0 ? emptyMsg
                :  todosList
            }
        </div>
    );
};

TodosList.propTypes = {
    todos: PropTypes.shape({
        todos: PropTypes.array.isRequired
    }).isRequired
};

export default TodosList;
