import { FaEdit } from 'react-icons/fa';
import { TableCellProps } from 'react-virtualized';

export default function TableEditRenderer({ rowData }: TableCellProps) {
  if (!rowData) {
    return <div>{null}</div>;
  }
  return (
    <div className="w-full text-center">
      <button
        type="button"
        onClick={rowData.onEditClick}
        className="hover:text-text-light"
      >
        <FaEdit size={24} />
      </button>
    </div>
  );
}
