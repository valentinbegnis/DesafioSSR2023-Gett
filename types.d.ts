type TodoId = number;

interface Todo {
  userId: number,
  title: string,
  completed: boolean
}

interface TodoWithId extends Todo {
  id: TodoId
}
