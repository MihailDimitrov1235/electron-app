import React, { useState } from 'react';
import Tabs from '@Components/Tabs';
import { GetUserQuery } from '@graphql/generated/types-and-hooks';
import CharacterFavourites from './CharacterFavourites';
import StaffFavourites from './StaffFavourites';
import StudioFavourites from './StudioFavourites';
import AnimeFavourites from './AnimeFavourites';
import MangaFavourites from './MangaFavourites';

export default function UserFavourites({
  data,
  userId,
  favouritesPerPage,
  isUser,
}: {
  data: NonNullable<GetUserQuery['User']>['favourites'];
  userId: number;
  favouritesPerPage: number;
  isUser: boolean;
}) {
  const tabs = ['Anime', 'Manga', 'Characters', 'Staff', 'Studios'];
  const [openTab, setOpenTab] = useState(tabs[0]);
  return (
    <div className="flex gap-8">
      <div className="h-fit">
        <Tabs openTab={openTab} setOpenTab={setOpenTab} tabs={tabs} col small />
      </div>
      {(() => {
        switch (openTab) {
          case tabs[0]:
            return data?.anime ? (
              <AnimeFavourites
                data={data?.anime}
                userId={userId}
                perPage={favouritesPerPage}
                isUser={isUser}
              />
            ) : null;
          case tabs[1]:
            return data?.manga ? (
              <MangaFavourites
                data={data?.manga}
                userId={userId}
                perPage={favouritesPerPage}
                isUser={isUser}
              />
            ) : null;
          case tabs[2]:
            return data?.characters ? (
              <CharacterFavourites
                data={data?.characters}
                userId={userId}
                perPage={favouritesPerPage}
                isUser={isUser}
              />
            ) : null;
          case tabs[3]:
            return data?.staff ? (
              <StaffFavourites
                data={data?.staff}
                userId={userId}
                perPage={favouritesPerPage}
                isUser={isUser}
              />
            ) : null;
          case tabs[4]:
            return data?.studios ? (
              <StudioFavourites
                data={data?.studios}
                userId={userId}
                perPage={favouritesPerPage}
                isUser={isUser}
              />
            ) : null;
          default:
            return <div>Unknown component type</div>;
        }
      })()}
    </div>
  );
}
