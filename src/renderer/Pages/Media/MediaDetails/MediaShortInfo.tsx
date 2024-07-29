import { GetMediaDetailsQuery } from '@graphql/generated/types-and-hooks';
import { useMainUtils } from '@Components/Contexts/MainUtilsContext';
import { FaStar, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@Components/Button';

export default function MediaShortInfo({
  data,
}: {
  data: GetMediaDetailsQuery;
}) {
  const { openUrl } = useMainUtils();
  return (
    <div className="w-[230px] h-full flex flex-col gap-2 shrink-0">
      <div className="flex justify-between w-full">
        <div className="text-text-light">Season</div>
        <div>{data.Media?.season}</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-text-light">Season Year</div>
        <div>{data.Media?.seasonYear}</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-text-light">Start date</div>
        {data.Media?.startDate?.day ? (
          <div>
            {data.Media?.startDate?.day}/{data.Media?.startDate?.month}/
            {data.Media?.startDate?.year}
          </div>
        ) : (
          <div>~</div>
        )}
      </div>
      <div className="flex justify-between w-full">
        <div className="text-text-light">End date</div>
        {data.Media?.endDate?.day ? (
          <div>
            {data.Media?.endDate?.day}/{data.Media?.endDate?.month}/
            {data.Media?.endDate?.year}
          </div>
        ) : (
          <div>~</div>
        )}
      </div>
      <div className="flex justify-between w-full">
        <div className="text-text-light">Source</div>
        <div>
          {data.Media?.source
            ? String(data.Media.source).replace('_', ' ')
            : ''}
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-text-light">Country of origin</div>
        <div>{data.Media?.countryOfOrigin}</div>
      </div>
      {data.Page?.mediaList && data.Page?.mediaList.length > 0 && (
        <div className="flex flex-col w-full">
          <div className="text-text-light">Following</div>
          <div className="flex gap-2 flex-col">
            {data.Page.mediaList.map((mediaList) => (
              <Link
                key={mediaList?.id}
                to={`/user/${mediaList?.user?.id}`}
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
                  <span className="text-yellow-400">
                    <FaStar />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {data.Media?.studios?.nodes && data.Media?.studios.nodes.length > 0 && (
        <div className="flex flex-col w-full">
          <div className="text-text-light">Studios</div>
          <div className="flex gap-2 flex-col justify-end">
            {data.Media.studios.nodes.map((studio) => (
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
      {data.Media?.synonyms && data.Media?.synonyms.length > 0 && (
        <div className="flex flex-col w-full">
          <div className="text-text-light">Synonims</div>
          <div className="flex gap-2 flex-col justify-end">
            {data.Media?.synonyms?.map((synonym) => (
              <div key={synonym}>{synonym}</div>
            ))}
          </div>
        </div>
      )}
      {data.Media?.trailer?.site === 'youtube' && (
        <Button
          className="w-full bg-red-700 text-white"
          Icon={FaYoutube}
          onClick={() =>
            openUrl(
              `https://www.youtube.com/watch?v=${data.Media?.trailer?.id}`,
            )
          }
        >
          Watch trailer
        </Button>
      )}
    </div>
  );
}
