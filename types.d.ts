type TodoId = number;

interface Todo {
  userId: number,
  title: string,
  completed: boolean
}

interface TodoWithId extends Todo {
  id: TodoId
}

interface TodosState {
  data: TodoWithId[];
  status: string;
  error: null | string;
}
