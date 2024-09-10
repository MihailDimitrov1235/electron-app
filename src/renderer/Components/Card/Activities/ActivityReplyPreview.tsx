/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-danger */
import { useAuth } from '@Components/Contexts/AuthContext';
import transformAniListText from '@Utils/transformAnilistHtml';
import { FaHeart } from 'react-icons/fa';

export default function ActivityReplyPreview({ text }: { text: string }) {
  const { userAvatar, userName } = useAuth();
  return (
    <div className="flex items-center w-full gap-2 rounded-md overflow-hidden border shadow-md border-background-main px-3 py-2 relative">
      <div className="flex flex-col gap-2 w-full overflow-y-scroll max-h-[500px]">
        <div className="flex gap-2 items-center">
          <div
            className="h-12 aspect-square rounded-md bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div className="hover:text-primary cursor-pointer">{userName}</div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: transformAniListText(text || ''),
          }}
        />
      </div>
      <div className="flex flex-col mt-auto py-2 min-w-16 ml-4 items-end text-end">
        <div className="text-text-light  flex gap-2">
          <button
            type="button"
            className={`flex items-center gap-1 border rounded-md p-1 text-text-light border-text-light hover:text-secondary hover:border-secondary `}
          >
            <span>
              <FaHeart />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
