/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'react-router-dom';
import MediaScore from '@Components/Media/MediaScore';
import DOMPurify from 'dompurify';
import { type WideCardProps } from '.';

export default function WideMediaCard({
  id,
  meanScore,
  coverImage,
  title,
  episodes,
  chapters,
  format,
  description,
  mediaListEntry,
  nextAiringEpisode,
  type,
  size = 3,
}: WideCardProps) {
  const width = 46 * size;
  const height = 65 * size;
  return (
    <div
      className={`flex gap-2 h-fit w-full bg-background-main rounded-md overflow-hidden text-sm `}
    >
      <Link
        to={`/${type}/${id}`}
        className="flex-shrink-0 bg-cover"
        style={{
          backgroundImage: `url(${coverImage?.large})`,
          width,
          height,
        }}
      />
      <div
        className="p-2 w-full flex flex-col"
        style={{
          height,
        }}
      >
        <div className="flex justify-between gap-2">
          <Link
            to={`/${type}/${id}`}
            className="text-text-main font-bold hover:text-primary line-clamp-2"
          >
            {title?.userPreferred}
          </Link>
          <MediaScore score={meanScore || 0} small />
        </div>
        <div className="text-text-light font-semibold">
          {format} - {episodes || chapters || '~'}
        </div>
        <div
          className="line-clamp-[9] text-xs text-text-light mt-2"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description || '', {
              USE_PROFILES: { html: true },
            }),
          }}
        />
        <div>{}</div>
      </div>
    </div>
  );
}
