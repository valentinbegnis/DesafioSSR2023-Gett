import {
  Badge,
  Card,
  SelectBox,
  SelectBoxItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from '@tremor/react';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/store';
import useTodosServices from '@/hooks/useTodosServices';
import TodoItem from './TodoItem';
import Pagination from './Pagination';
import Modal from './Modal';
import RedirectToLoginModal from './RedirectToLoginModal';

export default function ListOfTodos() {
  useTodosServices();
  const todos = useAppSelector((state) => state.todos);

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(5);
  const [openModal, setOpenModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User>();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');

    if (!storedUser) {
      setOpenModal(true);
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setLoggedInUser(parsedUser);
  }, []);

  const filteredTodos = loggedInUser
    ? todos.data.filter((todo) => todo.userId === loggedInUser.userId)
    : [];

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSelectBox = (value: string) => {
    const parsedValue = Number(value);
    setTodosPerPage(parsedValue);
    setCurrentPage(1);
  };

  return (
    <>
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
          <div className="w-min">
            <SelectBox
              placeholder="Amount of todos"
              onValueChange={(value) => handleSelectBox(value)}
            >
              {[...Array(16)]
                .map((_, index) => index + 5)
                .map((number) => (
                  <SelectBoxItem key={number} value={`${number}`} />
                ))}
            </SelectBox>
          </div>
          <Badge color="orange">
            Current page:
            <span className="ml-1 font-bold">
              {currentPage}
            </span>
          </Badge>
        </div>
        <Table className="mt-2">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="p-2">Completed</TableHeaderCell>
              <TableHeaderCell className="p-2">Title</TableHeaderCell>
              <TableHeaderCell className="p-2">Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.status === 'loading' && (
              <TableRow>
                {[1, 2, 3].map((number) => (
                  <TableCell key={number}>
                    <Text>Loading...</Text>
                  </TableCell>
                ))}
              </TableRow>
            )}
            {todos.status === 'succeeded'
            && (
              currentTodos.length > 0
                ? currentTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))
                : <Text color="slate" className="py-2 font-medium text-lg">You don&apos;t have any todos</Text>
            )}
            {todos.status === 'failed'
            && (
              <Text className="text-lg">
                There was an error loading your data. Please, try again later!
              </Text>
            )}
          </TableBody>
        </Table>
      </Card>
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={filteredTodos.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <Modal>
        {openModal && <RedirectToLoginModal />}
      </Modal>
    </>
  );
}
