import {
  MediaListCollectionFragment,
  MediaType,
  useGetUserQuery,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import { SiAuth0 } from 'react-icons/si';
import { CgBlock } from 'react-icons/cg';
import { FaUserCheck } from 'react-icons/fa';
import { useAuth } from '@Components/Contexts/AuthContext';
import { useParams } from 'react-router-dom';
import Tooltip from '@Components/Tooltip';
import Button from '@Components/Form/Button';
import Tabs from '@Components/Tabs';
import { useEffect, useState } from 'react';
import UserOverview from './UserOverview';
import UserMediaList from './UserMediaList';
import UserFavourites from './UserFavourites';

const userTabs = [
  'Overview',
  'Anime List',
  'Manga List',
  'Favorites',
  'Stats',
  'Social',
  'Reviews',
];

export default function Users() {
  const { id } = useParams();
  const [openTab, setOpenTab] = useState(userTabs[0]);
  const itemsPerPage = {
    activities: 25,
    favourites: 25,
  };
  const { data, loading, error } = useGetUserQuery({
    variables: {
      userId: Number(id),
      activitiesPerPage: itemsPerPage.activities,
      favouritesPerPage: itemsPerPage.favourites,
    },
  });
  const { userId, isLoggedIn } = useAuth();
  useEffect(() => {
    if (error) {
      enqueueSnackbar({ variant: 'error', message: error.message });
    }
  }, [error]);
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="relative">
      {data?.User?.bannerImage ? (
        <div className="bg-background-dark/50 h-[300px] w-full absolute z-10" />
      ) : (
        <div className="bg-gradient-to-b from-primary/50 to-background-dark h-[300px] w-full absolute" />
      )}

      <div
        className="bg-gradient-to-b h-[300px] w-full bg-cover absolute"
        style={{ backgroundImage: `url(${data?.User?.bannerImage})` }}
      />
      <div className="px-8 relative z-10 flex flex-col gap-4">
        <div className="h-[300px] pt-8 w-full flex items-end gap-8 relative">
          <img
            className=" rounded-md max-w-64 max-h-full"
            src={data?.User?.avatar?.large || ''}
            alt="Avatar"
          />
          <div className="mb-2 w-full flex justify-between">
            <div className="flex gap-4 items-center">
              <span className="text-3xl font-bold">{data?.User?.name}</span>
              {isLoggedIn && userId === Number(id) && (
                <Tooltip center text="Your Profile">
                  <SiAuth0 />
                </Tooltip>
              )}
              {data?.User?.isBlocked && (
                <Tooltip center text="Blocked">
                  <CgBlock />
                </Tooltip>
              )}
              {data?.User?.isFollower && (
                <Tooltip center text="Following You">
                  <FaUserCheck size={20} />
                </Tooltip>
              )}
            </div>

            {!isLoggedIn && (
              <div className="flex gap-4">
                <Button className="bg-blue-500 text-white text-sm !py-1 !px-2">
                  {data?.User?.isFollowing ? 'Unfollow' : 'Follow'}
                </Button>
                <Button className="bg-red-500 text-white text-sm !py-1 !px-2">
                  Block
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <Tabs
            tabs={userTabs}
            openTab={openTab}
            setOpenTab={setOpenTab}
            col={false}
          />
        </div>
        {(() => {
          switch (openTab) {
            case userTabs[0]:
              return (
                <UserOverview
                  userId={Number(id)}
                  data={{
                    overview: data?.Overview,
                    activities: data?.Activities,
                  }}
                  activitiesPerPage={itemsPerPage.activities}
                />
              );
            case userTabs[1]:
              return (
                <UserMediaList
                  userId={Number(id)}
                  mediaType={MediaType.Anime}
                  data={data?.animeLists as MediaListCollectionFragment}
                />
              );
            case userTabs[2]:
              return (
                <UserMediaList
                  userId={Number(id)}
                  mediaType={MediaType.Manga}
                  data={data?.mangaLists as MediaListCollectionFragment}
                />
              );
            case userTabs[3]:
              return (
                <UserFavourites
                  data={data?.User?.favourites}
                  userId={Number(id)}
                  favouritesPerPage={itemsPerPage.favourites}
                />
              );
            default:
              return <div>Unknown component type</div>;
          }
        })()}
      </div>
    </div>
  );
}
