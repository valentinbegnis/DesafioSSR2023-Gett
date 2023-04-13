import AddNewTodo from '@/components/AddNewTodo';
import ListOfTodos from '@/components/ListOfTodos';

export default function Home() {
  return (
    <main className="bg-[#fbfcff] flex min-h-screen flex-col justify-center p-4">
      <h1 className="text-center text-2xl font-bold">Todo List</h1>
      <section className="flex flex-col gap-6 p-4">
        <ListOfTodos />
        <AddNewTodo />
      </section>
    </main>
  );
}
