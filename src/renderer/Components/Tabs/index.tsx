import { Dispatch, SetStateAction } from 'react';
import Button from '../Button';

type TabsPropType = {
  tabs: string[];
  openTab: string;
  setOpenTab: Dispatch<SetStateAction<string>>;
  col: boolean;
};
export default function Tabs({ tabs, openTab, setOpenTab, col }: TabsPropType) {
  return (
    <div
      className={`${col ? 'flex-col' : 'flex-row'} flex flex-wrap w-fit gap-4 `}
    >
      {tabs.map((tab, index) => (
        <div key={tab} className=" flex text-center">
          <Button
            variant={openTab === tabs[index] ? 'gradient' : 'default'}
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(tabs[index]);
            }}
          >
            {tab}
          </Button>
        </div>
      ))}
    </div>
  );
}
