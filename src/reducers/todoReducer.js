const actionType = {
    SET_TODO_PROP : 'todo.setTodoProp'
}

const initialState = {
    todo : {},
}

function reducer(state = initialState, {type, payload}) {
    switch(type) {
        case actionType.SET_TODO_PROP : 
            return {
                ...state,
                todo : {
                    ...state.todo,
                    [payload.name] : payload.value
                }
            }
        default :
            return state;
    }
}

export default reducer;
export {actionType};