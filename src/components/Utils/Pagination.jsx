import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-2xl text-primary">
      {page <= 1 ? null : (
        <button
          className="transition-all hover:text-accent"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          className="transition-all hover:text-accent"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
