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
      episodes: number | null;
      status: string;
    }>;
  };
};

export const GET_SEASONAL_ANIME = gql`
  query GET_SEASONAL_ANIME {
    Page(page: 1, perPage: 20) {
      media(season: SUMMER, seasonYear: 2024, sort: POPULARITY_DESC) {
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
        episodes
        status
      }
    }
  }
`;

export type OnListData = {
  Media: {
    id: number;
    title: {
      english: string;
    };
  };
};

export const GET_ON_LIST = gql`
  query {
    Media(onList: true) {
      id
      title {
        english
      }
    }
  }
`;
