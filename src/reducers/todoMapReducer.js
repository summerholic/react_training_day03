const actionType = {
    ADD_TODO : 'todoMap.addTodo'
}

const initialState = {
    todoMap : new Map()
}

function reducer(state = initialState, {type,payload}) {
    switch(type) {
        case actionType.ADD_TODO : 
            const todoMap = new Map(state.todoMap);
            todoMap.set(payload.id, payload);
            return {
                ...state,
                todoMap
            }
        default : 
            return state
    }
}

export default reducer;
export {actionType};