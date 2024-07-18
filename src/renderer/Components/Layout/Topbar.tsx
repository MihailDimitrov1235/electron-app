import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import { IoLogIn, IoSearchSharp } from 'react-icons/io5';
import { useAuth } from '../Contexts/AuthContext';
import Button from '../Button';
import TextField from '../TextField';

export default function Topbar() {
  const { isLoggedIn } = useAuth();
  const [search, setSearch] = useState('');
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div className="w-full bg-background-main p-2 flex justify-between relative items-center pl-16">
      <Link
        to="/"
        className="flex items-center justify-center text-text-main P-2"
      >
        SOME-LOGO
      </Link>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex ">
        <div className="relative w-full h-full flex">
          <TextField
            className="w-[20vw] rounded-r-none"
            title="Search"
            value={search}
            onChange={onSearchChange}
          />
          <Button
            variant="icon"
            className="!rounded-l-none !rounded-r-md border-l-0 text-2xl "
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
                backgroundImage: `url("https://thicc-af.mywaifulist.moe/waifus/529/0d27a9349dc47118e62557db533e6cbe48f9bac289b656c921374566ef0f5496_thumb.jpg")`,
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
