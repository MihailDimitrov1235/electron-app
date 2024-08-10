/* eslint-disable react/require-default-props */
import Button from '../Form/Button';

type TabsPropType = {
  tabs: string[];
  openTab: string;
  setOpenTab: (newValue: string) => void;
  col: boolean;
  small?: boolean;
  capitalize?: boolean;
};
export default function Tabs({
  tabs,
  openTab,
  setOpenTab,
  col,
  small = false,
  capitalize = false,
}: TabsPropType) {
  return (
    <div
      className={`${
        col
          ? `flex-col ${small && 'border-r border-text-light/50'}`
          : `flex-row ${small && 'border-b border-text-light/50'}`
      } flex flex-wrap  ${!small && 'gap-4'} `}
    >
      {tabs.map((tab, index) => (
        <div key={tab} className={`flex text-center `}>
          {small ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(tabs[index]);
              }}
              className={` p-2 w-full text-start transition-colors ${
                capitalize && 'capitalize'
              } ${
                openTab === tabs[index]
                  ? `text-primary ${
                      col
                        ? 'border-r-2 border-r-primary'
                        : 'border-b-2 border-b-primary'
                    } `
                  : `text-text-light hover:text-text-main ${
                      col
                        ? 'border-r-2 border-r-transparent hover:border-r-text-main'
                        : 'border-b-2 border-b-transparent hover:border-b-text-main'
                    } `
              } `}
            >
              {capitalize ? tab.toLowerCase() : tab}
            </button>
          ) : (
            <Button
              variant={openTab === tabs[index] ? 'gradient' : 'default'}
              className={`w-full ${capitalize && 'capitalize'}`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(tabs[index]);
              }}
              uppercase={!capitalize}
            >
              {capitalize ? tab.toLowerCase() : tab}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}
