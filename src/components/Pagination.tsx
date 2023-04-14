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
    <nav>
      <ul className="flex flex-wrap justify-center gap-y-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              type="button"
              onClick={() => paginate(number)}
              className={`${number === currentPage ? 'bg-gray-200 font-medium pointer-events-none' : 'bg-white'} w-9 h-9 py-1 px-2 border hover:bg-gray-100`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
