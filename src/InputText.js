import { useReducer, useState } from "react"
import { initialState, reducer } from "./reducer"

const InputText = () => {
    const [text, setText] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleKeyUp = (e) => {
        if(e.keyCode === 13){
            if(text === "") return;
            dispatch({
                type: "ADD_TODO",
                payload: {
                    id: Math.random(),
                    text
                }
            })
            setText("")
        }
    }
    const handleDelete = id =>{
        dispatch({ type: "DELETE_TODO", payload: id})
    }
    return (
        <>
            <input value={text} 
                placeholder="add to do" 
                onChange={(e) =>
                setText(e.target.value)}
                onKeyUp={handleKeyUp}
                />
        {Object.keys(state.todos).length === 0 ? (
            <p>To do empty</p>
        ):
        (
            state.todos.map((item) => (
                <div key={item.id}>
                    <p>{item.text}</p>
                    <div onClick={() => handleDelete(item.id)}>x</div>
                </div>
            ))
        )}
        </>
    )
}
export default InputText