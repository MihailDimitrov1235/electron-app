import { gql } from '@apollo/client';

export type AnimeDetailsData = {
  Media: {
    id: number;
    favourites: number;
    popularity: number;
    episodes: number | null;
    chapters: number | null;
    mediaListEntry: {
      id: number;
      status: string;
      score: number;
      progress: number;
      private: boolean;
      notes: string | null;
      repeat: number;
      customLists: Record<string, boolean>;
      updatedAt: number;
      startedAt: {
        year: number | null;
        month: number | null;
        day: number | null;
      };
      completedAt: {
        year: number | null;
        month: number | null;
        day: number | null;
      };
    } | null;
    isFavourite: boolean;
    siteUrl: string;
    idMal: number | null;
    nextAiringEpisode: {
      episode: number;
      airingAt: number;
    } | null;
    source: string | null;
    countryOfOrigin: string;
    format: string;
    duration: number | null;
    season: string | null;
    seasonYear: number | null;
    startDate: {
      year: number | null;
      month: number | null;
      day: number | null;
    };
    endDate: {
      year: number | null;
      month: number | null;
      day: number | null;
    };
    genres: string[];
    studios: {
      nodes: {
        id: number;
        name: string;
        siteUrl: string;
      }[];
    };
    description: string | null;
    trailer: {
      site: string;
      id: string;
    } | null;
    synonyms: string[];
    tags: {
      name: string;
      rank: number;
      isMediaSpoiler: boolean;
    }[];
    characters: {
      edges: {
        role: string;
        voiceActors: {
          id: number;
          name: {
            first: string | null;
            middle: string | null;
            last: string | null;
            full: string | null;
            native: string | null;
            userPreferred: string;
          };
          image: {
            large: string;
            medium: string;
          };
          languageV2: string;
        }[];
        node: {
          id: number;
          image: {
            medium: string;
          };
          name: {
            userPreferred: string;
          };
          isFavourite: boolean;
        };
      }[];
    };
    relations: {
      edges: {
        relationType: string;
        node: {
          id: number;
          idMal: number | null;
          mediaListEntry: {
            progress: number;
            private: boolean;
            score: number;
            status: string;
          } | null;
          episodes: number | null;
          chapters: number | null;
          nextAiringEpisode: {
            episode: number;
          } | null;
          popularity: number;
          meanScore: number;
          isAdult: boolean;
          isFavourite: boolean;
          format: string;
          title: {
            english: string | null;
            romaji: string | null;
            userPreferred: string;
          };
          type: string;
          status: string;
          bannerImage: string | null;
          coverImage: {
            large: string;
          };
        };
      }[];
    };
    staffPreview: {
      edges: {
        role: string;
        node: {
          id: number;
          image: {
            large: string;
            medium: string;
          };
          name: {
            userPreferred: string;
          };
        };
      }[];
    };
    recommendations: {
      nodes: {
        mediaRecommendation: {
          id: number;
          idMal: number | null;
          mediaListEntry: {
            progress: number;
            private: boolean;
            score: number;
            status: string;
          } | null;
          episodes: number | null;
          chapters: number | null;
          nextAiringEpisode: {
            episode: number;
          } | null;
          meanScore: number;
          isAdult: boolean;
          isFavourite: boolean;
          format: string;
          title: {
            english: string | null;
            romaji: string | null;
            userPreferred: string;
          };
          type: string;
          status: string;
          bannerImage: string | null;
          coverImage: {
            large: string;
          };
        };
      }[];
    };
    externalLinks: {
      url: string;
      site: string;
    }[];
  };
  Page: {
    pageInfo: {
      total: number;
      perPage: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
    };
    mediaList: {
      id: number;
      status: string;
      score: number;
      progress: number;
      progressVolumes: number | null;
      user: {
        id: number;
        name: string;
        avatar: {
          large: string;
          medium: string;
        };
      };
    }[];
  };
};

export const GET_ANIME_DETAILS = gql`
  query ($mediaId: Int) {
    Media(id: $mediaId) {
      id
      favourites
      popularity
      episodes
      chapters
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
      siteUrl
      idMal
      nextAiringEpisode {
        episode
        airingAt
      }
      source
      countryOfOrigin
      format
      duration
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
      genres
      studios(isMain: true) {
        nodes {
          id
          name
          siteUrl
        }
      }
      description
      trailer {
        site
        id
      }
      synonyms
      tags {
        name
        rank
        isMediaSpoiler
      }
      characters(sort: [ROLE, FAVOURITES_DESC], perPage: 25, page: 1) {
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
              medium
            }
            name {
              userPreferred
            }
            isFavourite
          }
        }
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
              large
            }
          }
        }
      }
      staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
        edges {
          role
          node {
            id
            image {
              large
              medium
            }
            name {
              userPreferred
            }
          }
        }
      }
      recommendations(sort: RATING_DESC) {
        nodes {
          mediaRecommendation {
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
              large
            }
          }
        }
      }
      externalLinks {
        url
        site
      }
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
