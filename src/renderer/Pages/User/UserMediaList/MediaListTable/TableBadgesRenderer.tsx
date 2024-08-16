import Tooltip from '@Components/Tooltip';
import { PiNotepadBold } from 'react-icons/pi';
import { TbRating18Plus } from 'react-icons/tb';
import { TableCellProps } from 'react-virtualized';

export default function TableBadgesRenderer({ rowData }: TableCellProps) {
  if (!rowData) {
    return <div>{null}</div>;
  }
  return (
    <div className="flex justify-center gap-2">
      {rowData.isAdult && (
        <Tooltip text="Adult content">
          <TbRating18Plus size={26} />
        </Tooltip>
      )}
      {rowData.notes && (
        <Tooltip text={rowData.notes}>
          <PiNotepadBold size={26} />
        </Tooltip>
      )}
    </div>
  );
}
