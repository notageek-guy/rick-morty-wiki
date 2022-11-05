import React from "react";
import ReactPaginate from "react-paginate";
export default function Pagination({ pageCount, setPageCount, info }) {
  const pageHandle = ({ selected }) => {
    setPageCount(selected + 1);
  };
  return (
    <>
      
        <ReactPaginate
          pageCount={Math.ceil(info?.info?.pages)}
          nextLabel="Next"
          previousLabel="Prev"
          onPageChange={pageHandle}
          forcePage={pageCount === 1 ? 0 : pageCount - 1}
          previousClassName="btn btn-success prev text-sm sm:text-md"
          nextClassName="btn btn-success "
          activeClassName="active:bg-green-400"
          className="flex  justify-center gap-4 my-4 "
          pageClassName="hidden md:inline btn btn py-4 "
          pageRangeDisplayed={2}
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          previousLinkClassName='page-link'
          nextLinkClassName="page-link"
          containerClassName=''
          pageLinkClassName="page-link"
          breakLabel='...'
          breakClassName="hidden md:inline"
        />
    </>
  );
}
