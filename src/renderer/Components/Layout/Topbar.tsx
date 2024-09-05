import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import { IoLogIn, IoReloadOutline } from 'react-icons/io5';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useAuth } from '../Contexts/AuthContext';
import Button from '../Form/Button';
import TextField from '../Form/TextField';

export default function Topbar() {
  const navigate = useNavigate();
  const { isLoggedIn, userAvatar, userId } = useAuth();
  const [search, setSearch] = useState('');
  const [openSearchOptions, setOpenSearchOptions] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const location = useLocation();

  const updateNavigationState = async () => {
    setCanGoBack(await window.electronAPI.canGoBack());
    setCanGoForward(await window.electronAPI.canGoForward());
  };

  useEffect(() => {
    updateNavigationState();
  }, [location]);

  const handleGoBack = () => {
    window.electronAPI.goBack();
  };

  const handleGoForward = () => {
    window.electronAPI.goForward();
  };

  const handleReload = () => {
    window.electronAPI.reload();
  };
  const onSearchChange = (newValue: string) => {
    setSearch(newValue);
  };

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setOpenSearchOptions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50 w-full bg-background-main p-2 flex justify-between items-center">
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
              className=" !rounded-x-none"
            />
            <Button
              onClick={handleReload}
              variant="icon-square"
              Icon={IoReloadOutline}
              className=" !rounded-l-none"
            />
          </div>
          <TextField
            className="w-[25vw]"
            title="Search"
            value={search}
            onChange={onSearchChange}
            onFocus={() => setOpenSearchOptions(true)}
            // onBlur={() => setOpenSearchOptions(false)}
          />
          <div
            ref={searchRef}
            className={`absolute right-0 top-12 flex flex-col w-[212px] ${
              openSearchOptions && search.length > 0 ? 'visible' : 'hidden'
            }`}
          >
            {['Anime', 'Manga', 'Users', 'Characters', 'staff'].map(
              (searchOption) => (
                <button
                  key={searchOption}
                  className="text-start first:rounded-t-md last:rounded-b-md border border-transparent border-b-devider/50 bg-background-main hover:border-text-main p-2"
                  type="button"
                  onClick={() =>
                    navigate(
                      `/search/${searchOption.toLowerCase()}?search=${search}`,
                    )
                  }
                >
                  Search in {searchOption}
                </button>
              ),
            )}
          </div>
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
              onClick={() => navigate(`/user/${userId}`)}
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
