import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAnimeDetailsQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAnimeDetailsQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, favourites?: number | null, popularity?: number | null, status?: MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, source?: MediaSource | null, format?: MediaFormat | null, genres?: Array<string | null> | null, countryOfOrigin?: any | null, season?: MediaSeason | null, seasonYear?: number | null, synonyms?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, trailer?: { __typename?: 'MediaTrailer', site?: string | null, id?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, private?: boolean | null, notes?: string | null, repeat?: number | null, customLists?: any | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null, tags?: Array<{ __typename?: 'MediaTag', name: string, rank?: number | null, isMediaSpoiler?: boolean | null } | null> | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, studios?: { __typename?: 'StudioConnection', nodes?: Array<{ __typename?: 'Studio', id: number, name: string, siteUrl?: string | null } | null> | null } | null } | null, Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', total?: number | null, perPage?: number | null, currentPage?: number | null, lastPage?: number | null, hasNextPage?: boolean | null } | null, mediaList?: Array<{ __typename?: 'MediaList', id: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, user?: { __typename?: 'User', id: number, name: string, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null } | null> | null } | null };

export type GetAnimeInfoQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAnimeInfoQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, description?: string | null, trailer?: { __typename?: 'MediaTrailer', site?: string | null, id?: string | null } | null, relations?: { __typename?: 'MediaConnection', edges?: Array<{ __typename?: 'MediaEdge', relationType?: MediaRelation | null, node?: { __typename?: 'Media', id: number, idMal?: number | null, episodes?: number | null, chapters?: number | null, popularity?: number | null, meanScore?: number | null, isAdult?: boolean | null, isFavourite: boolean, format?: MediaFormat | null, type?: MediaType | null, status?: MediaStatus | null, bannerImage?: string | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null, private?: boolean | null, score?: number | null, status?: MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null } | null } | null> | null } | null, recommendations?: { __typename?: 'RecommendationConnection', nodes?: Array<{ __typename?: 'Recommendation', mediaRecommendation?: { __typename?: 'Media', id: number, episodes?: number | null, chapters?: number | null, meanScore?: number | null, isAdult?: boolean | null, format?: MediaFormat | null, type?: MediaType | null, status?: MediaStatus | null, bannerImage?: string | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null, score?: number | null } | null } | null } | null> | null } | null } | null };

export type GetCurrentAnimeQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCurrentAnimeQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, entries?: Array<{ __typename?: 'MediaList', id: number, progress?: number | null, score?: number | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null } | null> | null } | null> | null } | null };

export type Get_Seasonal_AnimeQueryVariables = Exact<{
  season?: InputMaybe<MediaSeason>;
  year?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_Seasonal_AnimeQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null };


export const GetAnimeDetailsDocument = gql`
    query getAnimeDetails($mediaId: Int) {
  Media(id: $mediaId, type: ANIME) {
    id
    favourites
    popularity
    status
    episodes
    duration
    chapters
    title {
      romaji
      english
      native
      userPreferred
    }
    coverImage {
      extraLarge
      large
      medium
      color
    }
    trailer {
      site
      id
    }
    meanScore
    bannerImage
    mediaListEntry {
      id
      status
      score(format: POINT_100)
      progress
      private
      notes
      repeat
      customLists
      updatedAt
      startedAt {
        year
        month
        day
      }
      completedAt {
        year
        month
        day
      }
    }
    isFavourite
    nextAiringEpisode {
      episode
      timeUntilAiring
    }
    source
    format
    genres
    tags {
      name
      rank
      isMediaSpoiler
    }
    countryOfOrigin
    season
    seasonYear
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    studios(isMain: true) {
      nodes {
        id
        name
        siteUrl
      }
    }
    source
    synonyms
  }
  Page(page: 1) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    mediaList(isFollowing: true, sort: [STATUS], mediaId: $mediaId) {
      id
      status
      score(format: POINT_100)
      progress
      progressVolumes
      user {
        id
        name
        avatar {
          large
          medium
        }
      }
    }
  }
}
    `;

