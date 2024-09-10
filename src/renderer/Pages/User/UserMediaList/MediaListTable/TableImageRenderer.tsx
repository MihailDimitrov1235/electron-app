import { Link } from 'react-router-dom';
import { TableCellProps } from 'react-virtualized';

export default function TableImageRenderer({ rowData }: TableCellProps) {
  if (!rowData) {
    return <div>{null}</div>;
  }
  return (
    <Link to={`/${rowData.mediaType}/${rowData.mediaId}`}>
      <img
        className="h-24 w-16 my-2 rounded-md"
        src={rowData.image || ''}
        alt="media"
      />
    </Link>
  );
}
