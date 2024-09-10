/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */

import DefaultMediaCardSkeleton from './DefaultMediaCardSkeleton';
import WideMediaSkeletonCard from './WideMediaCardSkeleton';

type BaseMediaCardProps = {
  cardType?: 'default' | 'wide';
  size?: number;
};

export type DefaultMediaCardSkeletonProps = BaseMediaCardProps & {
  withTitle?: boolean;
  withEpisodes?: boolean;
  withType?: boolean;
  [key: string]: any;
};

export type WideCardSkeletonProps = BaseMediaCardProps & {};

type MediaCardSkeletonProps =
  | (DefaultMediaCardSkeletonProps & { cardType?: 'default' })
  | (WideCardSkeletonProps & { cardType: 'wide' });

export default function MediaCardSkeleton({
  cardType = 'default',
  ...props
}: MediaCardSkeletonProps) {
  if (cardType === 'default') {
    return <DefaultMediaCardSkeleton {...props} />;
  }
  return <WideMediaSkeletonCard {...props} />;
}
