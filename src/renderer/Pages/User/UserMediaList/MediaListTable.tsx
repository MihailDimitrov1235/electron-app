import React from 'react';
import Tooltip from '@Components/Tooltip';
import { Link } from 'react-router-dom';
import { PiNotepadBold } from 'react-icons/pi';
import { FaEdit } from 'react-icons/fa';
import {
  GetUserMediaListQuery,
  MediaListEntryFragment,
  MediaListSort,
  MediaType,
} from '@graphql/generated/types-and-hooks';
import { type MediaListEntryMediaType } from '@Pages/Media/MediaDetails/MediaListEntryPopover';
import SortableColumn from './SortableColumn';

export default function MediaListTable({
  list,
  onSort,
  currentSort,
  isUser,
  handleEdit,
}: {
  list: NonNullable<
    NonNullable<GetUserMediaListQuery['MediaListCollection']>['lists']
  >[number];
  onSort: (newValue: MediaListSort) => void;
  currentSort: MediaListSort;
  isUser: boolean;
  handleEdit: (
    entry: MediaListEntryFragment,
    media: MediaListEntryMediaType,
  ) => void;
}) {
  return (
    <div className="flex-1 h-fit border border-background-main shadow-md rounded-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-background-main ">
          <tr>
            <td />
            <td className="py-2 font-semibold">Title</td>
            {/* <td>Status</td> */}
            <td />
            <td className="py-2 font-semibold text-center">
              <SortableColumn
                title="Score"
                Option1={MediaListSort.ScoreDesc}
                Option2={MediaListSort.Score}
                currentSort={currentSort}
                onSort={onSort}
              />
            </td>
            <td className="py-2 font-semibold text-center">
              <SortableColumn
                title="Progress"
                Option1={MediaListSort.ProgressDesc}
                Option2={MediaListSort.Progress}
                currentSort={currentSort}
                onSort={onSort}
              />
            </td>
            {isUser && <td />}
          </tr>
        </thead>
        <tbody>
          {list?.entries
            ?.filter((entry) => entry && entry.media)
            .map((entry) => (
              <tr key={entry?.id} className="even:bg-background-main/50">
                <td className="w-20 p-2">
                  <Link
                    to={`/${entry?.media?.type?.toLowerCase()}/${entry?.media
                      ?.id}`}
                  >
                    <img
                      className="h-24 w-16 rounded-md"
                      src={entry?.media?.coverImage?.medium || ''}
                      alt="media"
                    />
                  </Link>
                </td>
                <td className="w-fit p-2">
                  <Link
                    to={`/${entry}/${entry?.media?.id}`}
                    className="hover:text-primary"
                  >
                    {entry?.media?.title?.userPreferred}
                  </Link>
                </td>
                {/* <td className="w-fit p-2 capitalize">
                  {entry?.status?.toLowerCase()}
                </td> */}
                <td className="w-32 p-2 text-center">
                  {entry?.notes && (
                    <Tooltip text={entry.notes}>
                      <PiNotepadBold size={24} />
                    </Tooltip>
                  )}
                </td>
                <td className="w-32 p-2 text-center">
                  {entry?.score && entry.score !== 0 ? entry.score / 10 : '~'}
                </td>
                <td className="w-32 p-2 text-center">
                  {entry?.progress}/
                  {entry?.media?.type === MediaType.Anime
                    ? entry?.media?.episodes || '~'
                    : entry?.media?.chapters || '~'}
                </td>
                {isUser && entry && (
                  <td className="w-24 text-center">
                    <button
                      type="button"
                      onClick={() =>
                        handleEdit(entry, {
                          id: entry?.media?.id || 0,
                          type: entry?.media?.type,
                          image: entry?.media?.coverImage?.large,
                          title: entry?.media?.title?.userPreferred,
                          episodes: entry?.media?.episodes,
                          chapters: entry?.media?.chapters,
                          volumes: entry?.media?.volumes,
                        })
                      }
                    >
                      <FaEdit />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          {/* {loading &&
            Array.from({ length: 5 }).map(() => (
              <tr className="even:bg-background-main/50">
                <td className="w-20 p-2">
                  <ImageSkeleton width="16" height="24" className="w-16 h-24" />
                </td>
                <td className="w-fit p-2">
                  <TextSkeleton lines={1} className="w-96 h-4" />
                </td>
                <td className="w-32 p-2 text-center" />
                <td className="w-32 p-2 text-center">
                  <TextSkeleton lines={1} className="w-12 h-4 mx-auto" />
                </td>
                <td className="w-32 p-2">
                  <TextSkeleton lines={1} className="w-12 h-4 mx-auto" />
                </td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
}
