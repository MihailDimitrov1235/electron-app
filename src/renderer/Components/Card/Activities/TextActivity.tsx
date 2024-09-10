/* eslint-disable promise/no-nesting */
/* eslint-disable promise/always-return */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-danger */
import { useAuth } from '@Components/Contexts/AuthContext';
import { useDialog } from '@Components/Contexts/DialogContext';
import ConfirmDialog from '@Components/Dialog/ConfimDialog';
import EditDialog from '@Components/Dialog/EditDialog';
import {
  TextActivityFragment,
  useActivitySubscribeMutation,
  useSaveTextActivityMutation,
} from '@graphql/generated/types-and-hooks';
import getTimePassed from '@Utils/getTimePassed';
import transformAniListText from '@Utils/transformAnilistHtml';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { FaBell, FaComment, FaHeart, FaTrash } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

export default function TextActivity({
  activity,
  handleToggleLike,
  autoHeight = false,
  handleDelete,
  handleEdit,
}: {
  activity: TextActivityFragment;
  handleToggleLike: (id: number) => void;
  autoHeight?: boolean;
  handleDelete: (id: number) => void;
  handleEdit: (text: string, activityId: number) => void;
}) {
  const navigate = useNavigate();
  const { isLoggedIn, userId } = useAuth();
  const { showDialog } = useDialog();
  const [activitySubscribe] = useActivitySubscribeMutation();
  const [subscribed, setSubscribed] = useState(activity.isSubscribed);
  const [saveTextActivity] = useSaveTextActivityMutation();
  return (
    <div
      className={`flex items-center w-full ${
        autoHeight ? '' : 'col-span-2 row-span-2'
      }  gap-2 rounded-md overflow-hidden border shadow-md border-background-main px-3 py-2 relative`}
    >
      <div
        className={`flex flex-col gap-2 w-full overflow-hidden ${
          autoHeight ? 'max-h-[500px] ' : 'h-48'
        } `}
      >
        <div className="flex gap-2 items-center">
          <Link
            className="h-12 aspect-square rounded-md bg-cover"
            to={`/user/${activity.user?.id}`}
            style={{
              backgroundImage: `url(${activity.user?.avatar?.medium})`,
            }}
          />
          <Link
            to={`/user/${activity.user?.id}`}
            className="hover:text-primary"
          >
            {activity.user?.name}
          </Link>
        </div>
        <div
          className="overflow-y-scroll"
          dangerouslySetInnerHTML={{
            __html: transformAniListText(activity.text || ''),
          }}
        />
      </div>
      <div className="flex flex-col mt-auto py-2 ml-4 items-end text-end">
        <div className="absolute top-2 flex gap-1">
          {isLoggedIn ? (
            <button
              type="button"
              className={` ${
                subscribed
                  ? 'hover:text-text-light text-green-500'
                  : 'hover:text-green-500 text-text-light'
              }`}
              onClick={() => {
                activitySubscribe({
                  variables: {
                    activityId: activity.id,
                    subscribe: !subscribed,
                  },
                })
                  .then(() => {
                    const current = subscribed;
                    setSubscribed((prev) => !prev);
                    enqueueSnackbar({
                      variant: 'success',
                      message: current ? 'Unsubscribed' : 'Subscribed',
                    });
                  })
                  .catch((e) => console.log(e));
              }}
            >
              <FaBell size={12} />
            </button>
          ) : null}

          {isLoggedIn && activity.user?.id === userId ? (
            <>
              <button
                type="button"
                className="hover:text-blue-500"
                onClick={() =>
                  showDialog(
                    <EditDialog
                      title="Edit Text Activity"
                      message=""
                      textFieldTitle=""
                      initialValue={activity.text || ''}
                      previewType="reply"
                    />,
                  )
                    .then((result) => {
                      if (typeof result === 'string' && result.length > 0) {
                        saveTextActivity({
                          variables: { activityId: activity.id, text: result },
                        })
                          .then(({ data }) => {
                            handleEdit(
                              data?.SaveTextActivity?.text || '',
                              activity.id,
                            );
                          })
                          .catch((e) => console.log(e));
                      }
                    })
                    .catch((e) => {
                      console.log(e);
                    })
                }
              >
                <MdModeEditOutline size={12} />
              </button>
              <button
                type="button"
                className="hover:text-red-500"
                onClick={() =>
                  showDialog(
                    <ConfirmDialog
                      title="Delete Text Activity"
                      message="Are you sure you want to delete this text activity?"
                    />,
                  )
                    .then((result) => {
                      if (result) {
                        handleDelete(activity.id);
                      }
                    })
                    .catch((e) => {
                      console.log(e);
                    })
                }
              >
                <FaTrash size={12} />
              </button>
            </>
          ) : null}

          <span className="text-text-light text-xs">
            {getTimePassed(activity.createdAt)}
          </span>
        </div>
        <div className="text-text-light flex gap-2">
          <button
            onClick={() => navigate(`/activity/${activity.id}`)}
            type="button"
            className={`flex items-center gap-1  `}
          >
            <span className="text-xs">
              {activity.replyCount !== 0 && activity.replyCount}
            </span>
            <span className="hover:text-blue-500">
              <FaComment />
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleToggleLike(activity.id)}
            className={`flex items-center gap-1 `}
          >
            <span className="text-xs">
              {activity.likeCount !== 0 && activity.likeCount}
            </span>
            <span
              className={`${
                activity.isLiked
                  ? 'text-secondary hover:text-text-light'
                  : 'text-text-light hover:text-secondary'
              }`}
            >
              <FaHeart />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
