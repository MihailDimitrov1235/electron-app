import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCurrentMediaQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
}>;


export type GetCurrentMediaQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, entries?: Array<{ __typename?: 'MediaList', id: number, progress?: number | null, score?: number | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null } | null> | null } | null> | null } | null };

export type GetMediaCharactersQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
}>;


export type GetMediaCharactersQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', characters?: { __typename?: 'CharacterConnection', edges?: Array<{ __typename?: 'CharacterEdge', role?: CharacterRole | null, voiceActors?: Array<{ __typename?: 'Staff', id: number, languageV2?: string | null, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null } | null> | null, node?: { __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null } | null } | null> | null } | null } | null };

export type GetMediaDetailsQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
}>;


export type GetMediaDetailsQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, favourites?: number | null, popularity?: number | null, status?: MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, source?: MediaSource | null, format?: MediaFormat | null, genres?: Array<string | null> | null, countryOfOrigin?: any | null, season?: MediaSeason | null, seasonYear?: number | null, synonyms?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, trailer?: { __typename?: 'MediaTrailer', site?: string | null, id?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, private?: boolean | null, notes?: string | null, repeat?: number | null, customLists?: any | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null, tags?: Array<{ __typename?: 'MediaTag', name: string, rank?: number | null, isMediaSpoiler?: boolean | null } | null> | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, studios?: { __typename?: 'StudioConnection', nodes?: Array<{ __typename?: 'Studio', id: number, name: string, siteUrl?: string | null } | null> | null } | null } | null, Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', total?: number | null, perPage?: number | null, currentPage?: number | null, lastPage?: number | null, hasNextPage?: boolean | null } | null, mediaList?: Array<{ __typename?: 'MediaList', id: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, user?: { __typename?: 'User', id: number, name: string, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null } | null> | null } | null };

export type GetMediaInfoQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
}>;


export type GetMediaInfoQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, description?: string | null, relations?: { __typename?: 'MediaConnection', edges?: Array<{ __typename?: 'MediaEdge', relationType?: MediaRelation | null, node?: { __typename?: 'Media', id: number, idMal?: number | null, episodes?: number | null, chapters?: number | null, popularity?: number | null, meanScore?: number | null, isAdult?: boolean | null, isFavourite: boolean, format?: MediaFormat | null, type?: MediaType | null, status?: MediaStatus | null, bannerImage?: string | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null, private?: boolean | null, score?: number | null, status?: MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null } | null } | null> | null } | null, recommendations?: { __typename?: 'RecommendationConnection', nodes?: Array<{ __typename?: 'Recommendation', mediaRecommendation?: { __typename?: 'Media', id: number, episodes?: number | null, chapters?: number | null, meanScore?: number | null, isAdult?: boolean | null, format?: MediaFormat | null, type?: MediaType | null, status?: MediaStatus | null, bannerImage?: string | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null, score?: number | null } | null } | null } | null> | null } | null } | null };

export type GetSeasonalMediaQueryVariables = Exact<{
  season?: InputMaybe<MediaSeason>;
  year?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
}>;


export type GetSeasonalMediaQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null };


export const GetCurrentMediaDocument = gql`
    query GetCurrentMedia($userId: Int, $mediaType: MediaType) {
  MediaListCollection(userId: $userId, type: $mediaType, status: CURRENT) {
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
 * __useGetCurrentMediaQuery__
 *
 * To run a query within a React component, call `useGetCurrentMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentMediaQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      mediaType: // value for 'mediaType'
 *   },
 * });
 */
export function useGetCurrentMediaQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentMediaQuery, GetCurrentMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentMediaQuery, GetCurrentMediaQueryVariables>(GetCurrentMediaDocument, options);
      }
export function useGetCurrentMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentMediaQuery, GetCurrentMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentMediaQuery, GetCurrentMediaQueryVariables>(GetCurrentMediaDocument, options);
        }
export function useGetCurrentMediaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCurrentMediaQuery, GetCurrentMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentMediaQuery, GetCurrentMediaQueryVariables>(GetCurrentMediaDocument, options);
        }
export type GetCurrentMediaQueryHookResult = ReturnType<typeof useGetCurrentMediaQuery>;
export type GetCurrentMediaLazyQueryHookResult = ReturnType<typeof useGetCurrentMediaLazyQuery>;
export type GetCurrentMediaSuspenseQueryHookResult = ReturnType<typeof useGetCurrentMediaSuspenseQuery>;
export type GetCurrentMediaQueryResult = Apollo.QueryResult<GetCurrentMediaQuery, GetCurrentMediaQueryVariables>;
export const GetMediaCharactersDocument = gql`
    query GetMediaCharacters($mediaId: Int, $mediaType: MediaType) {
  Media(id: $mediaId, type: $mediaType) {
    characters(sort: [ROLE, FAVOURITES_DESC]) {
      edges {
        role
        voiceActors {
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          image {
            large
            medium
          }
          languageV2
        }
        node {
          id
          image {
            large
            medium
          }
          name {
            userPreferred
          }
          isFavourite
        }
      }
    }
  }
}
    `;

/**
 * __useGetMediaCharactersQuery__
 *
 * To run a query within a React component, call `useGetMediaCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaCharactersQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      mediaType: // value for 'mediaType'
 *   },
 * });
 */
export function useGetMediaCharactersQuery(baseOptions?: Apollo.QueryHookOptions<GetMediaCharactersQuery, GetMediaCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaCharactersQuery, GetMediaCharactersQueryVariables>(GetMediaCharactersDocument, options);
      }
export function useGetMediaCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaCharactersQuery, GetMediaCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaCharactersQuery, GetMediaCharactersQueryVariables>(GetMediaCharactersDocument, options);
        }
