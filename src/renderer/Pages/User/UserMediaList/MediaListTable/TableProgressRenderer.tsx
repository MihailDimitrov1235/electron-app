import { MediaType } from '@graphql/generated/types-and-hooks';
import { TableCellProps } from 'react-virtualized';

export default function TableProgressRenderer({ rowData }: TableCellProps) {
  if (!rowData) {
    return <div>{null}</div>;
  }
  return (
    <div className="flex justify-center">
      {`${rowData?.progress} / ${
        rowData?.mediaType === MediaType.Anime
          ? rowData?.episodes || '~'
          : rowData?.chapters || '~'
      }`}
    </div>
  );
}
