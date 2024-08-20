/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
import MediaCardSkeleton from '@Components/Skeletons/MediaCardSkeleton';
import Tooltip from '@Components/Tooltip';
import {
  CharacterFavouritesFragment,
  useGetCharacterFavouritesQuery,
  useToggleFavouritesMutation,
} from '@graphql/generated/types-and-hooks';
import { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function CharactersFavourites({
  data,
  userId,
  perPage,
  isUser,
}: {
  data: CharacterFavouritesFragment;
  userId: number;
  perPage: number;
  isUser: boolean;
}) {
  const [toggleFavourites, { data: toggleFavouritesData }] =
    useToggleFavouritesMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState(data);
  const { data: fetchedData, loading } = useGetCharacterFavouritesQuery({
    variables: { userId, page: currentPage, favouritesPerPage: perPage },
    skip: currentPage === 1,
  });

  useEffect(() => {
    if (fetchedData?.User?.favourites?.characters?.nodes) {
      setDisplayData((prev) => ({
        pageInfo: {
          hasNextPage:
            fetchedData.User?.favourites?.characters?.pageInfo?.hasNextPage,
        },
        nodes: [
          ...(prev.nodes || []),
          ...(fetchedData.User?.favourites?.characters?.nodes || []),
        ],
      }));
    }
  }, [fetchedData]);

  useEffect(() => {
    if (toggleFavouritesData) {
      setDisplayData((prev) => {
        return {
          ...prev,
          nodes: toggleFavouritesData.ToggleFavourite?.characters?.nodes,
        };
      });
    }
  }, [toggleFavouritesData]);
  return (
    <div className="w-full flex flex-wrap gap-8">
      {displayData.nodes && displayData.nodes.length > 0 ? (
        displayData.nodes?.map((character) => (
          <Link
            key={character?.id}
            to={`/character/${character?.id}`}
            className="w-[138px] h-[195px] rounded-md relative"
          >
            <Tooltip text={character?.name?.userPreferred || ''}>
              <img
                src={character?.image?.large || ''}
                alt="Character"
                className="w-[138px] h-[195px] rounded-md z-10 relative "
              />
            </Tooltip>
            {isUser && (
              <button
                className="absolute top-1 right-1 rounded-md bg-red-500 aspect-square z-20 w-6"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavourites({
                    variables: { characterId: character?.id },
                  });
                }}
              >
                &#x2716;
              </button>
            )}
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
