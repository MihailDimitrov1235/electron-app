/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IoMdClose } from 'react-icons/io';
import React, { useState } from 'react';
import Popover from '@Components/Popover';
import Tabs from '@Components/Tabs';
import ProfileTab from './ProfileTab';
import StyleTab from './StyleTab';

const settingTabs = ['Profile', 'Style', 'Anime', 'Manga'];

export default function Settings({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [openTab, setOpenTab] = useState(settingTabs[0]);
  return (
    <Popover open={open} setOpen={setOpen}>
      <div className="w-[80rem]">
        <div className="flex items-center justify-between p-4 border-b border-devider">
          <h3 className="text-xl font-semibold text-text-main ">Settings</h3>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-text-main hover:bg-background-light rounded-md text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="p-4 flex gap-4">
          <Tabs
            tabs={settingTabs}
            openTab={openTab}
            setOpenTab={setOpenTab}
            col
          />
          <div
            className={`w-full h-full ${
              openTab === 'Profile' ? 'block' : 'hidden'
            }`}
          >
            <ProfileTab />
          </div>
          <div
            className={`w-full h-full ${
              openTab === 'Style' ? 'block' : 'hidden'
            }`}
          >
            <StyleTab />
          </div>
        </div>
      </div>
    </Popover>
  );
}
