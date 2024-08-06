import { SearchStaffQuery } from '@graphql/generated/types-and-hooks';
import { Link } from 'react-router-dom';

type StaffType = NonNullable<
  NonNullable<SearchStaffQuery['Page']>['staff']
>[number];

export default function StaffSearchCard({ data }: { data: StaffType }) {
  const url = `/staff/${data?.id}`;
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
        {data?.characters?.nodes && (
          <span className="text-sm text-text-light line-clamp-4 font-semibold">
            Voiced{' '}
            <Link
              to={`/characters/${data.characters.nodes[0]?.id}`}
              className="hover:text-primary overflow-hidden text-ellipsis"
            >
              {data.characters.nodes[0]?.name?.userPreferred}
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}
