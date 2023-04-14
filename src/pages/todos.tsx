import AddNewTodo from '@/components/AddNewTodo';
import ListOfTodos from '@/components/ListOfTodos';

export default function TodosPage() {
  return (
    <section className="max-w-[700px] m-auto flex flex-col gap-4 p-4">
      <AddNewTodo />
      <ListOfTodos />
    </section>
  );
}
