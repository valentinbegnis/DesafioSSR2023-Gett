const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = async () => {
  const res = await fetch(baseUrl);
  return res.json();
};

export default getTodos;
