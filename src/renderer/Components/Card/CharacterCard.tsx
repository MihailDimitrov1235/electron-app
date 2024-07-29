/* eslint-disable react/require-default-props */
import { CharacterImage, CharacterName } from '@graphql/generated/types';
import React from 'react';
import { Link } from 'react-router-dom';

type CharacterCardPropsType = {
  id?: number | null;
  role?: any | null;
  image?: CharacterImage | null;
  name?: CharacterName | null;
  voiceActors?:
    | ({
        id: number;
        languageV2?: string | null;
        name?: {
          userPreferred?: string | null;
          [key: string]: any;
        } | null;
        image?: {
          large?: string | null;
          medium?: string | null;
          [key: string]: any;
        } | null;
        [key: string]: any;
      } | null)[]
    | null
    | undefined;
  [key: string]: any;
};

export default function CharacterCard({
  id,
  role,
  image,
  name,
  voiceActors,
}: CharacterCardPropsType) {
  console.log(image?.large);

  const japaneseVoiceActor = voiceActors?.find(
    (obj) => obj?.languageV2 === 'Japanese',
  );
  return (
    <div className="flex rounded-md overflow-hidden w-full justify-between gap-8 shadow-md border border-background-main">
      <div className="flex gap-4">
        <Link
          to={`/character/${id}`}
          className=" overflow-hidden relative w-28 bg-cover"
          style={{
            backgroundImage: `url(${image?.large})`,
            aspectRatio: '2/3',
          }}
        />
        <div className="flex flex-col gap-2">
          <Link
            to={`/character/${id}`}
            className=" line-clamp-5 overflow-ellipsis hover:text-primary"
          >
            {name?.userPreferred}
          </Link>
          <span className="text-text-light">{role}</span>
        </div>
      </div>

      {japaneseVoiceActor && (
        <div className="flex gap-4">
          <div className=" text-end flex flex-col gap-2">
            <Link
              to={`/staff/${japaneseVoiceActor?.id}`}
              className="line-clamp-5 overflow-ellipsis hover:text-primary"
            >
              {japaneseVoiceActor?.name?.userPreferred}
            </Link>
            <span className="text-text-light">Japanese VA</span>
          </div>
          <Link
            to={`/character/${id}`}
            className=" overflow-hidden relative w-28 h-38 bg-cover"
            style={{
              backgroundImage: `url(${japaneseVoiceActor?.image?.large})`,
              aspectRatio: '2/3',
            }}
          />
        </div>
      )}
    </div>
  );
}
