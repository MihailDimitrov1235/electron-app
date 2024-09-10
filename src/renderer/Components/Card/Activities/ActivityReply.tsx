/* eslint-disable promise/always-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-danger */
import { useDialog } from '@Components/Contexts/DialogContext';
import ConfirmDialog from '@Components/Dialog/ConfimDialog';
import EditDialog from '@Components/Dialog/EditDialog';
import {
  ActivityReplyFragment,
  useSaveActivityReplyMutation,
} from '@graphql/generated/types-and-hooks';
import getTimePassed from '@Utils/getTimePassed';
import transformAniListText from '@Utils/transformAnilistHtml';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function ActivityReply({
  isUser,
  reply,
  handleToggleLike,
  handleDelete,
}: {
  isUser: boolean;
  reply: ActivityReplyFragment;
  handleToggleLike: (id: number) => void;
  handleDelete: (id: number) => void;
}) {
  const { showDialog } = useDialog();
  const [displayReply, setDisplayReply] = useState(reply);
  useEffect(() => {
    if (reply) {
      setDisplayReply(reply);
    }
  }, [reply]);
  const [saveReply] = useSaveActivityReplyMutation();
  return (
    <div className="flex items-center w-full gap-2 rounded-md overflow-hidden border shadow-md border-background-main px-3 py-2 relative">
      <div className="flex flex-col gap-2 w-full overflow-y-scroll max-h-[500px]">
        <div className="flex gap-2 items-center">
          <Link
            className="h-12 aspect-square rounded-md bg-cover"
            to={`/user/${displayReply.user?.id}`}
            style={{
              backgroundImage: `url(${displayReply.user?.avatar?.medium})`,
            }}
          />
          <Link
            to={`/user/${displayReply.user?.id}`}
            className="hover:text-primary"
          >
            {displayReply.user?.name}
          </Link>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: transformAniListText(displayReply.text || ''),
          }}
        />
      </div>
      <div className="flex flex-col mt-auto py-2 min-w-16 ml-4 items-end text-end">
        <div className="absolute top-2 flex gap-1">
          {isUser ? (
            <button
              type="button"
              className="hover:text-blue-500"
              onClick={() =>
                showDialog(
                  <EditDialog
                    title="Edit Reply"
                    message=""
                    initialValue={displayReply.text || ''}
                    previewType="reply"
                  />,
                )
                  .then((result) => {
                    if (result && typeof result === 'string') {
                      saveReply({
                        variables: { id: displayReply.id, text: result },
                      })
                        .then(({ data }) => {
                          setDisplayReply(data?.SaveActivityReply || reply);
                          enqueueSnackbar({
                            variant: 'success',
                            message: 'Reply updated',
                          });
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                    }
                  })
                  .catch((e) => {
                    console.log(e);
                  })
              }
            >
              <MdModeEditOutline size={12} />
            </button>
          ) : null}
          {isUser ? (
            <button
              type="button"
              className="hover:text-red-500"
              onClick={() =>
                showDialog(
                  <ConfirmDialog
                    title="Delete Reply"
                    message="Are you sure you want to delete this reply?"
                  />,
                )
                  .then((result) => {
                    if (result) {
                      handleDelete(displayReply.id);
                    }
                  })
                  .catch((e) => {
                    console.log(e);
                  })
              }
            >
              <FaTrash size={12} />
            </button>
          ) : null}

          <span className="text-text-light text-xs">
            {getTimePassed(displayReply.createdAt)}
          </span>
        </div>

        <div className="text-text-light  flex gap-2">
          <button
            type="button"
            onClick={() => handleToggleLike(displayReply.id)}
            className={`flex items-center gap-1 border rounded-md p-1 ${
              displayReply.isLiked
                ? 'text-secondary border-secondary hover:text-text-light hover:border-text-light'
                : 'text-text-light border-text-light hover:text-secondary hover:border-secondary'
            }`}
          >
            <span className="text-xs">
              {displayReply.likes?.length && displayReply.likes?.length > 0
                ? displayReply.likes.length
                : null}
            </span>
            <span>
              <FaHeart />
            </span>
            <div className="-space-x-2 flex">
              {displayReply.likes?.map((user, index) =>
                index < 4 ? (
                  <div
                    key={user?.id}
                    className="w-4 aspect-square rounded-full bg-cover"
                    style={{ backgroundImage: `url(${user?.avatar?.medium})` }}
                  />
                ) : null,
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
