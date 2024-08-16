import { GetMediaDetailsQuery } from '@graphql/generated/types-and-hooks';
import { useMainUtils } from '@Components/Contexts/MainUtilsContext';
import { FaStar, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@Components/Form/Button';

export default function MediaShortInfo({
  data,
  following,
}: {
  data: GetMediaDetailsQuery['MediaDetails'];
  following: GetMediaDetailsQuery['Following'];
}) {
  const { openUrl } = useMainUtils();
  return (
    <div className="w-[230px] h-full flex flex-col gap-2 shrink-0">
      {data?.season && (
        <div className="flex justify-between w-full">
          <div className="text-text-light">Season</div>
          <div>{data.season}</div>
        </div>
      )}

      {data?.seasonYear && (
        <div className="flex justify-between w-full">
          <div className="text-text-light">Season Year</div>
          <div>{data.seasonYear}</div>
        </div>
      )}
      <div className="flex justify-between w-full">
        <div className="text-text-light">Start date</div>
        {data?.startDate?.day ? (
          <div>
            {data?.startDate?.day}/{data?.startDate?.month}/
            {data?.startDate?.year}
          </div>
        ) : (
          <div>~</div>
        )}
      </div>
      <div className="flex justify-between w-full">
        <div className="text-text-light">End date</div>
        {data?.endDate?.day ? (
          <div>
            {data?.endDate?.day}/{data?.endDate?.month}/{data?.endDate?.year}
          </div>
        ) : (
          <div>~</div>
        )}
      </div>
      {data?.source && (
        <div className="flex justify-between w-full">
          <div className="text-text-light">Source</div>
          <div>{String(data.source).replaceAll('_', ' ')}</div>
        </div>
      )}
      {data?.countryOfOrigin && (
        <div className="flex justify-between w-full">
          <div className="text-text-light">Country of origin</div>
          <div>{data?.countryOfOrigin}</div>
        </div>
      )}
      {following?.mediaList && following?.mediaList.length > 0 && (
        <div className="flex flex-col w-full">
          <div className="text-text-light">Following</div>
          <div className="flex gap-2 flex-col">
            {following.mediaList.map((mediaList) => (
              <Link
                key={mediaList?.id}
                to={`/users/${mediaList?.user?.id}`}
                className="w-full shadow-md flex justify-between rounded-md border items-center pr-3 border-background-main overflow-hidden hover:border-primary cursor-pointer"
              >
                <div
                  className="w-8 aspect-square bg-cover flex-shrink-0"
                  style={{
                    backgroundImage: `url("${mediaList?.user?.avatar?.medium}")`,
                  }}
                />
                <div className="overflow-ellipsis overflow-hidden max-w-28">
                  {mediaList?.user?.name}
                </div>
                <div className="flex items-center gap-2">
                  {mediaList?.score ? (mediaList.score / 10).toFixed(1) : 0}
                  <span className="text-score">
                    <FaStar />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {data?.studios?.nodes && data?.studios.nodes.length > 0 && (
        <div className="flex flex-col w-full">
          <div className="text-text-light">Studios</div>
          <div className="flex gap-2 flex-col justify-end">
            {data.studios.nodes.map((studio) => (
              <Link
                key={studio?.id}
                to={`/studio/${studio?.id}`}
                className=" hover:text-primary cursor-pointer"
              >
                {studio?.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {data?.synonyms && data?.synonyms.length > 0 && (
        <div className="flex flex-col w-full">
          <div className="text-text-light">Synonims</div>
          <div className="flex gap-2 flex-col justify-end">
            {data?.synonyms?.map((synonym) => (
              <div key={synonym}>{synonym}</div>
            ))}
          </div>
        </div>
      )}
      {data?.trailer?.site === 'youtube' && (
        <Button
          className="w-full bg-red-700 text-white"
          Icon={FaYoutube}
          onClick={() =>
            openUrl(`https://www.youtube.com/watch?v=${data?.trailer?.id}`)
          }
        >
          Watch trailer
        </Button>
      )}
    </div>
  );
}
