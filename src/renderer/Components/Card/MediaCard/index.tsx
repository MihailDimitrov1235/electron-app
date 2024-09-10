/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { MediaFormat } from '@graphql/generated/types-and-hooks';
import DefaultMediaCard from './DefaultMediaCard';
import WideMediaCard from './WideMediaCard';

type BaseMediaCardProps = {
  id?: number;
  meanScore?: number | null;
  episodes?: number | null;
  chapters?: number | null;
  format?: MediaFormat | null;
  size?: number;
  mediaListEntry?: {
    progress?: number | null;
  } | null;
  nextAiringEpisode?: {
    episode?: number | null;
    timeUntilAiring?: number | null;
  } | null;
  coverImage?: {
    extraLarge?: string | null;
    large?: string | null;
    medium?: string | null;
    color?: string | null;
  } | null;
  title?: {
    romaji?: string | null;
    english?: string | null;
    native?: string | null;
    userPreferred?: string | null;
  } | null;
  type?: 'ANIME' | 'MANGA' | null;
};

export type DefaultCardProps = BaseMediaCardProps & {
  withTitle?: boolean;
  withEpisodes?: boolean;
  withScore?: boolean;
  withLink?: boolean;
  withNextEpisode?: boolean;
  withType?: boolean;
  relationship?: string;
};

export type WideCardProps = BaseMediaCardProps & {
  description?: string | null;
};

type MediaCardProps =
  | (DefaultCardProps & { cardType?: 'default' })
  | (WideCardProps & { cardType: 'wide' });

export default function MediaCard({
  cardType = 'default',
  ...props
}: MediaCardProps) {
  if (cardType === 'default') {
    return <DefaultMediaCard {...props} />;
  }
  return <WideMediaCard {...props} />;
}
