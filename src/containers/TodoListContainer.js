import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'auto-bind';
import TodoListView from '../views/TodoListView';
import todoMapAction from '../actions/TodoMapAction'

class TodoListContainer extends Component {
    constructor(props) {
        super(props);
        autobind(this);
    }

    onTodoSelect(id) {
        alert(id);
    }

    render() {
        const {todoMap} = this.props;

        let todos = Array.from(todoMap.values());
        return(
            <TodoListView
                todos = {todos}
                onTodoSelect = {this.onTodoSelect}
                />
        )
    }
}

const mapStateToProps = ({todoMapState}) => ({
    todoMap : todoMapState.todoMap
});

const mapDispatchToProps = ({dispatch}) => ({
    todoMapAction : bindActionCreators(todoMapAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);