/**
 * __useGetAnimeDetailsQuery__
 *
 * To run a query within a React component, call `useGetAnimeDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeDetailsQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *   },
 * });
 */
export function useGetAnimeDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimeDetailsQuery, GetAnimeDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeDetailsQuery, GetAnimeDetailsQueryVariables>(GetAnimeDetailsDocument, options);
      }
export function useGetAnimeDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeDetailsQuery, GetAnimeDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeDetailsQuery, GetAnimeDetailsQueryVariables>(GetAnimeDetailsDocument, options);
        }
export function useGetAnimeDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAnimeDetailsQuery, GetAnimeDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeDetailsQuery, GetAnimeDetailsQueryVariables>(GetAnimeDetailsDocument, options);
        }
export type GetAnimeDetailsQueryHookResult = ReturnType<typeof useGetAnimeDetailsQuery>;
export type GetAnimeDetailsLazyQueryHookResult = ReturnType<typeof useGetAnimeDetailsLazyQuery>;
export type GetAnimeDetailsSuspenseQueryHookResult = ReturnType<typeof useGetAnimeDetailsSuspenseQuery>;
export type GetAnimeDetailsQueryResult = Apollo.QueryResult<GetAnimeDetailsQuery, GetAnimeDetailsQueryVariables>;
export const GetAnimeInfoDocument = gql`
    query getAnimeInfo($mediaId: Int) {
  Media(id: $mediaId, type: ANIME) {
    id
    description
    trailer {
      site
      id
    }
    relations {
      edges {
        relationType(version: 2)
        node {
          id
          idMal
          mediaListEntry {
            progress
            private
            score(format: POINT_100)
            status
          }
          episodes
          chapters
          nextAiringEpisode {
            episode
          }
          popularity
          meanScore
          isAdult
          isFavourite
          format
          title {
            english
            romaji
            userPreferred
          }
          type
          status(version: 2)
          bannerImage
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
      }
    }
    recommendations(sort: RATING_DESC) {
      nodes {
        mediaRecommendation {
          id
          episodes
          chapters
          meanScore
          isAdult
          format
          title {
            english
            romaji
            userPreferred
          }
          type
          status(version: 2)
          bannerImage
          coverImage {
            large
          }
          mediaListEntry {
            progress
            score(format: POINT_100)
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAnimeInfoQuery__
 *
 * To run a query within a React component, call `useGetAnimeInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeInfoQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *   },
 * });
 */
export function useGetAnimeInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimeInfoQuery, GetAnimeInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeInfoQuery, GetAnimeInfoQueryVariables>(GetAnimeInfoDocument, options);
      }
export function useGetAnimeInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeInfoQuery, GetAnimeInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeInfoQuery, GetAnimeInfoQueryVariables>(GetAnimeInfoDocument, options);
        }
export function useGetAnimeInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAnimeInfoQuery, GetAnimeInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeInfoQuery, GetAnimeInfoQueryVariables>(GetAnimeInfoDocument, options);
        }
export type GetAnimeInfoQueryHookResult = ReturnType<typeof useGetAnimeInfoQuery>;
export type GetAnimeInfoLazyQueryHookResult = ReturnType<typeof useGetAnimeInfoLazyQuery>;
export type GetAnimeInfoSuspenseQueryHookResult = ReturnType<typeof useGetAnimeInfoSuspenseQuery>;
export type GetAnimeInfoQueryResult = Apollo.QueryResult<GetAnimeInfoQuery, GetAnimeInfoQueryVariables>;
export const GetCurrentAnimeDocument = gql`
    query GetCurrentAnime($userId: Int) {
  MediaListCollection(userId: $userId, type: ANIME, status: CURRENT) {
    lists {
      name
      entries {
        id
        media {
          id
          type
          meanScore
          bannerImage
          coverImage {
            extraLarge
            large
            medium
            color
          }
          title {
            romaji
            english
            native
            userPreferred
          }
          description
          genres
          episodes
          status
          mediaListEntry {
            progress
          }
          nextAiringEpisode {
            episode
          }
        }
        progress
        score
      }
    }
  }
}
    `;

