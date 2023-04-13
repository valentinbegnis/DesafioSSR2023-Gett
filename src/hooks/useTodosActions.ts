import { addNewTodo, deleteTodoById } from '@/store/todos/slice';
import { useAppDispatch } from './store';

export default function useTodosActions() {
  const dispatch = useAppDispatch();

  const addTodo = ({ userId, title, completed }: Todo) => {
    dispatch(addNewTodo({ userId, title, completed }));
  };

  const removeTodo = (id: TodoId) => {
    dispatch(deleteTodoById(id));
  };

  return { addTodo, removeTodo };
}
