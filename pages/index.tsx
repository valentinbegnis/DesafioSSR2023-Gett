import React from 'react';
import { useAppSelector } from '@/hooks/store';

export default function Home() {
  const todos = useAppSelector((state) => state.todos);

  return (
    <main className="bg-[#fbfcff] flex min-h-screen flex-col justify-center p-4">
      <h1 className="text-center text-2xl font-bold">Todo List</h1>
      <div>
        <ul className="flex flex-col gap-4 p-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex gap-4 p-4 border rounded-md shadow-md bg-white">
              <span>{todo.completed ? '✔' : '❌'}</span>
              <p className="font-bold">{todo.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
