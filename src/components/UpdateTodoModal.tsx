import {
  Button, Card, TextInput, Title,
} from '@tremor/react';
import useTodosActions from '@/hooks/useTodosActions';
import useClickOutsideModal from '@/hooks/useClickOutsideModal';

interface Props {
  todo: TodoWithId
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UpdateTodoModal({ todo, setOpenModal }: Props) {
  const { updateTodo } = useTodosActions();
  const { modalRef } = useClickOutsideModal({ setOpenModal });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = formData.get('title') as string;

    updateTodo(todo.id, title);
    setOpenModal(false);
  };

  return (
    <div className="fixed z-10 inset-0 flex bg-black/50">
      <Card ref={modalRef} className="relative w-80 m-auto p-4 shadow-md">
        <Title className="mb-4 text-center">Edit Todo title</Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            name="title"
            defaultValue={todo.title}
          />
          <Button
            type="submit"
            color="amber"
            className="w-full mt-4"
          >
            Add
          </Button>
        </form>
      </Card>
    </div>
  );
}
