import React, {Component} from 'react';
import autobind from 'auto-bind';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {generateId} from '../IDGenerator'
import todoAction from '../actions/TodoAction';
import todoMapAction from '../actions/TodoMapAction';
import TodoEditForm from '../views/TodoEditForm';

class TodoEditFormContainer extends Component {
    constructor(props) {
        super(props);
        autobind(this);
    }

    onSetTodoProp(name, value) {
        this.props.todoAction.setTodoProp(name, value);
    }

    onAddTodo() {
        const {todo} = this.props;
        this.props.todoMapAction.addTodo({...todo, id:generateId(8)});
    }

    onClearTodo() {
        this.props.todoAction.setTodoProp('title', '');
        this.props.todoAction.setTodoProp('date', '');
    }

    render() {
        const {todo} = this.props;
        return (
            <TodoEditForm
                todo = {todo}
                onSetTodoProp={this.onSetTodoProp}
                onAddTodo={this.onAddTodo}
                onClearTodo={this.onClearTodo}
            />
        )
    }
}


const mapStateToProps = ({todoState}) => ({
    todo : todoState.todo
})

const mapDispatchToProps = (dispatch) => ({
    todoAction : bindActionCreators(todoAction, dispatch),
    todoMapAction : bindActionCreators(todoMapAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditFormContainer);