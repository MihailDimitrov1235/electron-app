import Dropdown from '@Components/Form/Dropdown';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Search() {
  const searchOptions = [
    'Anime',
    'Manga',
    'Users',
    'Characters',
    'Staff',
    'Studios',
  ];
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Search</h1>
        <Dropdown
          options={searchOptions}
          onSelect={(option) => navigate(`/search/${option.toLowerCase()}`)}
          name={location.pathname.split('/')[2].toUpperCase()}
          buttonsClassName="!bg-background-dark hover:border-background-main w-48 shadow-none text-lg font-bold px-2"
          className="ml-4 "
        />
      </div>
      <Outlet />
    </div>
  );
}
