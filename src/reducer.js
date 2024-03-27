export const initialState = {
    todos: []
}

export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos: [... state.todos, action.payload]
            }

        case "DELETE_TODO":
            return{
                ...state,
                todos: [...state.todos.filter(item => item.id !== action.payload)]
            }
        default:
            return state;
    }
}