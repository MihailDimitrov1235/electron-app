import React from 'react';
import { MediaListSort } from '@graphql/generated/types-and-hooks';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function SortableColumn({
  title,
  Option1,
  Option2,
  currentSort,
  onSort,
}: {
  title: string;
  Option1: MediaListSort;
  Option2: MediaListSort;
  currentSort: MediaListSort;
  onSort: (newSort: MediaListSort) => void;
}) {
  return (
    <button
      type="button"
      className="flex group items-center gap-2 mx-auto"
      onClick={() => onSort(currentSort === Option1 ? Option2 : Option1)}
    >
      {title}
      <span
        className={`${
          currentSort === Option1 || currentSort === Option2
            ? 'text-text-main'
            : 'text-transparent group-hover:text-text-light'
        }`}
      >
        {currentSort === Option2 ? <FaArrowUp /> : <FaArrowDown />}
      </span>
    </button>
  );
}
