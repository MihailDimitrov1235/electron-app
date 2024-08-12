/* eslint-disable react/destructuring-assignment */
import { useEffect, useRef } from 'react';
import {
  WindowScroller,
  AutoSizer,
  Column,
  Table,
  TableHeaderRowProps,
} from 'react-virtualized';
import {
  GetUserMediaListQuery,
  MediaListEntryFragment,
  MediaListSort,
} from '@graphql/generated/types-and-hooks';
import { type MediaListEntryMediaType } from '@Pages/Media/MediaDetails/MediaListEntryPopover';
import 'react-virtualized/styles.css';
import TableImageRenderer from './TableImageRenderer';
import SortableColumn from './SortableColumn';
import TableTitleRenderer from './TableTitleRenderer';
import TableNotesRenderer from './TableNotesRenderer';
import TableScoreRenderer from './TableScoreRenderer';
import TableProgressRenderer from './TableProgressRenderer';
import TableEditRenderer from './TableEditRenderer';

const ROW_HEIGHT = 112;

export default function MediaListTable({
  list,
  onSort,
  currentSort,
  isUser,
  handleEdit,
  selectedList,
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
  selectedList: string;
}) {
  const filteredList =
    list?.entries?.filter((entry) => entry && entry.media) || [];

  const rowRenderer = ({ index }: { index: number }) => {
    const entry = filteredList[index] || null;
    if (entry) {
      return {
        mediaId: entry.media?.id,
        mediaType: entry.media?.type,
        image: entry.media?.coverImage?.large,
        title: entry.media?.title?.userPreferred,
        notes: entry.notes,
        score: entry.score,
        progress: entry.progress,
        episodes: entry.media?.episodes,
        chapters: entry.media?.chapters,
        volumes: entry.media?.volumes,
        onSort,
        currentSort,
        onEditClick: () =>
          handleEdit(entry, {
            id: entry.media?.id || 0,
            type: entry.media?.type,
            image: entry.media?.coverImage?.large,
            title: entry.media?.title?.userPreferred,
            episodes: entry.media?.episodes,
            chapters: entry.media?.chapters,
            volumes: entry.media?.volumes,
          }),
      };
    }
    return {};
  };

  const headerRowRenderer = ({
    className,
    columns,
    style,
  }: TableHeaderRowProps) => (
    <div className={`bg-background-main ${className}`} style={style}>
      {columns}
    </div>
  );
  const windowScrollerRef = useRef<WindowScroller>(null);
  useEffect(() => {
    if (windowScrollerRef.current) {
      windowScrollerRef.current.updatePosition();
    }
  }, [selectedList]);

  return (
    <div className="flex-1 border border-background-main shadow-md rounded-md overflow-hidden h-full">
      {filteredList && (
        <WindowScroller
          ref={windowScrollerRef}
          scrollElement={
            document.getElementById('MainLayoutContainer') || undefined
          }
        >
          {({ isScrolling, onChildScroll, scrollTop }) => (
            <AutoSizer disableHeight>
              {({ width }) => (
                <Table
                  autoHeight
                  height={ROW_HEIGHT * 7}
                  headerHeight={40}
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  rowCount={filteredList.length}
                  rowGetter={rowRenderer}
                  rowHeight={ROW_HEIGHT}
                  scrollTop={scrollTop}
                  width={width}
                  rowClassName={(info) =>
                    `${
                      info.index % 2 === 1
                        ? 'bg-background-main/50'
                        : 'bg-background-dark'
                    }`
                  }
                  headerRowRenderer={headerRowRenderer}
                >
                  <Column
                    dataKey="image"
                    width={66}
                    cellRenderer={TableImageRenderer}
                  />
                  <Column
                    label="Title"
                    dataKey="title"
                    width={isUser ? width - 128 * 4 - 80 : width - 128 * 3 - 80}
                    cellRenderer={TableTitleRenderer}
                  />
                  <Column
                    dataKey="notes"
                    width={128}
                    cellRenderer={TableNotesRenderer}
                  />
                  <Column
                    label={
                      <SortableColumn
                        title="Score"
                        ascending={MediaListSort.Score}
                        descending={MediaListSort.ScoreDesc}
                        onSort={onSort}
                        currentSort={currentSort}
                      />
                    }
                    dataKey="score"
                    width={128}
                    cellRenderer={TableScoreRenderer}
                    headerClassName="flex justify-center"
                  />
                  <Column
                    label={
                      <SortableColumn
                        title="Progress"
                        ascending={MediaListSort.Progress}
                        descending={MediaListSort.ProgressDesc}
                        onSort={onSort}
                        currentSort={currentSort}
                      />
                    }
                    dataKey="progress"
                    width={128}
                    cellRenderer={TableProgressRenderer}
                    headerClassName="flex justify-center"
                  />
                  {isUser && (
                    <Column
                      dataKey="edit"
                      width={128}
                      cellRenderer={TableEditRenderer}
                    />
                  )}
                </Table>
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      )}
    </div>
  );
}
