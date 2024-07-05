import React, { useState } from 'react';
import { GoHomeFill } from 'react-icons/go';
import { RiVideoFill } from 'react-icons/ri';
import { IoBook } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Settings from './Settings';

const menuItems = [
  { name: 'Home', icon: GoHomeFill, href: '/' },
  { name: 'Anime', icon: RiVideoFill, href: '/anime' },
  { name: 'Manga', icon: IoBook, href: '/manga' },
];

export default function Sidebar() {
  const [openSettings, setOpenSettings] = useState(false);
  return (
    <div className="h-full px-2 py-2 bg-background-main shadow-md flex flex-col justify-between">
      <ul className="space-y-2 font-medium">
        {menuItems.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <Link
              to={item.href}
              className="flex flex-col items-center p-2 text-text-main rounded-md hover:bg-background-dark group"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-2 font-medium">
        <li>
          <button
            type="button"
            className="w-full flex flex-col items-center p-2 text-text-main rounded-md hover:bg-background-dark group"
          >
            {/* <item.icon className="w-6 h-6" /> */}
            <span className="text-xs">Profile</span>
          </button>
        </li>
        <li>
          <button
            data-modal-target="settings"
            data-modal-toggle="settings"
            type="button"
            onClick={() => setOpenSettings(true)}
            className=" w-full flex flex-col items-center p-2 text-text-main rounded-md hover:bg-background-dark group"
          >
            {/* <item.icon className="w-6 h-6" /> */}
            <span className="text-xs">Settings</span>
          </button>
        </li>
      </ul>
      <Settings open={openSettings} setOpen={setOpenSettings} />
    </div>
  );
}
