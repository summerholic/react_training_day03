import {actionType} from '../reducers/todoMapReducer';

function addTodo(todo) {
    return (dispatch) => dispatch({type:actionType.ADD_TODO, payload:todo});
}

export default {
    addTodo
}