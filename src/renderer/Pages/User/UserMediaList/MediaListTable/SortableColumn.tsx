/* eslint-disable react/require-default-props */
import React from 'react';
import { MediaListSort } from '@graphql/generated/types-and-hooks';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function SortableColumn({
  title,
  descending,
  ascending,
  currentSort,
  onSort,
  ascFirst = false,
}: {
  title: string;
  descending: MediaListSort;
  ascending: MediaListSort;
  currentSort: MediaListSort;
  onSort: (newSort: MediaListSort) => void;
  ascFirst?: boolean;
}) {
  return (
    <button
      type="button"
      className="flex group items-center gap-2 mx-auto"
      onClick={() => {
        if (
          currentSort === descending ||
          (currentSort !== ascending && ascFirst)
        ) {
          onSort(ascending);
          return;
        }
        onSort(descending);
      }}
    >
      {title}
      <span
        className={`${
          currentSort === ascending || currentSort === descending
            ? 'text-text-main'
            : 'text-transparent group-hover:text-text-light'
        }`}
      >
        {currentSort === ascending ||
        (currentSort !== descending && ascFirst) ? (
          <FaArrowUp />
        ) : (
          <FaArrowDown />
        )}
      </span>
    </button>
  );
}
