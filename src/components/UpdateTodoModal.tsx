import {
  Button, Card, Flex, TextInput, Title,
} from '@tremor/react';
import FocusTrap from 'focus-trap-react';
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
      <FocusTrap>
        <Card ref={modalRef} className="w-80 m-auto p-4 shadow-md">
          <Title color="slate" className="mb-4 text-center font-medium">Edit Todo title</Title>
          <form onSubmit={handleSubmit}>
            <TextInput
              type="text"
              name="title"
              required
              defaultValue={todo.title}
            />
            <Flex justifyContent="center" className="mt-3 gap-2">
              <Button
                type="button"
                color="slate"
                variant="secondary"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="amber"
              >
                Add
              </Button>
            </Flex>
          </form>
        </Card>
      </FocusTrap>
    </div>
  );
}
