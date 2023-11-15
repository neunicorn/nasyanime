const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setPage((state) => state + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((state) => state - 1);
    scrollTop();
  };
  return (
    <div className="flex justify-center items-center px-4 pt-2 gap-6">
      {page === 1 ? (
        <button className="btn-disabled" disabled>
          Prev
        </button>
      ) : (
        <button className="btn-card" onClick={handlePrevPage}>
          Prev
        </button>
      )}
      <span className="block py-[6px] px-4 bg-slate-200 text-slate-600 rounded font-medium">
        {page} of {lastPage}
      </span>
      {page === lastPage ? (
        <button className="btn-disabled" disabled>
          Next
        </button>
      ) : (
        <button className="btn-card" onClick={handleNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
