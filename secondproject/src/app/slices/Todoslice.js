import { createSlice ,nanoid} from "@reduxjs/toolkit";
const initialState={

    todos:[
        {
            id:1,
            text:"Hello World"
        }
    ]
}

export const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{

            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);

        },
        removeTodo:(state,action)=>{

            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)

        },
        updatetodo: (state, action) => {
            const { id, newText } = action.payload;
        
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
        }
        
    }
})

export const {addtodo,removeTodo,updatetodo}=todoslice.actions;

export default todoslice.reducer;

