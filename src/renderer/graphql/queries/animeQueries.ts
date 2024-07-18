import { gql } from '@apollo/client';

export type SeasonalAnimeData = {
  Page: {
    media: Array<{
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
    }>;
  };
};

const now = new Date();
const month = now.getMonth(); // 0-11
const year = now.getFullYear();

let season;
if (month >= 0 && month <= 2) {
  season = 'WINTER';
} else if (month >= 3 && month <= 5) {
  season = 'SPRING';
} else if (month >= 6 && month <= 8) {
  season = 'SUMMER';
} else {
  season = 'FALL';
}

export const GET_SEASONAL_ANIME = gql`
  query GET_SEASONAL_ANIME {
    Page(page: 1, perPage: 20) {
      media(type:ANIME, season: ${season}, seasonYear: ${year}, sort: POPULARITY_DESC) {
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
    }
  }
`;

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