export function useGetMediaCharactersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMediaCharactersQuery, GetMediaCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMediaCharactersQuery, GetMediaCharactersQueryVariables>(GetMediaCharactersDocument, options);
        }
export type GetMediaCharactersQueryHookResult = ReturnType<typeof useGetMediaCharactersQuery>;
export type GetMediaCharactersLazyQueryHookResult = ReturnType<typeof useGetMediaCharactersLazyQuery>;
export type GetMediaCharactersSuspenseQueryHookResult = ReturnType<typeof useGetMediaCharactersSuspenseQuery>;
export type GetMediaCharactersQueryResult = Apollo.QueryResult<GetMediaCharactersQuery, GetMediaCharactersQueryVariables>;
export const GetMediaDetailsDocument = gql`
    query GetMediaDetails($mediaId: Int, $mediaType: MediaType) {
  Media(id: $mediaId, type: $mediaType) {
    id
    favourites
    popularity
    status
    episodes
    duration
    chapters
    volumes
    type
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
 * __useGetMediaDetailsQuery__
 *
 * To run a query within a React component, call `useGetMediaDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaDetailsQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      mediaType: // value for 'mediaType'
 *   },
 * });
 */
export function useGetMediaDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetMediaDetailsQuery, GetMediaDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaDetailsQuery, GetMediaDetailsQueryVariables>(GetMediaDetailsDocument, options);
      }
export function useGetMediaDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaDetailsQuery, GetMediaDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaDetailsQuery, GetMediaDetailsQueryVariables>(GetMediaDetailsDocument, options);
        }
export function useGetMediaDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMediaDetailsQuery, GetMediaDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMediaDetailsQuery, GetMediaDetailsQueryVariables>(GetMediaDetailsDocument, options);
        }
export type GetMediaDetailsQueryHookResult = ReturnType<typeof useGetMediaDetailsQuery>;
export type GetMediaDetailsLazyQueryHookResult = ReturnType<typeof useGetMediaDetailsLazyQuery>;
export type GetMediaDetailsSuspenseQueryHookResult = ReturnType<typeof useGetMediaDetailsSuspenseQuery>;
export type GetMediaDetailsQueryResult = Apollo.QueryResult<GetMediaDetailsQuery, GetMediaDetailsQueryVariables>;
export const GetMediaInfoDocument = gql`
    query GetMediaInfo($mediaId: Int, $mediaType: MediaType) {
  Media(id: $mediaId, type: $mediaType) {
    id
    description
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
 * __useGetMediaInfoQuery__
 *
 * To run a query within a React component, call `useGetMediaInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaInfoQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      mediaType: // value for 'mediaType'
 *   },
 * });
 */
export function useGetMediaInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetMediaInfoQuery, GetMediaInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaInfoQuery, GetMediaInfoQueryVariables>(GetMediaInfoDocument, options);
      }
export function useGetMediaInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaInfoQuery, GetMediaInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaInfoQuery, GetMediaInfoQueryVariables>(GetMediaInfoDocument, options);
        }
export function useGetMediaInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMediaInfoQuery, GetMediaInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMediaInfoQuery, GetMediaInfoQueryVariables>(GetMediaInfoDocument, options);
        }
export type GetMediaInfoQueryHookResult = ReturnType<typeof useGetMediaInfoQuery>;
export type GetMediaInfoLazyQueryHookResult = ReturnType<typeof useGetMediaInfoLazyQuery>;
export type GetMediaInfoSuspenseQueryHookResult = ReturnType<typeof useGetMediaInfoSuspenseQuery>;
export type GetMediaInfoQueryResult = Apollo.QueryResult<GetMediaInfoQuery, GetMediaInfoQueryVariables>;
export const GetSeasonalMediaDocument = gql`
    query GetSeasonalMedia($season: MediaSeason, $year: Int, $mediaType: MediaType) {
  Page(page: 1, perPage: 20) {
    media(
      type: $mediaType
      season: $season
      seasonYear: $year
      sort: POPULARITY_DESC
    ) {
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
 * __useGetSeasonalMediaQuery__
 *
 * To run a query within a React component, call `useGetSeasonalMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeasonalMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeasonalMediaQuery({
 *   variables: {
 *      season: // value for 'season'
 *      year: // value for 'year'
 *      mediaType: // value for 'mediaType'
 *   },
 * });
 */
export function useGetSeasonalMediaQuery(baseOptions?: Apollo.QueryHookOptions<GetSeasonalMediaQuery, GetSeasonalMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSeasonalMediaQuery, GetSeasonalMediaQueryVariables>(GetSeasonalMediaDocument, options);
      }
export function useGetSeasonalMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSeasonalMediaQuery, GetSeasonalMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSeasonalMediaQuery, GetSeasonalMediaQueryVariables>(GetSeasonalMediaDocument, options);
        }
export function useGetSeasonalMediaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSeasonalMediaQuery, GetSeasonalMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSeasonalMediaQuery, GetSeasonalMediaQueryVariables>(GetSeasonalMediaDocument, options);
        }
export type GetSeasonalMediaQueryHookResult = ReturnType<typeof useGetSeasonalMediaQuery>;
export type GetSeasonalMediaLazyQueryHookResult = ReturnType<typeof useGetSeasonalMediaLazyQuery>;
export type GetSeasonalMediaSuspenseQueryHookResult = ReturnType<typeof useGetSeasonalMediaSuspenseQuery>;
export type GetSeasonalMediaQueryResult = Apollo.QueryResult<GetSeasonalMediaQuery, GetSeasonalMediaQueryVariables>;