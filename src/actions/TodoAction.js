import {actionType} from '../reducers/todoReducer';

function setTodoProp(name, value) {
    return (dispatch) => dispatch(
        {
            type:actionType.SET_TODO_PROP, 
            payload:{name, value}
        }
    )
}

export default {
    setTodoProp
}