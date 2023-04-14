interface Props {
  todosPerPage: number
  totalTodos: number
  currentPage: number
  paginate: (pageNumber: number) => void
}

export default function Pagination({
  todosPerPage, totalTodos, currentPage, paginate,
}: Props) {
  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex flex-wrap justify-center gap-y-2">
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            type="button"
            onClick={() => paginate(number)}
            className={`${number === currentPage ? 'bg-gray-200 font-medium pointer-events-none' : 'bg-white'} w-8 h-8 py-1 px-2 text-sm border hover:bg-gray-100`}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}
