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

import { useState } from 'react';
import { useAppSelector } from '@/hooks/store';
import useTodosServices from '@/hooks/useTodosServices';
import TodoItem from './TodoItem';
import Pagination from './Pagination';

export default function ListOfTodos() {
  useTodosServices();
  const todos = useAppSelector((state) => state.todos);

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.data.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSelectBox = (value: string) => {
    const parsedValue = Number(value);
    setTodosPerPage(parsedValue);
  };

  return (
    <>
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <div className="w-min">
            <SelectBox
              placeholder="Amount of todos to show"
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
              currentTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
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
        totalTodos={todos.data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
