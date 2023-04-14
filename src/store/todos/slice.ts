/* eslint-disable no-param-reassign */
import getTodos from '@/services/getTodos';
import { type PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await getTodos();
  return response;
});

const initialState: TodosState = {
  data: [],
  status: 'idle',
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<Todo>) => {
      const id = Math.max(...state.data.map((todo) => todo.id)) + 1;
      state.data.push({ id, ...action.payload });
    },
    deleteTodoById: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      state.data = state.data.filter((todo) => todo.id !== id);
    },
    toggleTodoCompleted: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      const todoToComplete = state.data.find((todo) => todo.id === id);
      if (todoToComplete) {
        todoToComplete.completed = !todoToComplete.completed;
      }
    },
    updateTodoTitle: (state, action: PayloadAction<{ id: TodoId; title: string }>) => {
      const { id, title } = action.payload;
      const todoToUpdate = state.data.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.title = title;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default todosSlice.reducer;

export const {
  addNewTodo,
  deleteTodoById,
  toggleTodoCompleted,
  updateTodoTitle,
} = todosSlice.actions;
