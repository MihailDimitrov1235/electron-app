/* eslint-disable react/no-array-index-key */
import React from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';

type PaginationPropsType = {
  pages: number;
  hasNextPage: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
  pages,
  hasNextPage,
  currentPage,
  setCurrentPage,
}: PaginationPropsType) {
  return (
    <ul className="flex items-center -space-x-px h-8 shadow-md w-fit">
      <li>
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center px-3 h-8 ${
            currentPage === 1
              ? 'text-text-light'
              : 'text-text-main hover:text-primary'
          } bg-background-dark border border-r-0 border-background-main rounded-l-md`}
        >
          <MdOutlineNavigateBefore />
        </button>
      </li>

      {pages > 0 &&
        Array(Math.min(pages, 5))
          .fill(1)
          .map((_, index) => {
            let pageNumber = index;
            if (currentPage - 2 > 0 && currentPage + 2 <= pages) {
              pageNumber = currentPage - 2 + index;
            } else if (currentPage - 2 > 0) {
              pageNumber = pages - 4 + index;
            } else {
              pageNumber = index + 1;
            }
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(pageNumber)}
                type="button"
                className={`flex items-center justify-center px-3 h-8 ${
                  currentPage === pageNumber
                    ? 'text-text-main'
                    : 'text-text-light'
                } bg-background-dark border border-background-main hover:text-primary`}
              >
                {pageNumber}
              </button>
            );
          })}

      <li>
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={!hasNextPage}
          className={`flex items-center justify-center px-3 h-8 ${
            !hasNextPage
              ? 'text-text-light'
              : 'text-text-main hover:text-primary'
          } bg-background-dark border border-background-main rounded-r-md `}
        >
          <MdOutlineNavigateNext />
        </button>
      </li>
    </ul>
  );
}
