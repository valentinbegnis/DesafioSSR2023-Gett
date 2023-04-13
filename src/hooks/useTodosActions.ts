import {
  addNewTodo,
  deleteTodoById,
  toggleTodoCompleted,
  updateTodoTitle,
} from '@/store/todos/slice';
import { useAppDispatch } from './store';

export default function useTodosActions() {
  const dispatch = useAppDispatch();

  const addTodo = ({ userId, title, completed }: Todo) => {
    dispatch(addNewTodo({ userId, title, completed }));
  };

  const removeTodo = (id: TodoId) => {
    dispatch(deleteTodoById(id));
  };

  const toggleCheckedTodo = (id: TodoId) => {
    dispatch(toggleTodoCompleted(id));
  };

  const updateTodo = (id: TodoId, title: string) => {
    dispatch(updateTodoTitle({ id, title }));
  };

  return {
    addTodo,
    removeTodo,
    toggleCheckedTodo,
    updateTodo,
  };
}
