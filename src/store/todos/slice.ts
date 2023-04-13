import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import todos from '@/sampleTodos/todos.json';

const initialState: TodoWithId[] = todos;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<Todo>) => {
      const id = Math.max(...state.map((todo) => todo.id)) + 1;
      return [...state, { id, ...action.payload }];
    },
    deleteTodoById: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export default todosSlice.reducer;

export const { addNewTodo, deleteTodoById } = todosSlice.actions;
