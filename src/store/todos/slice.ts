import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import todos from '@/sampleTodos/todos.json';

const initialState: TodoWithId[] = todos;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<Todo>) => {
      const id = Math.max(...state.map((todo) => todo.id)) + 1;
      state.push({ id, ...action.payload });
    },
    deleteTodoById: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggleTodoCompleted: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      const todoToComplete = state.find((todo) => todo.id === id);
      if (todoToComplete) {
        todoToComplete.completed = !todoToComplete.completed;
      }
    },
    updateTodoTitle: (state, action: PayloadAction<{ id: TodoId; title: string }>) => {
      const { id, title } = action.payload;
      const todoToUpdate = state.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.title = title;
      }
    },
  },
});

export default todosSlice.reducer;

export const {
  addNewTodo,
  deleteTodoById,
  toggleTodoCompleted,
  updateTodoTitle,
} = todosSlice.actions;