/**
 * __useGetCurrentAnimeQuery__
 *
 * To run a query within a React component, call `useGetCurrentAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentAnimeQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCurrentAnimeQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentAnimeQuery, GetCurrentAnimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentAnimeQuery, GetCurrentAnimeQueryVariables>(GetCurrentAnimeDocument, options);
      }
export function useGetCurrentAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentAnimeQuery, GetCurrentAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentAnimeQuery, GetCurrentAnimeQueryVariables>(GetCurrentAnimeDocument, options);
        }
export function useGetCurrentAnimeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCurrentAnimeQuery, GetCurrentAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentAnimeQuery, GetCurrentAnimeQueryVariables>(GetCurrentAnimeDocument, options);
        }
export type GetCurrentAnimeQueryHookResult = ReturnType<typeof useGetCurrentAnimeQuery>;
export type GetCurrentAnimeLazyQueryHookResult = ReturnType<typeof useGetCurrentAnimeLazyQuery>;
export type GetCurrentAnimeSuspenseQueryHookResult = ReturnType<typeof useGetCurrentAnimeSuspenseQuery>;
export type GetCurrentAnimeQueryResult = Apollo.QueryResult<GetCurrentAnimeQuery, GetCurrentAnimeQueryVariables>;
export const Get_Seasonal_AnimeDocument = gql`
    query GET_SEASONAL_ANIME($season: MediaSeason, $year: Int) {
  Page(page: 1, perPage: 20) {
    media(type: ANIME, season: $season, seasonYear: $year, sort: POPULARITY_DESC) {
      id
      type
      meanScore
      bannerImage
      coverImage {
        extraLarge
        large
        medium
        color
      }
      title {
        romaji
        english
        native
        userPreferred
      }
      description
      genres
      episodes
      status
      mediaListEntry {
        progress
      }
      nextAiringEpisode {
        episode
      }
    }
  }
}
    `;

/**
 * __useGet_Seasonal_AnimeQuery__
 *
 * To run a query within a React component, call `useGet_Seasonal_AnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Seasonal_AnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Seasonal_AnimeQuery({
 *   variables: {
 *      season: // value for 'season'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGet_Seasonal_AnimeQuery(baseOptions?: Apollo.QueryHookOptions<Get_Seasonal_AnimeQuery, Get_Seasonal_AnimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Seasonal_AnimeQuery, Get_Seasonal_AnimeQueryVariables>(Get_Seasonal_AnimeDocument, options);
      }
export function useGet_Seasonal_AnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Seasonal_AnimeQuery, Get_Seasonal_AnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Seasonal_AnimeQuery, Get_Seasonal_AnimeQueryVariables>(Get_Seasonal_AnimeDocument, options);
        }
export function useGet_Seasonal_AnimeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Get_Seasonal_AnimeQuery, Get_Seasonal_AnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Get_Seasonal_AnimeQuery, Get_Seasonal_AnimeQueryVariables>(Get_Seasonal_AnimeDocument, options);
        }
export type Get_Seasonal_AnimeQueryHookResult = ReturnType<typeof useGet_Seasonal_AnimeQuery>;
export type Get_Seasonal_AnimeLazyQueryHookResult = ReturnType<typeof useGet_Seasonal_AnimeLazyQuery>;
export type Get_Seasonal_AnimeSuspenseQueryHookResult = ReturnType<typeof useGet_Seasonal_AnimeSuspenseQuery>;
export type Get_Seasonal_AnimeQueryResult = Apollo.QueryResult<Get_Seasonal_AnimeQuery, Get_Seasonal_AnimeQueryVariables>;