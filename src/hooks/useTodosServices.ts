import { useEffect } from 'react';
import { getTodosAsync } from '@/store/todos/slice';
import { useAppDispatch } from './store';

export default function useTodosServices() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);
}
