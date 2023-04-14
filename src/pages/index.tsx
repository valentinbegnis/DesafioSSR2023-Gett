import AddNewTodo from '@/components/AddNewTodo';
import ListOfTodos from '@/components/ListOfTodos';
import { Text, Title } from '@tremor/react';

export default function Home() {
  return (
    <>
      <main>
        <Title className="text-center text-3xl font-bold text-orange-400">Todo List App</Title>
        <section className="max-w-[700px] m-auto flex flex-col gap-4 p-4">
          <AddNewTodo />
          <ListOfTodos />
        </section>
      </main>
      <footer className="pt-2 px-4 text-gray-400">
        <Text>
          <span className="font-medium text-orange-400">
            Gett
          </span>
          {' '}
          Challenge - Full Stack Developer
        </Text>
      </footer>
    </>
  );
}
