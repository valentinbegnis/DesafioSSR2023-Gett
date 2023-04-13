import AddNewTodo from '@/components/AddNewTodo';
import ListOfTodos from '@/components/ListOfTodos';

export default function Home() {
  return (
    <main className="bg-[#fbfcff] flex min-h-screen flex-col justify-center p-4">
      {/* <Title className="text-center text-4xl font-bold text-orange-400">Todo List</Title> */}
      <section className="flex flex-col gap-4 p-4">
        <AddNewTodo />
        <ListOfTodos />
      </section>
    </main>
  );
}
