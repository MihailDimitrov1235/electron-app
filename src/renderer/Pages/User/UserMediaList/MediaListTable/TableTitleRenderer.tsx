import { Link } from 'react-router-dom';
import { TableCellProps } from 'react-virtualized';

export default function TableTitleRenderer({ rowData }: TableCellProps) {
  if (!rowData) {
    return <div>{null}</div>;
  }
  return (
    <Link
      to={`/${rowData.mediaType}/${rowData.mediaId}`}
      className="hover:text-primary"
    >
      <span>{rowData.title}</span>
    </Link>
  );
}
