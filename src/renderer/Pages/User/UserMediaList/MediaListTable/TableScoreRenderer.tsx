import { TableCellProps } from 'react-virtualized';

export default function TableScoreRenderer({ rowData }: TableCellProps) {
  if (!rowData) {
    return <div>{null}</div>;
  }
  return (
    <div className="flex justify-center">
      {rowData.score && rowData.score !== 0 ? (
        <div className="w-32 p-2 text-center">{rowData.score / 10}</div>
      ) : (
        '~'
      )}
    </div>
  );
}
