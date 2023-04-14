import useTodosActions from '@/hooks/useTodosActions';
import { Button, TextInput } from '@tremor/react';

export default function AddNewTodo() {
  const { addTodo } = useTodosActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = formData.get('title') as string;

    addTodo({ userId: 1, title, completed: false });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <label className="font-medium text-gray-400">
        Add a new todo
        <TextInput
          autoFocus
          type="text"
          name="title"
          required
          placeholder="Study for Math exam..."
          className="h-10 mt-1"
        />
      </label>
      <Button type="submit" color="amber" className="h-10 self-end">
        Add
      </Button>
    </form>
  );
}
