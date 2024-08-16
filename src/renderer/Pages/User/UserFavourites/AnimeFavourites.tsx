/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
import MediaCardSkeleton from '@Components/Skeletons/MediaCardSkeleton';
import Tooltip from '@Components/Tooltip';
import {
  AnimeFavouritesFragment,
  useGetAnimeFavouritesQuery,
  useToggleFavouritesMutation,
} from '@graphql/generated/types-and-hooks';
import { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function AnimeFavourites({
  data,
  userId,
  perPage,
}: {
  data: AnimeFavouritesFragment;
  userId: number;
  perPage: number;
}) {
  const [toggleFavourites, { data: toggleFavouritesData }] =
    useToggleFavouritesMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState(data);
  const { data: fetchedData, loading } = useGetAnimeFavouritesQuery({
    variables: { userId, page: currentPage, favouritesPerPage: perPage },
    skip: currentPage === 1,
  });

  useEffect(() => {
    if (fetchedData?.User?.favourites?.anime?.nodes) {
      setDisplayData((prev) => ({
        pageInfo: {
          hasNextPage:
            fetchedData.User?.favourites?.anime?.pageInfo?.hasNextPage,
        },
        nodes: [
          ...(prev.nodes as []),
          ...(fetchedData.User?.favourites?.anime?.nodes as []),
        ],
      }));
    }
  }, [fetchedData]);
  useEffect(() => {
    if (toggleFavouritesData) {
      setDisplayData((prev) => {
        return {
          ...prev,
          nodes: toggleFavouritesData.ToggleFavourite?.anime?.nodes,
        };
      });
    }
  }, [toggleFavouritesData]);
  return (
    <div className="w-full flex flex-wrap gap-8">
      {displayData.nodes && displayData.nodes.length > 0 ? (
        displayData.nodes?.map((media) => (
          <Link
            key={media?.id}
            to={`/anime/${media?.id}`}
            className="w-[138px] h-[195px] rounded-md relative"
          >
            <Tooltip text={media?.title?.userPreferred || ''}>
              <img
                src={media?.coverImage?.large || ''}
                alt="Media"
                className="w-[138px] h-[195px] rounded-md z-10 relative "
              />
            </Tooltip>
            <button
              className="absolute top-1 right-1 rounded-md bg-red-500 aspect-square z-20 w-6"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                toggleFavourites({ variables: { animeId: media?.id } });
              }}
            >
              &#x2716;
            </button>
          </Link>
        ))
      ) : (
        <span className="w-full text-center text-2xl mt-16">
          {'NO DATA X('}
        </span>
      )}
      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <MediaCardSkeleton
            key={index}
            withEpisodes={false}
            withTitle={false}
          />
        ))}
      {displayData.pageInfo?.hasNextPage && !loading && (
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          type="button"
          className="h-[195px] w-[138px] border border-background-main rounded-md hover:bg-primary/50 transition-colors text-center flex flex-col gap-2 justify-center items-center"
        >
          <span className="text-lg">Load More</span>
          <CgDetailsMore size={30} />
        </button>
      )}
    </div>
  );
}
