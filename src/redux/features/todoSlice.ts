import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type TodoProps = {
    id: string,
    title: string;
    description: string;
    isCompleted?: boolean;
};

type InitialStateProps = {
    todos: TodoProps[];
    singleTodos:TodoProps|null
};


const initialState: InitialStateProps = {
    todos: [],
    singleTodos:null
};


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoProps>) => {
            state.todos.push({ ...action.payload, isCompleted: false });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        singleTodo:(state,action:PayloadAction<string>)=>{
           const todo=state.todos.find((item)=>item.id === action.payload)
           if(todo) state.singleTodos = todo
        },
        completedTodo: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(item => item.id == action.payload)
            if (task) task.isCompleted = !task?.isCompleted
        },
        updateTodo: (state, action: PayloadAction<TodoProps>) => {
            const { id,title,description} = action.payload;
            const todo = state.todos.find((item) => item.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
            }
            
        },
    },
});

export const { addTodo, removeTodo, completedTodo, singleTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer;
