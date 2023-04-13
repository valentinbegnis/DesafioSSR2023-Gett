import useTodosActions from '@/hooks/useTodosActions';

export default function AddNewTodo() {
  const { addTodo } = useTodosActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = formData.get('title') as string;

    addTodo({ userId: 1, title, completed: false });
  };

  return (
    <section className="p-4 border rounded-md shadow-md bg-white">
      <h2 className="mb-2 text-xl font-bold">Add new todo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          type="text"
          placeholder="eg: Finish homework..."
          className="border rounded-md p-2"
        />
        <button type="submit" className="rounded-md p-2 font-bold text-white bg-purple-300">
          Add
        </button>
      </form>
    </section>
  );
}
