import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

import { useAppSelector } from '@/hooks/store';
import TodoItem from './TodoItem';

export default function ListOfTodos() {
  const todos = useAppSelector((state) => state.todos);

  return (
    <Card className="p-4 shadow-md">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className="p-2">Completed</TableHeaderCell>
            <TableHeaderCell className="p-2">Title</TableHeaderCell>
            <TableHeaderCell className="p-2">Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
