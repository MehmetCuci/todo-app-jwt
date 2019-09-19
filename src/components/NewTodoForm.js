import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Grid} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import jwt from "jsonwebtoken";
class NewTodoForm extends Component {

    state = {
        task: "",
        userId: jwt.decode(localStorage.getItem("userToken")).userId,
        errors: {}
    };

    static propTypes = {
        postNewTodo: PropTypes.func.isRequired
    };

    taskHandle = (e) =>{

        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors
        });

        if (Object.keys(errors).length === 0){
            this.props.postNewTodo(this.state);

            this.setState({
                task : ""
            })
        }
    };

    validate = () => {
        const errors = {};
        if (!this.state.task) errors.title = "Task can't be blank.";
        return errors;
    };

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.onSubmit();
        }
    };

    render() {
        const {errors} = this.state;
        return (

            <Grid.Row columns={2}>
                <Form>
                <Grid.Column width={10}>
                        <Form.Field error={!!errors.title}>
                            <span>{this.state.errors.title}</span>
                            <input name={"task"} placeholder='Add new todo... (Press enter)' value={this.state.task} onChange={this.taskHandle} onKeyDown={this._handleKeyDown}/>
                        </Form.Field>
                </Grid.Column>
                </Form>
            </Grid.Row>

        );
    }
}

NewTodoForm.propTypes = {};

export default NewTodoForm;