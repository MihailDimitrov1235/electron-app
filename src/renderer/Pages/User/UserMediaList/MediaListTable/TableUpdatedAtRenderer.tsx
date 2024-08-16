import getTimePassed from '@Utils/getTimePassed';
import { TableCellProps } from 'react-virtualized';

export default function TableUpdatedAtRenderer({ rowData }: TableCellProps) {
  if (!rowData) {
    return <div>{null}</div>;
  }
  return (
    <div className="flex justify-center w-full text-sm">
      {rowData.updatedAt ? getTimePassed(rowData.updatedAt) : '~'}
    </div>
  );
}
