import { range } from '../utils';

interface PaginationProps {
  total: number;
  limit: number;
  currentPage: number;
  selectPage?: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { total, limit, currentPage, selectPage } = props;
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => {
        return (
          <li
            data-testid="page-container"
            key={page}
            onClick={() => {
              if (selectPage) {
                selectPage(page);
              }
            }}
            className={`page-item ${currentPage === page ? 'active' : ''}`}
          >
            <span className="page-link">{page}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
