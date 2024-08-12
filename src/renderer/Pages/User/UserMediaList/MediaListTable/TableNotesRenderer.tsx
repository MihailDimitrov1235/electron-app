import Tooltip from '@Components/Tooltip';
import { PiNotepadBold } from 'react-icons/pi';
import { TableCellProps } from 'react-virtualized';

export default function TableNotesRenderer({ rowData }: TableCellProps) {
  if (!rowData) {
    return <div>{null}</div>;
  }
  return (
    <div className="flex justify-center">
      {rowData.notes && (
        <Tooltip text={rowData.notes}>
          <PiNotepadBold size={24} />
        </Tooltip>
      )}
    </div>
  );
}
