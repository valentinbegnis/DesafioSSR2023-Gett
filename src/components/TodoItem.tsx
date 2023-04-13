import useTodosActions from '@/hooks/useTodosActions';
import { TableCell, TableRow, Text } from '@tremor/react';
import { useState } from 'react';
import { PencilSquare, Trash } from './Icons';
import UpdateTodoModal from './UpdateTodoModal';
import Modal from './Modal';

interface Props {
  todo: TodoWithId
}

export default function TodoItem({ todo }: Props) {
  const {
    removeTodo,
    toggleCheckedTodo,
  } = useTodosActions();

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell className="p-2 pt-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCheckedTodo(todo.id)}
            className="w-4 h-4 accent-orange-600 cursor-pointer"
          />
        </TableCell>
        <TableCell className="p-2">
          <Text className={`${todo.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
            {todo.title}
          </Text>
        </TableCell>
        <TableCell className="p-2">
          <button
            onClick={() => setOpenModal(true)}
            type="button"
            title="Edit Todo title"
            className="mr-2 text-gray-400"
          >
            <PencilSquare />
          </button>
          <button
            onClick={() => removeTodo(todo.id)}
            type="button"
            title="Remove Todo"
            className="text-gray-400"
          >
            <Trash />
          </button>
        </TableCell>
      </TableRow>
      <Modal>
        {
          openModal
          && (
            <UpdateTodoModal
              todo={todo}
              setOpenModal={setOpenModal}
            />
          )
        }
      </Modal>
    </>
  );
}
