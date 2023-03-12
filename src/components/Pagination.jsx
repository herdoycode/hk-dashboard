import _ from "lodash";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onChange,
  onNext,
  onPrev,
}) => {
  const pageCount = itemsCount / pageSize;
  const pages = _.range(1, pageCount + 1);

  if (itemsCount <= pageSize) return null;

  return (
    <div className="pagination">
      <ul className="paginate">
        <button
          disabled={currentPage <= 1 ? true : false}
          onClick={onPrev}
          className="page__item page__prev"
        >
          <a className="page__link" href="#">
            Prev
          </a>
        </button>
        {pages.map((page) => (
          <li
            onClick={() => onChange(page)}
            key={page}
            className={
              currentPage === page ? "page__item active" : "page__item"
            }
          >
            <a className="page__link" href="#">
              {page}
            </a>
          </li>
        ))}
        <button
          onClick={onNext}
          className="page__item page__next"
          disabled={currentPage === pages.length}
        >
          <a className="page__link" href="#">
            Next
          </a>
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
