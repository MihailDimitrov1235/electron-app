import { SearchCharacterQuery } from '@graphql/generated/types-and-hooks';
import { Link } from 'react-router-dom';

type CharacterType = NonNullable<
  NonNullable<SearchCharacterQuery['Page']>['characters']
>[number];

export default function CharacterSearchCard({ data }: { data: CharacterType }) {
  const url = `/characters/${data?.id}`;
  return (
    <div className="flex gap-2 rounded-md border border-background-main h-32 overflow-hidden pr-2">
      <Link
        to={url}
        className="h-32 aspect-square bg-cover"
        style={{ backgroundImage: `url(${data?.image?.large})` }}
      />
      <div className="flex flex-col gap-1 w-full overflow-hidden py-1">
        <Link
          to={url}
          className="hover:text-primary line-clamp-1 overflow-hidden text-ellipsis font-bold"
        >
          {data?.name?.userPreferred}
        </Link>
        {data?.media?.nodes && (
          <span className="text-sm text-text-light line-clamp-4 font-semibold">
            From{' '}
            <Link
              to={`/${data.media.nodes[0]?.type || 'anime'}/${data.media
                .nodes[0]?.id}`}
              className="hover:text-primary overflow-hidden text-ellipsis"
            >
              {data.media.nodes[0]?.title?.userPreferred}
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}
