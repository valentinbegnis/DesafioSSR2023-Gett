import { createSlice } from '@reduxjs/toolkit';
import todos from '@/sampleTodos/todos.json';

interface Todo {
  userId: number,
  title: string,
  completed: boolean
}

interface TodoWithId extends Todo {
  id: number
}

const initialState: TodoWithId[] = todos;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
