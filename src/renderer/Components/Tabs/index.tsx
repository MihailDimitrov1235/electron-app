import { Dispatch, SetStateAction } from 'react';
import Button from '../Button';

type TabsPropType = {
  tabs: string[];
  openTab: number;
  setOpenTab: Dispatch<SetStateAction<number>>;
  col: boolean;
};
export default function Tabs({ tabs, openTab, setOpenTab, col }: TabsPropType) {
  return (
    <ul
      className={`${
        col ? 'flex-col' : 'flex-row'
      } flex list-none flex-wrap w-fit gap-4 `}
    >
      {tabs.map((tab, index) => (
        <li key={tab} className=" flex-auto text-center w-full">
          <Button
            variant={openTab === index ? 'gradient' : 'default'}
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(index);
            }}
          >
            {tab}
          </Button>
        </li>
      ))}
    </ul>
  );
}
