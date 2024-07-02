import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { RiVideoFill } from 'react-icons/ri';
import { IoBook } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', icon: GoHomeFill, href: '/' },
  { name: 'Anime', icon: RiVideoFill, href: '/anime' },
  { name: 'Manga', icon: IoBook, href: '/manga' },
];

export default function Sidebar() {
  return (
    <div className="h-full px-2 py-2 overflow-y-auto bg-background shadow-md">
      <ul className="space-y-2 font-medium">
        {menuItems.map((item) => (
          <li>
            <Link
              to={item.href}
              className="flex flex-col items-center p-2 text-text rounded-md hover:bg-backgroundDark group"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
