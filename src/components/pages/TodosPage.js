import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodosList from "../TodosList";
import { getTodos } from "../../actions/todos"
import { postNewTodo } from "../../actions/newTodo"
import NewTodoForm from "../NewTodoForm";

class TodosPage extends Component {


    static propTypes = {
        todos: PropTypes.shape({
            todos: PropTypes.array.isRequired
        }).isRequired
    };


    componentDidMount() {
        this.props.getTodos()
    }


    render() {
        return (
            <div>
                <h1>Todos Page</h1>
                <NewTodoForm postNewTodo={this.props.postNewTodo}/>
                <br/>
                <TodosList todos={this.props.todos}/>
            </div>
        );
    }
}


const mapStateToProps = ({ todos, newTodo }) => {
    return {
        todos,
        newTodo
    }
};


const mapDispatchToProps = {
    getTodos,
    postNewTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);