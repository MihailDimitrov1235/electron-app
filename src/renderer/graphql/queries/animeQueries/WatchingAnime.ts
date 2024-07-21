import { gql } from '@apollo/client';

export type WatchingAnimeData = {
  MediaListCollection: {
    lists: Array<{
      name: string;
      entries: Array<{
        id: number;
        media: {
          id: number;
          meanScore: number;
          bannerImage: string;
          coverImage: {
            medium: string;
            extraLarge: string;
            color: string;
          };
          title: {
            english: string;
          };
          description: string;
          genres: string[];
          episodes: number | null;
          status: string;
          mediaListEntry: {
            progress: number;
          } | null;
          nextAiringEpisode: {
            episode: number;
          } | null;
        };
        progress: number;
        score: number | null;
      }>;
    }>;
  };
};

export const GET_WATCHING_ANIME = gql`
  query ($userId: Int) {
    MediaListCollection(userId: $userId, type: ANIME, status: CURRENT) {
      lists {
        name
        entries {
          id
          media {
            id
            meanScore
            bannerImage
            coverImage {
              medium
              extraLarge
              color
            }
            title {
              english
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
