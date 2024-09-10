/* eslint-disable react/no-danger */
import { UserFragment } from '@graphql/generated/types-and-hooks';
import { Link } from 'react-router-dom';

type UserType = UserFragment;

export default function UserCard({ data }: { data: UserType }) {
  const url = `/user/${data?.id}`;
  return (
    <div className="flex flex-col gap-2 rounded-md shadow-md border border-background-main overflow-hidden w-full relative">
      {data.bannerImage ? (
        <div className="w-full h-16 overflow-hidden absolute z-0">
          <div className="h-16 w-full bg-gradient-to-b from-transparent to-background-dark absolute z-20" />
          <img
            className=" w-full blur-sm relative z-10"
            src={data.bannerImage}
            alt="banner"
          />
        </div>
      ) : (
        <div className="w-full h-16 overflow-hidden absolute z-0 bg-gradient-to-b from-primary to-background-dark" />
      )}
      <Link
        to={url}
        className="relative z-10 mt-6 mx-auto w-16 aspect-square overflow-hidden rounded-md bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.avatar?.medium})` }}
      />
      <div className="flex flex-col gap-1 w-full overflow-hidden py-1 text-center">
        <Link
          to={url}
          className="hover:text-primary line-clamp-2 h-12 overflow-hidden text-ellipsis"
        >
          {data?.name}
        </Link>
      </div>
    </div>
  );
}
