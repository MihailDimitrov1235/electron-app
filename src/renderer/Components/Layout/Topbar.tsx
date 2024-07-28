import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import { IoLogIn, IoSearchSharp } from 'react-icons/io5';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useAuth } from '../Contexts/AuthContext';
import Button from '../Button';
import TextField from '../TextField';

export default function Topbar() {
  const { isLoggedIn, userAvatar } = useAuth();
  const [search, setSearch] = useState('');
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const location = useLocation();

  const updateNavigationState = async () => {
    setCanGoBack(await window.electronAPI.canGoBack());
    setCanGoForward(await window.electronAPI.canGoForward());
  };

  useEffect(() => {
    updateNavigationState();
  }, [location]); // This will run every time the location changes

  const handleGoBack = () => {
    window.electronAPI.goBack();
  };

  const handleGoForward = () => {
    window.electronAPI.goForward();
  };
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div className="w-full bg-background-main p-2 flex justify-between relative items-center">
      <Link
        to="/"
        className="flex items-center justify-center text-text-main P-2"
      >
        SOME-LOGO
      </Link>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-fit ">
        <div className="relative w-fit flex">
          <div className="flex mr-2 gap-[2px]">
            <Button
              onClick={handleGoBack}
              disabled={!canGoBack}
              variant="icon-square"
              Icon={FaAngleLeft}
              className=" !rounded-r-none"
            />
            <Button
              onClick={handleGoForward}
              disabled={!canGoForward}
              variant="icon-square"
              Icon={FaAngleRight}
              className=" !rounded-l-none"
            />
          </div>
          <TextField
            className="w-[25vw] rounded-r-none"
            title="Search"
            value={search}
            onChange={onSearchChange}
          />
          <Button
            variant="icon-square"
            className="!rounded-l-none !rounded-r-md border-l-0 text-2xl px-2"
            Icon={IoSearchSharp}
          />
        </div>
      </div>
      <div className="flex gap-2">
        {isLoggedIn ? (
          <>
            <Button variant="icon" Icon={IoIosNotifications} />
            <Button
              variant="icon"
              className=""
              style={{
                backgroundImage: `url("${userAvatar}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </>
        ) : (
          <Link to="/login">
            <Button variant="icon" Icon={IoLogIn} onClick={() => {}} />
          </Link>
        )}
      </div>
    </div>
  );
}
