import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CountryCode: { input: any; output: any; }
  FuzzyDateInt: { input: any; output: any; }
  Json: { input: any; output: any; }
};

/** Notification for when a activity is liked */
export type ActivityLikeNotification = {
  __typename?: 'ActivityLikeNotification';
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity which was liked */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who liked the activity */
  user?: Maybe<User>;
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
};

/** Notification for when authenticated user is @ mentioned in activity or reply */
export type ActivityMentionNotification = {
  __typename?: 'ActivityMentionNotification';
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity where mentioned */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<User>;
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int']['output'];
};

/** Notification for when a user is send an activity message */
export type ActivityMessageNotification = {
  __typename?: 'ActivityMessageNotification';
  /** The id of the activity message */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The message activity */
  message?: Maybe<MessageActivity>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who sent the message */
  user?: Maybe<User>;
  /** The if of the user who send the message */
  userId: Scalars['Int']['output'];
};

/** Replay to an activity item */
export type ActivityReply = {
  __typename?: 'ActivityReply';
  /** The id of the parent activity */
  activityId?: Maybe<Scalars['Int']['output']>;
  /** The time the reply was created at */
  createdAt: Scalars['Int']['output'];
  /** The id of the reply */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the reply */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the reply has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the reply */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The reply text */
  text?: Maybe<Scalars['String']['output']>;
  /** The user who created reply */
  user?: Maybe<User>;
  /** The id of the replies creator */
  userId?: Maybe<Scalars['Int']['output']>;
};


/** Replay to an activity item */
export type ActivityReplyTextArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Notification for when a activity reply is liked */
export type ActivityReplyLikeNotification = {
  __typename?: 'ActivityReplyLikeNotification';
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity where the reply which was liked */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who liked the activity reply */
  user?: Maybe<User>;
  /** The id of the user who liked to the activity reply */
  userId: Scalars['Int']['output'];
};

/** Notification for when a user replies to the authenticated users activity */
export type ActivityReplyNotification = {
  __typename?: 'ActivityReplyNotification';
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity which was replied too */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
  /** The id of the user who replied to the activity */
  userId: Scalars['Int']['output'];
};

/** Notification for when a user replies to activity the authenticated user has replied to */
export type ActivityReplySubscribedNotification = {
  __typename?: 'ActivityReplySubscribedNotification';
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity which was replied too */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
  /** The id of the user who replied to the activity */
  userId: Scalars['Int']['output'];
};

/** Activity sort enums */
export enum ActivitySort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Pinned = 'PINNED'
}

/** Activity type enum. */
export enum ActivityType {
  /** A anime list update activity */
  AnimeList = 'ANIME_LIST',
  /** A manga list update activity */
  MangaList = 'MANGA_LIST',
  /** Anime & Manga list update, only used in query arguments */
  MediaList = 'MEDIA_LIST',
  /** A text message activity sent to another user */
  Message = 'MESSAGE',
  /** A text activity */
  Text = 'TEXT'
}

/** Activity union type */
export type ActivityUnion = ListActivity | MessageActivity | TextActivity;

/** Notification for when an episode of anime airs */
export type AiringNotification = {
  __typename?: 'AiringNotification';
  /** The id of the aired anime */
  animeId: Scalars['Int']['output'];
  /** The notification context text */
  contexts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The episode number that just aired */
  episode: Scalars['Int']['output'];
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The associated media of the airing schedule */
  media?: Maybe<Media>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** Score & Watcher stats for airing anime by episode and mid-week */
export type AiringProgression = {
  __typename?: 'AiringProgression';
  /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
  episode?: Maybe<Scalars['Float']['output']>;
  /** The average score for the media */
  score?: Maybe<Scalars['Float']['output']>;
  /** The amount of users watching the anime */
  watching?: Maybe<Scalars['Int']['output']>;
};

/** Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate. */
export type AiringSchedule = {
  __typename?: 'AiringSchedule';
  /** The time the episode airs at */
  airingAt: Scalars['Int']['output'];
  /** The airing episode number */
  episode: Scalars['Int']['output'];
  /** The id of the airing schedule item */
  id: Scalars['Int']['output'];
  /** The associate media of the airing episode */
  media?: Maybe<Media>;
  /** The associate media id of the airing episode */
  mediaId: Scalars['Int']['output'];
  /** Seconds until episode starts airing */
  timeUntilAiring: Scalars['Int']['output'];
};

export type AiringScheduleConnection = {
  __typename?: 'AiringScheduleConnection';
  edges?: Maybe<Array<Maybe<AiringScheduleEdge>>>;
  nodes?: Maybe<Array<Maybe<AiringSchedule>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** AiringSchedule connection edge */
export type AiringScheduleEdge = {
  __typename?: 'AiringScheduleEdge';
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  node?: Maybe<AiringSchedule>;
};

export type AiringScheduleInput = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  timeUntilAiring?: InputMaybe<Scalars['Int']['input']>;
};

/** Airing schedule sort enums */
export enum AiringSort {
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Time = 'TIME',
  TimeDesc = 'TIME_DESC'
}

export type AniChartHighlightInput = {
  highlight?: InputMaybe<Scalars['String']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
};

export type AniChartUser = {
  __typename?: 'AniChartUser';
  highlights?: Maybe<Scalars['Json']['output']>;
  settings?: Maybe<Scalars['Json']['output']>;
  user?: Maybe<User>;
};

/** A character that features in an anime or manga */
export type Character = {
  __typename?: 'Character';
  /** The character's age. Note this is a string, not an int, it may contain further text and additional ages. */
  age?: Maybe<Scalars['String']['output']>;
  /** The characters blood type */
  bloodType?: Maybe<Scalars['String']['output']>;
  /** The character's birth date */
  dateOfBirth?: Maybe<FuzzyDate>;
  /** A general description of the character */
  description?: Maybe<Scalars['String']['output']>;
  /** The amount of user's who have favourited the character */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** The character's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The id of the character */
  id: Scalars['Int']['output'];
  /** Character images */
  image?: Maybe<CharacterImage>;
  /** If the character is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the character is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /** Media that includes the character */
  media?: Maybe<MediaConnection>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
  /** The names of the character */
  name?: Maybe<CharacterName>;
  /** The url for the character page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars['Int']['output']>;
};


/** A character that features in an anime or manga */
export type CharacterDescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A character that features in an anime or manga */
export type CharacterMediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  type?: InputMaybe<MediaType>;
};

export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  edges?: Maybe<Array<Maybe<CharacterEdge>>>;
  nodes?: Maybe<Array<Maybe<Character>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Character connection edge */
export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** The media the character is in */
  media?: Maybe<Array<Maybe<Media>>>;
  /** Media specific character name */
  name?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Character>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** The voice actors of the character with role date */
  voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
};


/** Character connection edge */
export type CharacterEdgeVoiceActorRolesArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Character connection edge */
export type CharacterEdgeVoiceActorsArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type CharacterImage = {
  __typename?: 'CharacterImage';
  /** The character's image of media at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The character's image of media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** The names of the character */
export type CharacterName = {
  __typename?: 'CharacterName';
  /** Other names the character might be referred to as */
  alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The character's given name */
  first?: Maybe<Scalars['String']['output']>;
  /** The character's first and last name */
  full?: Maybe<Scalars['String']['output']>;
  /** The character's surname */
  last?: Maybe<Scalars['String']['output']>;
  /** The character's middle name */
  middle?: Maybe<Scalars['String']['output']>;
  /** The character's full name in their native language */
  native?: Maybe<Scalars['String']['output']>;
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};

/** The names of the character */
export type CharacterNameInput = {
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The character's given name */
  first?: InputMaybe<Scalars['String']['input']>;
  /** The character's surname */
  last?: InputMaybe<Scalars['String']['input']>;
  /** The character's middle name */
  middle?: InputMaybe<Scalars['String']['input']>;
  /** The character's full name in their native language */
  native?: InputMaybe<Scalars['String']['input']>;
};

/** The role the character plays in the media */
export enum CharacterRole {
  /** A background character in the media */
  Background = 'BACKGROUND',
  /** A primary character role in the media */
  Main = 'MAIN',
  /** A supporting character role in the media */
  Supporting = 'SUPPORTING'
}

/** Character sort enums */
export enum CharacterSort {
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  /** Order manually decided by moderators */
  Relevance = 'RELEVANCE',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  SearchMatch = 'SEARCH_MATCH'
}

/** A submission for a character that features in an anime or manga */
export type CharacterSubmission = {
  __typename?: 'CharacterSubmission';
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  /** Character that the submission is referencing */
  character?: Maybe<Character>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars['Boolean']['output']>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  /** The character submission changes */
  submission?: Maybe<Character>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
};

export type CharacterSubmissionConnection = {
  __typename?: 'CharacterSubmissionConnection';
  edges?: Maybe<Array<Maybe<CharacterSubmissionEdge>>>;
  nodes?: Maybe<Array<Maybe<CharacterSubmission>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** CharacterSubmission connection edge */
export type CharacterSubmissionEdge = {
  __typename?: 'CharacterSubmissionEdge';
  node?: Maybe<CharacterSubmission>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** The submitted voice actors of the character */
  submittedVoiceActors?: Maybe<Array<Maybe<StaffSubmission>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
};

/** Deleted data type */
export type Deleted = {
  __typename?: 'Deleted';
  /** If an item has been successfully deleted */
  deleted?: Maybe<Scalars['Boolean']['output']>;
};

export enum ExternalLinkMediaType {
  Anime = 'ANIME',
  Manga = 'MANGA',
  Staff = 'STAFF'
}

export enum ExternalLinkType {
  Info = 'INFO',
  Social = 'SOCIAL',
  Streaming = 'STREAMING'
}

/** User's favourite anime, manga, characters, staff & studios */
export type Favourites = {
  __typename?: 'Favourites';
  /** Favourite anime */
  anime?: Maybe<MediaConnection>;
  /** Favourite characters */
  characters?: Maybe<CharacterConnection>;
  /** Favourite manga */
  manga?: Maybe<MediaConnection>;
  /** Favourite staff */
  staff?: Maybe<StaffConnection>;
  /** Favourite studios */
  studios?: Maybe<StudioConnection>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesAnimeArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesCharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesMangaArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStudiosArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Notification for when the authenticated user is followed by another user */
export type FollowingNotification = {
  __typename?: 'FollowingNotification';
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The liked activity */
  user?: Maybe<User>;
  /** The id of the user who followed the authenticated user */
  userId: Scalars['Int']['output'];
};

/** User's format statistics */
export type FormatStats = {
  __typename?: 'FormatStats';
  amount?: Maybe<Scalars['Int']['output']>;
  format?: Maybe<MediaFormat>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDate = {
  __typename?: 'FuzzyDate';
  /** Numeric Day (24) */
  day?: Maybe<Scalars['Int']['output']>;
  /** Numeric Month (3) */
  month?: Maybe<Scalars['Int']['output']>;
  /** Numeric Year (2017) */
  year?: Maybe<Scalars['Int']['output']>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
  /** Numeric Day (24) */
  day?: InputMaybe<Scalars['Int']['input']>;
  /** Numeric Month (3) */
  month?: InputMaybe<Scalars['Int']['input']>;
  /** Numeric Year (2017) */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** User's genre statistics */
export type GenreStats = {
  __typename?: 'GenreStats';
  amount?: Maybe<Scalars['Int']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The amount of time in minutes the genre has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** Page of data (Used for internal use only) */
export type InternalPage = {
  __typename?: 'InternalPage';
  activities?: Maybe<Array<Maybe<ActivityUnion>>>;
  activityReplies?: Maybe<Array<Maybe<ActivityReply>>>;
  airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>;
  characterSubmissions?: Maybe<Array<Maybe<CharacterSubmission>>>;
  characters?: Maybe<Array<Maybe<Character>>>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  likes?: Maybe<Array<Maybe<User>>>;
  media?: Maybe<Array<Maybe<Media>>>;
  mediaList?: Maybe<Array<Maybe<MediaList>>>;
  mediaSubmissions?: Maybe<Array<Maybe<MediaSubmission>>>;
  mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>;
  modActions?: Maybe<Array<Maybe<ModAction>>>;
  notifications?: Maybe<Array<Maybe<NotificationUnion>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
  recommendations?: Maybe<Array<Maybe<Recommendation>>>;
  reports?: Maybe<Array<Maybe<Report>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  revisionHistory?: Maybe<Array<Maybe<RevisionHistory>>>;
  staff?: Maybe<Array<Maybe<Staff>>>;
  staffSubmissions?: Maybe<Array<Maybe<StaffSubmission>>>;
  studios?: Maybe<Array<Maybe<Studio>>>;
  threadComments?: Maybe<Array<Maybe<ThreadComment>>>;
  threads?: Maybe<Array<Maybe<Thread>>>;
  userBlockSearch?: Maybe<Array<Maybe<User>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageActivitiesArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageActivityRepliesArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageAiringSchedulesArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageCharacterSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  characterId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  status?: InputMaybe<SubmissionStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageCharactersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageFollowersArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};


/** Page of data (Used for internal use only) */
export type InternalPageFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};


/** Page of data (Used for internal use only) */
export type InternalPageLikesArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  status?: InputMaybe<SubmissionStatus>;
  submissionId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaTrendsArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageModActionsArgs = {
  modId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageNotificationsArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageRecommendationsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageReportsArgs = {
  reportedId?: InputMaybe<Scalars['Int']['input']>;
  reporterId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageReviewsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageRevisionHistoryArgs = {
  characterId?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  studioId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStaffSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SubmissionStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStudiosArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageThreadCommentsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageThreadsArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageUserBlockSearchArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageUsersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

/** Types that can be liked */
export enum LikeableType {
  Activity = 'ACTIVITY',
  ActivityReply = 'ACTIVITY_REPLY',
  Thread = 'THREAD',
  ThreadComment = 'THREAD_COMMENT'
}

/** Likeable union type */
export type LikeableUnion = ActivityReply | ListActivity | MessageActivity | TextActivity | Thread | ThreadComment;

/** User list activity (anime & manga updates) */
export type ListActivity = {
  __typename?: 'ListActivity';
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is pinned to the top of the users activity feed */
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The associated media to the activity update */
  media?: Maybe<Media>;
  /** The list progress made */
  progress?: Maybe<Scalars['String']['output']>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The list item's textual status */
  status?: Maybe<Scalars['String']['output']>;
  /** The type of activity */
  type?: Maybe<ActivityType>;
  /** The owner of the activity */
  user?: Maybe<User>;
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ListActivityOption = {
  __typename?: 'ListActivityOption';
  disabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<MediaListStatus>;
};

export type ListActivityOptionInput = {
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<MediaListStatus>;
};

/** User's list score statistics */
export type ListScoreStats = {
  __typename?: 'ListScoreStats';
  meanScore?: Maybe<Scalars['Int']['output']>;
  standardDeviation?: Maybe<Scalars['Int']['output']>;
};

/** Anime or Manga */
export type Media = {
  __typename?: 'Media';
  /** The media's entire airing schedule */
  airingSchedule?: Maybe<AiringScheduleConnection>;
  /** If the media should have forum thread automatically created for it on airing episode release */
  autoCreateForumThread?: Maybe<Scalars['Boolean']['output']>;
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars['Int']['output']>;
  /** The banner image of the media */
  bannerImage?: Maybe<Scalars['String']['output']>;
  /** The amount of chapters the manga has when complete */
  chapters?: Maybe<Scalars['Int']['output']>;
  /** The characters in the media */
  characters?: Maybe<CharacterConnection>;
  /** Where the media was created. (ISO 3166-1 alpha-2) */
  countryOfOrigin?: Maybe<Scalars['CountryCode']['output']>;
  /** The cover images of the media */
  coverImage?: Maybe<MediaCoverImage>;
  /** Short description of the media's story and characters */
  description?: Maybe<Scalars['String']['output']>;
  /** The general length of each anime episode in minutes */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The last official release date of the media */
  endDate?: Maybe<FuzzyDate>;
  /** The amount of episodes the anime has when complete */
  episodes?: Maybe<Scalars['Int']['output']>;
  /** External links to another site related to the media */
  externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>;
  /** The amount of user's who have favourited the media */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** The format the media was released in */
  format?: Maybe<MediaFormat>;
  /** The genres of the media */
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Official Twitter hashtags for the media */
  hashtag?: Maybe<Scalars['String']['output']>;
  /** The id of the media */
  id: Scalars['Int']['output'];
  /** The mal id of the media */
  idMal?: Maybe<Scalars['Int']['output']>;
  /** If the media is intended only for 18+ adult audiences */
  isAdult?: Maybe<Scalars['Boolean']['output']>;
  /** If the media is marked as favourite by the current authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the media is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /** If the media is officially licensed or a self-published doujin release */
  isLicensed?: Maybe<Scalars['Boolean']['output']>;
  /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the media is blocked from being recommended to/from */
  isRecommendationBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the media is blocked from being reviewed */
  isReviewBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** Mean score of all the user's scores of the media */
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The authenticated user's media list entry for the media */
  mediaListEntry?: Maybe<MediaList>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
  /** The media's next episode airing schedule */
  nextAiringEpisode?: Maybe<AiringSchedule>;
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars['Int']['output']>;
  /** The ranking of the media in a particular time span and format compared to other media */
  rankings?: Maybe<Array<Maybe<MediaRank>>>;
  /** User recommendations for similar media */
  recommendations?: Maybe<RecommendationConnection>;
  /** Other media in the same or connecting franchise */
  relations?: Maybe<MediaConnection>;
  /** User reviews of the media */
  reviews?: Maybe<ReviewConnection>;
  /** The season the media was initially released in */
  season?: Maybe<MediaSeason>;
  /**
   * The year & season the media was initially released in
   * @deprecated
   */
  seasonInt?: Maybe<Scalars['Int']['output']>;
  /** The season year the media was initially released in */
  seasonYear?: Maybe<Scalars['Int']['output']>;
  /** The url for the media page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** Source type the media was adapted from. */
  source?: Maybe<MediaSource>;
  /** The staff who produced the media */
  staff?: Maybe<StaffConnection>;
  /** The first official release date of the media */
  startDate?: Maybe<FuzzyDate>;
  stats?: Maybe<MediaStats>;
  /** The current releasing status of the media */
  status?: Maybe<MediaStatus>;
  /** Data and links to legal streaming episodes on external sites */
  streamingEpisodes?: Maybe<Array<Maybe<MediaStreamingEpisode>>>;
  /** The companies who produced the media */
  studios?: Maybe<StudioConnection>;
  /** Alternative titles of the media */
  synonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of tags that describes elements and themes of the media */
  tags?: Maybe<Array<Maybe<MediaTag>>>;
  /** The official titles of the media in various languages */
  title?: Maybe<MediaTitle>;
  /** Media trailer or advertisement */
  trailer?: Maybe<MediaTrailer>;
  /** The amount of related activity in the past hour */
  trending?: Maybe<Scalars['Int']['output']>;
  /** The media's daily trend stats */
  trends?: Maybe<MediaTrendConnection>;
  /** The type of the media; anime or manga */
  type?: Maybe<MediaType>;
  /** When the media's data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /** The amount of volumes the manga has when complete */
  volumes?: Maybe<Scalars['Int']['output']>;
};


/** Anime or Manga */
export type MediaAiringScheduleArgs = {
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediaCharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<CharacterRole>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};


/** Anime or Manga */
export type MediaDescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Anime or Manga */
export type MediaRecommendationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
};


/** Anime or Manga */
export type MediaReviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
};


/** Anime or Manga */
export type MediaSourceArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediaStaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Anime or Manga */
export type MediaStatusArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediaStudiosArgs = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};


/** Anime or Manga */
export type MediaTrendsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
};

/** Internal - Media characters separated */
export type MediaCharacter = {
  __typename?: 'MediaCharacter';
  /** The characters in the media voiced by the parent actor */
  character?: Maybe<Character>;
  /** Media specific character name */
  characterName?: Maybe<Scalars['String']['output']>;
  dubGroup?: Maybe<Scalars['String']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  roleNotes?: Maybe<Scalars['String']['output']>;
  /** The voice actor of the character */
  voiceActor?: Maybe<Staff>;
};

export type MediaConnection = {
  __typename?: 'MediaConnection';
  edges?: Maybe<Array<Maybe<MediaEdge>>>;
  nodes?: Maybe<Array<Maybe<Media>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

export type MediaCoverImage = {
  __typename?: 'MediaCoverImage';
  /** Average #hex color of cover image */
  color?: Maybe<Scalars['String']['output']>;
  /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
  extraLarge?: Maybe<Scalars['String']['output']>;
  /** The cover image url of the media at a large size */
  large?: Maybe<Scalars['String']['output']>;
  /** The cover image url of the media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** Notification for when a media entry's data was changed in a significant way impacting users' list tracking */
export type MediaDataChangeNotification = {
  __typename?: 'MediaDataChangeNotification';
  /** The reason for the media data change */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The media that received data changes */
  media?: Maybe<Media>;
  /** The id of the media that received data changes */
  mediaId: Scalars['Int']['output'];
  /** The reason for the media data change */
  reason?: Maybe<Scalars['String']['output']>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** Notification for when a media tracked in a user's list is deleted from the site */
export type MediaDeletionNotification = {
  __typename?: 'MediaDeletionNotification';
  /** The reason for the media deletion */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The title of the deleted media */
  deletedMediaTitle?: Maybe<Scalars['String']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The reason for the media deletion */
  reason?: Maybe<Scalars['String']['output']>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** Media connection edge */
export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** Media specific character name */
  characterName?: Maybe<Scalars['String']['output']>;
  /** The characters role in the media */
  characterRole?: Maybe<CharacterRole>;
  /** The characters in the media voiced by the parent actor */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup?: Maybe<Scalars['String']['output']>;
  /** The order the media should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
  isMainStudio: Scalars['Boolean']['output'];
  node?: Maybe<Media>;
  /** The type of relation to the parent model */
  relationType?: Maybe<MediaRelation>;
  /** Notes regarding the VA's role for the character */
  roleNotes?: Maybe<Scalars['String']['output']>;
  /** The role of the staff member in the production of the media */
  staffRole?: Maybe<Scalars['String']['output']>;
  /** The voice actors of the character with role date */
  voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
};


/** Media connection edge */
export type MediaEdgeRelationTypeArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** Media connection edge */
export type MediaEdgeVoiceActorRolesArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Media connection edge */
export type MediaEdgeVoiceActorsArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** An external link to another site related to the media or staff member */
export type MediaExternalLink = {
  __typename?: 'MediaExternalLink';
  color?: Maybe<Scalars['String']['output']>;
  /** The icon image url of the site. Not available for all links. Transparent PNG 64x64 */
  icon?: Maybe<Scalars['String']['output']>;
  /** The id of the external link */
  id: Scalars['Int']['output'];
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  /** Language the site content is in. See Staff language field for values. */
  language?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  /** The links website site name */
  site: Scalars['String']['output'];
  /** The links website site id */
  siteId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ExternalLinkType>;
  /** The url of the external link or base url of link source */
  url?: Maybe<Scalars['String']['output']>;
};

/** An external link to another site related to the media */
export type MediaExternalLinkInput = {
  /** The id of the external link */
  id: Scalars['Int']['input'];
  /** The site location of the external link */
  site: Scalars['String']['input'];
  /** The url of the external link */
  url: Scalars['String']['input'];
};

/** The format the media was released in */
export enum MediaFormat {
  /** Professionally published manga with more than one chapter */
  Manga = 'MANGA',
  /** Anime movies with a theatrical release */
  Movie = 'MOVIE',
  /** Short anime released as a music video */
  Music = 'MUSIC',
  /** Written books released as a series of light novels */
  Novel = 'NOVEL',
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  Ona = 'ONA',
  /** Manga with just one chapter */
  OneShot = 'ONE_SHOT',
  /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
  Ova = 'OVA',
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  Special = 'SPECIAL',
  /** Anime broadcast on television */
  Tv = 'TV',
  /** Anime which are under 15 minutes in length and broadcast on television */
  TvShort = 'TV_SHORT'
}

/** List of anime or manga */
export type MediaList = {
  __typename?: 'MediaList';
  /** Map of advanced scores with name keys */
  advancedScores?: Maybe<Scalars['Json']['output']>;
  /** When the entry was completed by the user */
  completedAt?: Maybe<FuzzyDate>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** Map of booleans for which custom lists the entry are in */
  customLists?: Maybe<Scalars['Json']['output']>;
  /** If the entry shown be hidden from non-custom lists */
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']['output']>;
  /** The id of the list entry */
  id: Scalars['Int']['output'];
  media?: Maybe<Media>;
  /** The id of the media */
  mediaId: Scalars['Int']['output'];
  /** Text notes */
  notes?: Maybe<Scalars['String']['output']>;
  /** Priority of planning */
  priority?: Maybe<Scalars['Int']['output']>;
  /** If the entry should only be visible to authenticated user */
  private?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of episodes/chapters consumed by the user */
  progress?: Maybe<Scalars['Int']['output']>;
  /** The amount of volumes read by the user */
  progressVolumes?: Maybe<Scalars['Int']['output']>;
  /** The amount of times the user has rewatched/read the media */
  repeat?: Maybe<Scalars['Int']['output']>;
  /** The score of the entry */
  score?: Maybe<Scalars['Float']['output']>;
  /** When the entry was started by the user */
  startedAt?: Maybe<FuzzyDate>;
  /** The watching/reading status */
  status?: Maybe<MediaListStatus>;
  /** When the entry data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  /** The id of the user owner of the list entry */
  userId: Scalars['Int']['output'];
};


/** List of anime or manga */
export type MediaListCustomListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};


/** List of anime or manga */
export type MediaListScoreArgs = {
  format?: InputMaybe<ScoreFormat>;
};

/** List of anime or manga */
export type MediaListCollection = {
  __typename?: 'MediaListCollection';
  /**
   * A map of media list entry arrays grouped by custom lists
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  customLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
  /** If there is another chunk */
  hasNextChunk?: Maybe<Scalars['Boolean']['output']>;
  /** Grouped media list entries */
  lists?: Maybe<Array<Maybe<MediaListGroup>>>;
  /**
   * A map of media list entry arrays grouped by status
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  statusLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
  /** The owner of the list */
  user?: Maybe<User>;
};


/** List of anime or manga */
export type MediaListCollectionCustomListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};


/** List of anime or manga */
export type MediaListCollectionStatusListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

/** List group of anime or manga entries */
export type MediaListGroup = {
  __typename?: 'MediaListGroup';
  /** Media list entries */
  entries?: Maybe<Array<Maybe<MediaList>>>;
  isCustomList?: Maybe<Scalars['Boolean']['output']>;
  isSplitCompletedList?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<MediaListStatus>;
};

/** A user's list options */
export type MediaListOptions = {
  __typename?: 'MediaListOptions';
  /** The user's anime list options */
  animeList?: Maybe<MediaListTypeOptions>;
  /** The user's manga list options */
  mangaList?: Maybe<MediaListTypeOptions>;
  /** The default order list rows should be displayed in */
  rowOrder?: Maybe<Scalars['String']['output']>;
  /** The score format the user is using for media lists */
  scoreFormat?: Maybe<ScoreFormat>;
  /**
   * The list theme options for both lists
   * @deprecated No longer used
   */
  sharedTheme?: Maybe<Scalars['Json']['output']>;
  /**
   * If the shared theme should be used instead of the individual list themes
   * @deprecated No longer used
   */
  sharedThemeEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated No longer used */
  useLegacyLists?: Maybe<Scalars['Boolean']['output']>;
};

/** A user's list options for anime or manga lists */
export type MediaListOptionsInput = {
  /** The names of the user's advanced scoring sections */
  advancedScoring?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The names of the user's custom lists */
  customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The order each list should be displayed in */
  sectionOrder?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: InputMaybe<Scalars['Boolean']['input']>;
  /** list theme */
  theme?: InputMaybe<Scalars['String']['input']>;
};

/** Media list sort enums */
export enum MediaListSort {
  AddedTime = 'ADDED_TIME',
  AddedTimeDesc = 'ADDED_TIME_DESC',
  FinishedOn = 'FINISHED_ON',
  FinishedOnDesc = 'FINISHED_ON_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  MediaPopularity = 'MEDIA_POPULARITY',
  MediaPopularityDesc = 'MEDIA_POPULARITY_DESC',
  MediaTitleEnglish = 'MEDIA_TITLE_ENGLISH',
  MediaTitleEnglishDesc = 'MEDIA_TITLE_ENGLISH_DESC',
  MediaTitleNative = 'MEDIA_TITLE_NATIVE',
  MediaTitleNativeDesc = 'MEDIA_TITLE_NATIVE_DESC',
  MediaTitleRomaji = 'MEDIA_TITLE_ROMAJI',
  MediaTitleRomajiDesc = 'MEDIA_TITLE_ROMAJI_DESC',
  Priority = 'PRIORITY',
  PriorityDesc = 'PRIORITY_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  ProgressVolumes = 'PROGRESS_VOLUMES',
  ProgressVolumesDesc = 'PROGRESS_VOLUMES_DESC',
  Repeat = 'REPEAT',
  RepeatDesc = 'REPEAT_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  StartedOn = 'STARTED_ON',
  StartedOnDesc = 'STARTED_ON_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  UpdatedTime = 'UPDATED_TIME',
  UpdatedTimeDesc = 'UPDATED_TIME_DESC'
}

/** Media list watching/reading status enum. */
export enum MediaListStatus {
  /** Finished watching/reading */
  Completed = 'COMPLETED',
  /** Currently watching/reading */
  Current = 'CURRENT',
  /** Stopped watching/reading before completing */
  Dropped = 'DROPPED',
  /** Paused watching/reading */
  Paused = 'PAUSED',
  /** Planning to watch/read */
  Planning = 'PLANNING',
  /** Re-watching/reading */
  Repeating = 'REPEATING'
}

/** A user's list options for anime or manga lists */
export type MediaListTypeOptions = {
  __typename?: 'MediaListTypeOptions';
  /** The names of the user's advanced scoring sections */
  advancedScoring?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** The names of the user's custom lists */
  customLists?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The order each list should be displayed in */
  sectionOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The list theme options
   * @deprecated This field has not yet been fully implemented and may change without warning
   */
  theme?: Maybe<Scalars['Json']['output']>;
};

/** Notification for when a media entry is merged into another for a user who had it on their list */
export type MediaMergeNotification = {
  __typename?: 'MediaMergeNotification';
  /** The reason for the media data change */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The title of the deleted media */
  deletedMediaTitles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The media that was merged into */
  media?: Maybe<Media>;
  /** The id of the media that was merged into */
  mediaId: Scalars['Int']['output'];
  /** The reason for the media merge */
  reason?: Maybe<Scalars['String']['output']>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** The ranking of a media in a particular time span and format compared to other media */
export type MediaRank = {
  __typename?: 'MediaRank';
  /** If the ranking is based on all time instead of a season/year */
  allTime?: Maybe<Scalars['Boolean']['output']>;
  /** String that gives context to the ranking type and time span */
  context: Scalars['String']['output'];
  /** The format the media is ranked within */
  format: MediaFormat;
  /** The id of the rank */
  id: Scalars['Int']['output'];
  /** The numerical rank of the media */
  rank: Scalars['Int']['output'];
  /** The season the media is ranked within */
  season?: Maybe<MediaSeason>;
  /** The type of ranking */
  type: MediaRankType;
  /** The year the media is ranked within */
  year?: Maybe<Scalars['Int']['output']>;
};

/** The type of ranking */
export enum MediaRankType {
  /** Ranking is based on the media's popularity */
  Popular = 'POPULAR',
  /** Ranking is based on the media's ratings/score */
  Rated = 'RATED'
}

/** Type of relation media has to its parent. */
export enum MediaRelation {
  /** An adaption of this media into a different format */
  Adaptation = 'ADAPTATION',
  /** An alternative version of the same media */
  Alternative = 'ALTERNATIVE',
  /** Shares at least 1 character */
  Character = 'CHARACTER',
  /** Version 2 only. */
  Compilation = 'COMPILATION',
  /** Version 2 only. */
  Contains = 'CONTAINS',
  /** Other */
  Other = 'OTHER',
  /** The media a side story is from */
  Parent = 'PARENT',
  /** Released before the relation */
  Prequel = 'PREQUEL',
  /** Released after the relation */
  Sequel = 'SEQUEL',
  /** A side story of the parent media */
  SideStory = 'SIDE_STORY',
  /** Version 2 only. The source material the media was adapted from */
  Source = 'SOURCE',
  /** An alternative version of the media with a different primary focus */
  SpinOff = 'SPIN_OFF',
  /** A shortened and summarized version */
  Summary = 'SUMMARY'
}

export enum MediaSeason {
  /** Months September to November */
  Fall = 'FALL',
  /** Months March to May */
  Spring = 'SPRING',
  /** Months June to August */
  Summer = 'SUMMER',
  /** Months December to February */
  Winter = 'WINTER'
}

/** Media sort enums */
export enum MediaSort {
  Chapters = 'CHAPTERS',
  ChaptersDesc = 'CHAPTERS_DESC',
  Duration = 'DURATION',
  DurationDesc = 'DURATION_DESC',
  EndDate = 'END_DATE',
  EndDateDesc = 'END_DATE_DESC',
  Episodes = 'EPISODES',
  EpisodesDesc = 'EPISODES_DESC',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  Format = 'FORMAT',
  FormatDesc = 'FORMAT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  StartDate = 'START_DATE',
  StartDateDesc = 'START_DATE_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  TitleEnglish = 'TITLE_ENGLISH',
  TitleEnglishDesc = 'TITLE_ENGLISH_DESC',
  TitleNative = 'TITLE_NATIVE',
  TitleNativeDesc = 'TITLE_NATIVE_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Type = 'TYPE',
  TypeDesc = 'TYPE_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Volumes = 'VOLUMES',
  VolumesDesc = 'VOLUMES_DESC'
}

/** Source type the media was adapted from */
export enum MediaSource {
  /** Version 2+ only. Japanese Anime */
  Anime = 'ANIME',
  /** Version 3 only. Comics excluding manga */
  Comic = 'COMIC',
  /** Version 2+ only. Self-published works */
  Doujinshi = 'DOUJINSHI',
  /** Version 3 only. Games excluding video games */
  Game = 'GAME',
  /** Written work published in volumes */
  LightNovel = 'LIGHT_NOVEL',
  /** Version 3 only. Live action media such as movies or TV show */
  LiveAction = 'LIVE_ACTION',
  /** Asian comic book */
  Manga = 'MANGA',
  /** Version 3 only. Multimedia project */
  MultimediaProject = 'MULTIMEDIA_PROJECT',
  /** Version 2+ only. Written works not published in volumes */
  Novel = 'NOVEL',
  /** An original production not based of another work */
  Original = 'ORIGINAL',
  /** Other */
  Other = 'OTHER',
  /** Version 3 only. Picture book */
  PictureBook = 'PICTURE_BOOK',
  /** Video game */
  VideoGame = 'VIDEO_GAME',
  /** Video game driven primary by text and narrative */
  VisualNovel = 'VISUAL_NOVEL',
  /** Version 3 only. Written works published online */
  WebNovel = 'WEB_NOVEL'
}

/** A media's statistics */
export type MediaStats = {
  __typename?: 'MediaStats';
  /** @deprecated Replaced by MediaTrends */
  airingProgression?: Maybe<Array<Maybe<AiringProgression>>>;
  scoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  statusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
};

/** The current releasing status of the media */
export enum MediaStatus {
  /** Ended before the work could be finished */
  Cancelled = 'CANCELLED',
  /** Has completed and is no longer being released */
  Finished = 'FINISHED',
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  Hiatus = 'HIATUS',
  /** To be released at a later date */
  NotYetReleased = 'NOT_YET_RELEASED',
  /** Currently releasing */
  Releasing = 'RELEASING'
}

/** Data and links to legal streaming episodes on external sites */
export type MediaStreamingEpisode = {
  __typename?: 'MediaStreamingEpisode';
  /** The site location of the streaming episodes */
  site?: Maybe<Scalars['String']['output']>;
  /** Url of episode image thumbnail */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** Title of the episode */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of the episode */
  url?: Maybe<Scalars['String']['output']>;
};

/** Media submission */
export type MediaSubmission = {
  __typename?: 'MediaSubmission';
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  changes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  characters?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  externalLinks?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars['Boolean']['output']>;
  media?: Maybe<Media>;
  notes?: Maybe<Scalars['String']['output']>;
  relations?: Maybe<Array<Maybe<MediaEdge>>>;
  source?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  studios?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  submission?: Maybe<Media>;
  /** User submitter of the submission */
  submitter?: Maybe<User>;
  submitterStats?: Maybe<Scalars['Json']['output']>;
};

/** Media submission with comparison to current data */
export type MediaSubmissionComparison = {
  __typename?: 'MediaSubmissionComparison';
  character?: Maybe<MediaCharacter>;
  externalLink?: Maybe<MediaExternalLink>;
  staff?: Maybe<StaffEdge>;
  studio?: Maybe<StudioEdge>;
  submission?: Maybe<MediaSubmissionEdge>;
};

export type MediaSubmissionEdge = {
  __typename?: 'MediaSubmissionEdge';
  character?: Maybe<Character>;
  characterName?: Maybe<Scalars['String']['output']>;
  characterRole?: Maybe<CharacterRole>;
  characterSubmission?: Maybe<Character>;
  dubGroup?: Maybe<Scalars['String']['output']>;
  externalLink?: Maybe<MediaExternalLink>;
  /** The id of the direct submission */
  id?: Maybe<Scalars['Int']['output']>;
  isMain?: Maybe<Scalars['Boolean']['output']>;
  media?: Maybe<Media>;
  roleNotes?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<Staff>;
  staffRole?: Maybe<Scalars['String']['output']>;
  staffSubmission?: Maybe<Staff>;
  studio?: Maybe<Studio>;
  voiceActor?: Maybe<Staff>;
  voiceActorSubmission?: Maybe<Staff>;
};

/** A tag that describes a theme or element of the media */
export type MediaTag = {
  __typename?: 'MediaTag';
  /** The categories of tags this tag belongs to */
  category?: Maybe<Scalars['String']['output']>;
  /** A general description of the tag */
  description?: Maybe<Scalars['String']['output']>;
  /** The id of the tag */
  id: Scalars['Int']['output'];
  /** If the tag is only for adult 18+ media */
  isAdult?: Maybe<Scalars['Boolean']['output']>;
  /** If the tag could be a spoiler for any media */
  isGeneralSpoiler?: Maybe<Scalars['Boolean']['output']>;
  /** If the tag is a spoiler for this media */
  isMediaSpoiler?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the tag */
  name: Scalars['String']['output'];
  /** The relevance ranking of the tag out of the 100 for this media */
  rank?: Maybe<Scalars['Int']['output']>;
  /** The user who submitted the tag */
  userId?: Maybe<Scalars['Int']['output']>;
};

/** The official titles of the media in various languages */
export type MediaTitle = {
  __typename?: 'MediaTitle';
  /** The official english title */
  english?: Maybe<Scalars['String']['output']>;
  /** Official title in it's native language */
  native?: Maybe<Scalars['String']['output']>;
  /** The romanization of the native language title */
  romaji?: Maybe<Scalars['String']['output']>;
  /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};


/** The official titles of the media in various languages */
export type MediaTitleEnglishArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The official titles of the media in various languages */
export type MediaTitleNativeArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The official titles of the media in various languages */
export type MediaTitleRomajiArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The official titles of the media in various languages */
export type MediaTitleInput = {
  /** The official english title */
  english?: InputMaybe<Scalars['String']['input']>;
  /** Official title in it's native language */
  native?: InputMaybe<Scalars['String']['input']>;
  /** The romanization of the native language title */
  romaji?: InputMaybe<Scalars['String']['input']>;
};

/** Media trailer or advertisement */
export type MediaTrailer = {
  __typename?: 'MediaTrailer';
  /** The trailer video id */
  id?: Maybe<Scalars['String']['output']>;
  /** The site the video is hosted by (Currently either youtube or dailymotion) */
  site?: Maybe<Scalars['String']['output']>;
  /** The url for the thumbnail image of the video */
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Daily media statistics */
export type MediaTrend = {
  __typename?: 'MediaTrend';
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars['Int']['output']>;
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int']['output'];
  /** The episode number of the anime released on this day */
  episode?: Maybe<Scalars['Int']['output']>;
  /** The number of users with watching/reading the media */
  inProgress?: Maybe<Scalars['Int']['output']>;
  /** The related media */
  media?: Maybe<Media>;
  /** The id of the tag */
  mediaId: Scalars['Int']['output'];
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars['Int']['output']>;
  /** If the media was being released at this time */
  releasing: Scalars['Boolean']['output'];
  /** The amount of media activity on the day */
  trending: Scalars['Int']['output'];
};

export type MediaTrendConnection = {
  __typename?: 'MediaTrendConnection';
  edges?: Maybe<Array<Maybe<MediaTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<MediaTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Media trend connection edge */
export type MediaTrendEdge = {
  __typename?: 'MediaTrendEdge';
  node?: Maybe<MediaTrend>;
};

/** Media trend sort enums */
export enum MediaTrendSort {
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC'
}

/** Media type enum, anime or manga. */
export enum MediaType {
  /** Japanese Anime */
  Anime = 'ANIME',
  /** Asian comic */
  Manga = 'MANGA'
}

/** User message activity */
export type MessageActivity = {
  __typename?: 'MessageActivity';
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the message is private and only viewable to the sender and recipients */
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The message text (Markdown) */
  message?: Maybe<Scalars['String']['output']>;
  /** The user who sent the activity message */
  messenger?: Maybe<User>;
  /** The user id of the activity's sender */
  messengerId?: Maybe<Scalars['Int']['output']>;
  /** The user who the activity message was sent to */
  recipient?: Maybe<User>;
  /** The user id of the activity's recipient */
  recipientId?: Maybe<Scalars['Int']['output']>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The type of the activity */
  type?: Maybe<ActivityType>;
};


/** User message activity */
export type MessageActivityMessageArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModAction = {
  __typename?: 'ModAction';
  createdAt: Scalars['Int']['output'];
  data?: Maybe<Scalars['String']['output']>;
  /** The id of the action */
  id: Scalars['Int']['output'];
  mod?: Maybe<User>;
  objectId?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ModActionType>;
  user?: Maybe<User>;
};

export enum ModActionType {
  Anon = 'ANON',
  Ban = 'BAN',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Expire = 'EXPIRE',
  Note = 'NOTE',
  Report = 'REPORT',
  Reset = 'RESET'
}

/** Mod role enums */
export enum ModRole {
  /** An AniList administrator */
  Admin = 'ADMIN',
  /** An anime data moderator */
  AnimeData = 'ANIME_DATA',
  /** A character data moderator */
  CharacterData = 'CHARACTER_DATA',
  /** A community moderator */
  Community = 'COMMUNITY',
  /** An AniList developer */
  Developer = 'DEVELOPER',
  /** A discord community moderator */
  DiscordCommunity = 'DISCORD_COMMUNITY',
  /** A lead anime data moderator */
  LeadAnimeData = 'LEAD_ANIME_DATA',
  /** A lead community moderator */
  LeadCommunity = 'LEAD_COMMUNITY',
  /** A head developer of AniList */
  LeadDeveloper = 'LEAD_DEVELOPER',
  /** A lead manga data moderator */
  LeadMangaData = 'LEAD_MANGA_DATA',
  /** A lead social media moderator */
  LeadSocialMedia = 'LEAD_SOCIAL_MEDIA',
  /** A manga data moderator */
  MangaData = 'MANGA_DATA',
  /** A retired moderator */
  Retired = 'RETIRED',
  /** A social media moderator */
  SocialMedia = 'SOCIAL_MEDIA',
  /** A staff data moderator */
  StaffData = 'STAFF_DATA'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Delete an activity item of the authenticated users */
  DeleteActivity?: Maybe<Deleted>;
  /** Delete an activity reply of the authenticated users */
  DeleteActivityReply?: Maybe<Deleted>;
  /** Delete a custom list and remove the list entries from it */
  DeleteCustomList?: Maybe<Deleted>;
  /** Delete a media list entry */
  DeleteMediaListEntry?: Maybe<Deleted>;
  /** Delete a review */
  DeleteReview?: Maybe<Deleted>;
  /** Delete a thread */
  DeleteThread?: Maybe<Deleted>;
  /** Delete a thread comment */
  DeleteThreadComment?: Maybe<Deleted>;
  /** Rate a review */
  RateReview?: Maybe<Review>;
  /** Create or update an activity reply */
  SaveActivityReply?: Maybe<ActivityReply>;
  /** Update list activity (Mod Only) */
  SaveListActivity?: Maybe<ListActivity>;
  /** Create or update a media list entry */
  SaveMediaListEntry?: Maybe<MediaList>;
  /** Create or update message activity for the currently authenticated user */
  SaveMessageActivity?: Maybe<MessageActivity>;
  /** Recommendation a media */
  SaveRecommendation?: Maybe<Recommendation>;
  /** Create or update a review */
  SaveReview?: Maybe<Review>;
  /** Create or update text activity for the currently authenticated user */
  SaveTextActivity?: Maybe<TextActivity>;
  /** Create or update a forum thread */
  SaveThread?: Maybe<Thread>;
  /** Create or update a thread comment */
  SaveThreadComment?: Maybe<ThreadComment>;
  /** Toggle activity to be pinned to the top of the user's activity feed */
  ToggleActivityPin?: Maybe<ActivityUnion>;
  /** Toggle the subscription of an activity item */
  ToggleActivitySubscription?: Maybe<ActivityUnion>;
  /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
  ToggleFavourite?: Maybe<Favourites>;
  /** Toggle the un/following of a user */
  ToggleFollow?: Maybe<User>;
  /**
   * Add or remove a like from a likeable type.
   *                           Returns all the users who liked the same model
   */
  ToggleLike?: Maybe<Array<Maybe<User>>>;
  /** Add or remove a like from a likeable type. */
  ToggleLikeV2?: Maybe<LikeableUnion>;
  /** Toggle the subscription of a forum thread */
  ToggleThreadSubscription?: Maybe<Thread>;
  UpdateAniChartHighlights?: Maybe<Scalars['Json']['output']>;
  UpdateAniChartSettings?: Maybe<Scalars['Json']['output']>;
  /** Update the order favourites are displayed in */
  UpdateFavouriteOrder?: Maybe<Favourites>;
  /** Update multiple media list entries to the same values */
  UpdateMediaListEntries?: Maybe<Array<Maybe<MediaList>>>;
  UpdateUser?: Maybe<User>;
};


export type MutationDeleteActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteActivityReplyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteCustomListArgs = {
  customList?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MediaType>;
};


export type MutationDeleteMediaListEntryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteReviewArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteThreadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteThreadCommentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRateReviewArgs = {
  rating?: InputMaybe<ReviewRating>;
  reviewId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSaveActivityReplyArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  asMod?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSaveListActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveMediaListEntryArgs = {
  advancedScores?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  completedAt?: InputMaybe<FuzzyDateInput>;
  customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hiddenFromStatusLists?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  progressVolumes?: InputMaybe<Scalars['Int']['input']>;
  repeat?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  scoreRaw?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<FuzzyDateInput>;
  status?: InputMaybe<MediaListStatus>;
};


export type MutationSaveMessageActivityArgs = {
  asMod?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  recipientId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSaveRecommendationArgs = {
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<RecommendationRating>;
};


export type MutationSaveReviewArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSaveTextActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSaveThreadArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  mediaCategories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sticky?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSaveThreadCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  parentCommentId?: InputMaybe<Scalars['Int']['input']>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationToggleActivityPinArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationToggleActivitySubscriptionArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  subscribe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationToggleFavouriteArgs = {
  animeId?: InputMaybe<Scalars['Int']['input']>;
  characterId?: InputMaybe<Scalars['Int']['input']>;
  mangaId?: InputMaybe<Scalars['Int']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  studioId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationToggleFollowArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationToggleLikeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};


export type MutationToggleLikeV2Args = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};


export type MutationToggleThreadSubscriptionArgs = {
  subscribe?: InputMaybe<Scalars['Boolean']['input']>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateAniChartHighlightsArgs = {
  highlights?: InputMaybe<Array<InputMaybe<AniChartHighlightInput>>>;
};


export type MutationUpdateAniChartSettingsArgs = {
  outgoingLinkProvider?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  titleLanguage?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFavouriteOrderArgs = {
  animeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  animeOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  characterIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  characterOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mangaIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mangaOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  staffIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  staffOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studioIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studioOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationUpdateMediaListEntriesArgs = {
  advancedScores?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  completedAt?: InputMaybe<FuzzyDateInput>;
  hiddenFromStatusLists?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  progressVolumes?: InputMaybe<Scalars['Int']['input']>;
  repeat?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  scoreRaw?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<FuzzyDateInput>;
  status?: InputMaybe<MediaListStatus>;
};


export type MutationUpdateUserArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  activityMergeTime?: InputMaybe<Scalars['Int']['input']>;
  airingNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  animeListOptions?: InputMaybe<MediaListOptionsInput>;
  disabledListActivity?: InputMaybe<Array<InputMaybe<ListActivityOptionInput>>>;
  displayAdultContent?: InputMaybe<Scalars['Boolean']['input']>;
  donatorBadge?: InputMaybe<Scalars['String']['input']>;
  mangaListOptions?: InputMaybe<MediaListOptionsInput>;
  notificationOptions?: InputMaybe<Array<InputMaybe<NotificationOptionInput>>>;
  profileColor?: InputMaybe<Scalars['String']['input']>;
  restrictMessagesToFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  rowOrder?: InputMaybe<Scalars['String']['input']>;
  scoreFormat?: InputMaybe<ScoreFormat>;
  staffNameLanguage?: InputMaybe<UserStaffNameLanguage>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  titleLanguage?: InputMaybe<UserTitleLanguage>;
};

/** Notification option */
export type NotificationOption = {
  __typename?: 'NotificationOption';
  /** Whether this type of notification is enabled */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** Notification option input */
export type NotificationOptionInput = {
  /** Whether this type of notification is enabled */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The type of notification */
  type?: InputMaybe<NotificationType>;
};

/** Notification type enum */
export enum NotificationType {
  /** A user has liked your activity */
  ActivityLike = 'ACTIVITY_LIKE',
  /** A user has mentioned you in their activity */
  ActivityMention = 'ACTIVITY_MENTION',
  /** A user has sent you message */
  ActivityMessage = 'ACTIVITY_MESSAGE',
  /** A user has replied to your activity */
  ActivityReply = 'ACTIVITY_REPLY',
  /** A user has liked your activity reply */
  ActivityReplyLike = 'ACTIVITY_REPLY_LIKE',
  /** A user has replied to activity you have also replied to */
  ActivityReplySubscribed = 'ACTIVITY_REPLY_SUBSCRIBED',
  /** An anime you are currently watching has aired */
  Airing = 'AIRING',
  /** A user has followed you */
  Following = 'FOLLOWING',
  /** An anime or manga has had a data change that affects how a user may track it in their lists */
  MediaDataChange = 'MEDIA_DATA_CHANGE',
  /** An anime or manga on the user's list has been deleted from the site */
  MediaDeletion = 'MEDIA_DELETION',
  /** Anime or manga entries on the user's list have been merged into a single entry */
  MediaMerge = 'MEDIA_MERGE',
  /** A new anime or manga has been added to the site where its related media is on the user's list */
  RelatedMediaAddition = 'RELATED_MEDIA_ADDITION',
  /** A user has liked your forum comment */
  ThreadCommentLike = 'THREAD_COMMENT_LIKE',
  /** A user has mentioned you in a forum comment */
  ThreadCommentMention = 'THREAD_COMMENT_MENTION',
  /** A user has replied to your forum comment */
  ThreadCommentReply = 'THREAD_COMMENT_REPLY',
  /** A user has liked your forum thread */
  ThreadLike = 'THREAD_LIKE',
  /** A user has commented in one of your subscribed forum threads */
  ThreadSubscribed = 'THREAD_SUBSCRIBED'
}

/** Notification union type */
export type NotificationUnion = ActivityLikeNotification | ActivityMentionNotification | ActivityMessageNotification | ActivityReplyLikeNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | AiringNotification | FollowingNotification | MediaDataChangeNotification | MediaDeletionNotification | MediaMergeNotification | RelatedMediaAdditionNotification | ThreadCommentLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadLikeNotification;

/** Page of data */
export type Page = {
  __typename?: 'Page';
  activities?: Maybe<Array<Maybe<ActivityUnion>>>;
  activityReplies?: Maybe<Array<Maybe<ActivityReply>>>;
  airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>;
  characters?: Maybe<Array<Maybe<Character>>>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  likes?: Maybe<Array<Maybe<User>>>;
  media?: Maybe<Array<Maybe<Media>>>;
  mediaList?: Maybe<Array<Maybe<MediaList>>>;
  mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>;
  notifications?: Maybe<Array<Maybe<NotificationUnion>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
  recommendations?: Maybe<Array<Maybe<Recommendation>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  staff?: Maybe<Array<Maybe<Staff>>>;
  studios?: Maybe<Array<Maybe<Studio>>>;
  threadComments?: Maybe<Array<Maybe<ThreadComment>>>;
  threads?: Maybe<Array<Maybe<Thread>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


/** Page of data */
export type PageActivitiesArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


/** Page of data */
export type PageActivityRepliesArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data */
export type PageAiringSchedulesArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};


/** Page of data */
export type PageCharactersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};


/** Page of data */
export type PageFollowersArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};


/** Page of data */
export type PageFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};


/** Page of data */
export type PageLikesArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};


/** Page of data */
export type PageMediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data */
export type PageMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Page of data */
export type PageMediaTrendsArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data */
export type PageNotificationsArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};


/** Page of data */
export type PageRecommendationsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data */
export type PageReviewsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data */
export type PageStaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Page of data */
export type PageStudiosArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};


/** Page of data */
export type PageThreadCommentsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data */
export type PageThreadsArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data */
export type PageUsersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** If there is another page */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** The last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  /** The count on a page */
  perPage?: Maybe<Scalars['Int']['output']>;
  /** The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic */
  total?: Maybe<Scalars['Int']['output']>;
};

/** Provides the parsed markdown as html */
export type ParsedMarkdown = {
  __typename?: 'ParsedMarkdown';
  /** The parsed markdown as html */
  html?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Activity query */
  Activity?: Maybe<ActivityUnion>;
  /** Activity reply query */
  ActivityReply?: Maybe<ActivityReply>;
  /** Airing schedule query */
  AiringSchedule?: Maybe<AiringSchedule>;
  AniChartUser?: Maybe<AniChartUser>;
  /** Character query */
  Character?: Maybe<Character>;
  /** ExternalLinkSource collection query */
  ExternalLinkSourceCollection?: Maybe<Array<Maybe<MediaExternalLink>>>;
  /** Follow query */
  Follower?: Maybe<User>;
  /** Follow query */
  Following?: Maybe<User>;
  /** Collection of all the possible media genres */
  GenreCollection?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Like query */
  Like?: Maybe<User>;
  /** Provide AniList markdown to be converted to html (Requires auth) */
  Markdown?: Maybe<ParsedMarkdown>;
  /** Media query */
  Media?: Maybe<Media>;
  /** Media list query */
  MediaList?: Maybe<MediaList>;
  /** Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required. */
  MediaListCollection?: Maybe<MediaListCollection>;
  /** Collection of all the possible media tags */
  MediaTagCollection?: Maybe<Array<Maybe<MediaTag>>>;
  /** Media Trend query */
  MediaTrend?: Maybe<MediaTrend>;
  /** Notification query */
  Notification?: Maybe<NotificationUnion>;
  Page?: Maybe<Page>;
  /** Recommendation query */
  Recommendation?: Maybe<Recommendation>;
  /** Review query */
  Review?: Maybe<Review>;
  /** Site statistics query */
  SiteStatistics?: Maybe<SiteStatistics>;
  /** Staff query */
  Staff?: Maybe<Staff>;
  /** Studio query */
  Studio?: Maybe<Studio>;
  /** Thread query */
  Thread?: Maybe<Thread>;
  /** Comment query */
  ThreadComment?: Maybe<Array<Maybe<ThreadComment>>>;
  /** User query */
  User?: Maybe<User>;
  /** Get the currently authenticated user */
  Viewer?: Maybe<User>;
};


export type QueryActivityArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type QueryActivityReplyArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAiringScheduleArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};


export type QueryCharacterArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};


export type QueryExternalLinkSourceCollectionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<ExternalLinkMediaType>;
  type?: InputMaybe<ExternalLinkType>;
};


export type QueryFollowerArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};


export type QueryFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};


export type QueryLikeArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};


export type QueryMarkdownArgs = {
  markdown: Scalars['String']['input'];
};


export type QueryMediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMediaListCollectionArgs = {
  chunk?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  forceSingleCompletedList?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  perChunk?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMediaTagCollectionArgs = {
  status?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMediaTrendArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNotificationArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};


export type QueryPageArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRecommendationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


export type QueryStudioArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};


export type QueryThreadArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryThreadCommentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

/** Media recommendation */
export type Recommendation = {
  __typename?: 'Recommendation';
  /** The id of the recommendation */
  id: Scalars['Int']['output'];
  /** The media the recommendation is from */
  media?: Maybe<Media>;
  /** The recommended media */
  mediaRecommendation?: Maybe<Media>;
  /** Users rating of the recommendation */
  rating?: Maybe<Scalars['Int']['output']>;
  /** The user that first created the recommendation */
  user?: Maybe<User>;
  /** The rating of the recommendation by currently authenticated user */
  userRating?: Maybe<RecommendationRating>;
};

export type RecommendationConnection = {
  __typename?: 'RecommendationConnection';
  edges?: Maybe<Array<Maybe<RecommendationEdge>>>;
  nodes?: Maybe<Array<Maybe<Recommendation>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Recommendation connection edge */
export type RecommendationEdge = {
  __typename?: 'RecommendationEdge';
  node?: Maybe<Recommendation>;
};

/** Recommendation rating enums */
export enum RecommendationRating {
  NoRating = 'NO_RATING',
  RateDown = 'RATE_DOWN',
  RateUp = 'RATE_UP'
}

/** Recommendation sort enums */
export enum RecommendationSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC'
}

/** Notification for when new media is added to the site */
export type RelatedMediaAdditionNotification = {
  __typename?: 'RelatedMediaAdditionNotification';
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The associated media of the airing schedule */
  media?: Maybe<Media>;
  /** The id of the new media */
  mediaId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

export type Report = {
  __typename?: 'Report';
  cleared?: Maybe<Scalars['Boolean']['output']>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  reported?: Maybe<User>;
  reporter?: Maybe<User>;
};

/** A Review that features in an anime or manga */
export type Review = {
  __typename?: 'Review';
  /** The main review body text */
  body?: Maybe<Scalars['String']['output']>;
  /** The time of the thread creation */
  createdAt: Scalars['Int']['output'];
  /** The id of the review */
  id: Scalars['Int']['output'];
  /** The media the review is of */
  media?: Maybe<Media>;
  /** The id of the review's media */
  mediaId: Scalars['Int']['output'];
  /** For which type of media the review is for */
  mediaType?: Maybe<MediaType>;
  /** If the review is not yet publicly published and is only viewable by creator */
  private?: Maybe<Scalars['Boolean']['output']>;
  /** The total user rating of the review */
  rating?: Maybe<Scalars['Int']['output']>;
  /** The amount of user ratings of the review */
  ratingAmount?: Maybe<Scalars['Int']['output']>;
  /** The review score of the media */
  score?: Maybe<Scalars['Int']['output']>;
  /** The url for the review page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** A short summary of the review */
  summary?: Maybe<Scalars['String']['output']>;
  /** The time of the thread last update */
  updatedAt: Scalars['Int']['output'];
  /** The creator of the review */
  user?: Maybe<User>;
  /** The id of the review's creator */
  userId: Scalars['Int']['output'];
  /** The rating of the review by currently authenticated user */
  userRating?: Maybe<ReviewRating>;
};


/** A Review that features in an anime or manga */
export type ReviewBodyArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<Review>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Review connection edge */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  node?: Maybe<Review>;
};

/** Review rating enums */
export enum ReviewRating {
  DownVote = 'DOWN_VOTE',
  NoVote = 'NO_VOTE',
  UpVote = 'UP_VOTE'
}

/** Review sort enums */
export enum ReviewSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Feed of mod edit activity */
export type RevisionHistory = {
  __typename?: 'RevisionHistory';
  /** The action taken on the objects */
  action?: Maybe<RevisionHistoryAction>;
  /** A JSON object of the fields that changed */
  changes?: Maybe<Scalars['Json']['output']>;
  /** The character the mod feed entry references */
  character?: Maybe<Character>;
  /** When the mod feed entry was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The external link source the mod feed entry references */
  externalLink?: Maybe<MediaExternalLink>;
  /** The id of the media */
  id: Scalars['Int']['output'];
  /** The media the mod feed entry references */
  media?: Maybe<Media>;
  /** The staff member the mod feed entry references */
  staff?: Maybe<Staff>;
  /** The studio the mod feed entry references */
  studio?: Maybe<Studio>;
  /** The user who made the edit to the object */
  user?: Maybe<User>;
};

/** Revision history actions */
export enum RevisionHistoryAction {
  Create = 'CREATE',
  Edit = 'EDIT'
}

/** A user's list score distribution. */
export type ScoreDistribution = {
  __typename?: 'ScoreDistribution';
  /** The amount of list entries with this score */
  amount?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** Media list scoring type */
export enum ScoreFormat {
  /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
  Point_3 = 'POINT_3',
  /** An integer from 0-5. Should be represented in Stars */
  Point_5 = 'POINT_5',
  /** An integer from 0-10 */
  Point_10 = 'POINT_10',
  /** A float from 0-10 with 1 decimal place */
  Point_10Decimal = 'POINT_10_DECIMAL',
  /** An integer from 0-100 */
  Point_100 = 'POINT_100'
}

export type SiteStatistics = {
  __typename?: 'SiteStatistics';
  anime?: Maybe<SiteTrendConnection>;
  characters?: Maybe<SiteTrendConnection>;
  manga?: Maybe<SiteTrendConnection>;
  reviews?: Maybe<SiteTrendConnection>;
  staff?: Maybe<SiteTrendConnection>;
  studios?: Maybe<SiteTrendConnection>;
  users?: Maybe<SiteTrendConnection>;
};


export type SiteStatisticsAnimeArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};


export type SiteStatisticsCharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};


export type SiteStatisticsMangaArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};


export type SiteStatisticsReviewsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};


export type SiteStatisticsStaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};


export type SiteStatisticsStudiosArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};


export type SiteStatisticsUsersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

/** Daily site statistics */
export type SiteTrend = {
  __typename?: 'SiteTrend';
  /** The change from yesterday */
  change: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int']['output'];
};

export type SiteTrendConnection = {
  __typename?: 'SiteTrendConnection';
  edges?: Maybe<Array<Maybe<SiteTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<SiteTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Site trend connection edge */
export type SiteTrendEdge = {
  __typename?: 'SiteTrendEdge';
  node?: Maybe<SiteTrend>;
};

/** Site trend sort enums */
export enum SiteTrendSort {
  Change = 'CHANGE',
  ChangeDesc = 'CHANGE_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Date = 'DATE',
  DateDesc = 'DATE_DESC'
}

/** Voice actors or production staff */
export type Staff = {
  __typename?: 'Staff';
  /** The person's age in years */
  age?: Maybe<Scalars['Int']['output']>;
  /** The persons blood type */
  bloodType?: Maybe<Scalars['String']['output']>;
  /** Media the actor voiced characters in. (Same data as characters with media as node instead of characters) */
  characterMedia?: Maybe<MediaConnection>;
  /** Characters voiced by the actor */
  characters?: Maybe<CharacterConnection>;
  dateOfBirth?: Maybe<FuzzyDate>;
  dateOfDeath?: Maybe<FuzzyDate>;
  /** A general description of the staff member */
  description?: Maybe<Scalars['String']['output']>;
  /** The amount of user's who have favourited the staff member */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** The staff's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The persons birthplace or hometown */
  homeTown?: Maybe<Scalars['String']['output']>;
  /** The id of the staff member */
  id: Scalars['Int']['output'];
  /** The staff images */
  image?: Maybe<StaffImage>;
  /** If the staff member is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the staff member is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /**
   * The primary language the staff member dub's in
   * @deprecated Replaced with languageV2
   */
  language?: Maybe<StaffLanguage>;
  /** The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu */
  languageV2?: Maybe<Scalars['String']['output']>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
  /** The names of the staff member */
  name?: Maybe<StaffName>;
  /** The person's primary occupations */
  primaryOccupations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The url for the staff page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** Staff member that the submission is referencing */
  staff?: Maybe<Staff>;
  /** Media where the staff member has a production role */
  staffMedia?: Maybe<MediaConnection>;
  /** Inner details of submission status */
  submissionNotes?: Maybe<Scalars['String']['output']>;
  /** Status of the submission */
  submissionStatus?: Maybe<Scalars['Int']['output']>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /** [startYear, endYear] (If the 2nd value is not present staff is still active) */
  yearsActive?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};


/** Voice actors or production staff */
export type StaffCharacterMediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};


/** Voice actors or production staff */
export type StaffCharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};


/** Voice actors or production staff */
export type StaffDescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Voice actors or production staff */
export type StaffStaffMediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  type?: InputMaybe<MediaType>;
};

export type StaffConnection = {
  __typename?: 'StaffConnection';
  edges?: Maybe<Array<Maybe<StaffEdge>>>;
  nodes?: Maybe<Array<Maybe<Staff>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Staff connection edge */
export type StaffEdge = {
  __typename?: 'StaffEdge';
  /** The order the staff should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  node?: Maybe<Staff>;
  /** The role of the staff member in the production of the media */
  role?: Maybe<Scalars['String']['output']>;
};

export type StaffImage = {
  __typename?: 'StaffImage';
  /** The person's image of media at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The person's image of media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** The primary language of the voice actor */
export enum StaffLanguage {
  /** English */
  English = 'ENGLISH',
  /** French */
  French = 'FRENCH',
  /** German */
  German = 'GERMAN',
  /** Hebrew */
  Hebrew = 'HEBREW',
  /** Hungarian */
  Hungarian = 'HUNGARIAN',
  /** Italian */
  Italian = 'ITALIAN',
  /** Japanese */
  Japanese = 'JAPANESE',
  /** Korean */
  Korean = 'KOREAN',
  /** Portuguese */
  Portuguese = 'PORTUGUESE',
  /** Spanish */
  Spanish = 'SPANISH'
}

/** The names of the staff member */
export type StaffName = {
  __typename?: 'StaffName';
  /** Other names the staff member might be referred to as (pen names) */
  alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The person's given name */
  first?: Maybe<Scalars['String']['output']>;
  /** The person's first and last name */
  full?: Maybe<Scalars['String']['output']>;
  /** The person's surname */
  last?: Maybe<Scalars['String']['output']>;
  /** The person's middle name */
  middle?: Maybe<Scalars['String']['output']>;
  /** The person's full name in their native language */
  native?: Maybe<Scalars['String']['output']>;
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};

/** The names of the staff member */
export type StaffNameInput = {
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The person's given name */
  first?: InputMaybe<Scalars['String']['input']>;
  /** The person's surname */
  last?: InputMaybe<Scalars['String']['input']>;
  /** The person's middle name */
  middle?: InputMaybe<Scalars['String']['input']>;
  /** The person's full name in their native language */
  native?: InputMaybe<Scalars['String']['input']>;
};

/** Voice actor role for a character */
export type StaffRoleType = {
  __typename?: 'StaffRoleType';
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup?: Maybe<Scalars['String']['output']>;
  /** Notes regarding the VA's role for the character */
  roleNotes?: Maybe<Scalars['String']['output']>;
  /** The voice actors of the character */
  voiceActor?: Maybe<Staff>;
};

/** Staff sort enums */
export enum StaffSort {
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Language = 'LANGUAGE',
  LanguageDesc = 'LANGUAGE_DESC',
  /** Order manually decided by moderators */
  Relevance = 'RELEVANCE',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  SearchMatch = 'SEARCH_MATCH'
}

/** User's staff statistics */
export type StaffStats = {
  __typename?: 'StaffStats';
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  staff?: Maybe<Staff>;
  /** The amount of time in minutes the staff member has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** A submission for a staff that features in an anime or manga */
export type StaffSubmission = {
  __typename?: 'StaffSubmission';
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars['Boolean']['output']>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  /** Staff that the submission is referencing */
  staff?: Maybe<Staff>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  /** The staff submission changes */
  submission?: Maybe<Staff>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
};

/** The distribution of the watching/reading status of media or a user's list */
export type StatusDistribution = {
  __typename?: 'StatusDistribution';
  /** The amount of entries with this status */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The day the activity took place (Unix timestamp) */
  status?: Maybe<MediaListStatus>;
};

/** Animation or production company */
export type Studio = {
  __typename?: 'Studio';
  /** The amount of user's who have favourited the studio */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** The id of the studio */
  id: Scalars['Int']['output'];
  /** If the studio is an animation studio or a different kind of company */
  isAnimationStudio: Scalars['Boolean']['output'];
  /** If the studio is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** The media the studio has worked on */
  media?: Maybe<MediaConnection>;
  /** The name of the studio */
  name: Scalars['String']['output'];
  /** The url for the studio page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
};


/** Animation or production company */
export type StudioMediaArgs = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};

export type StudioConnection = {
  __typename?: 'StudioConnection';
  edges?: Maybe<Array<Maybe<StudioEdge>>>;
  nodes?: Maybe<Array<Maybe<Studio>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Studio connection edge */
export type StudioEdge = {
  __typename?: 'StudioEdge';
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** If the studio is the main animation studio of the anime */
  isMain: Scalars['Boolean']['output'];
  node?: Maybe<Studio>;
};

/** Studio sort enums */
export enum StudioSort {
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC',
  SearchMatch = 'SEARCH_MATCH'
}

/** User's studio statistics */
export type StudioStats = {
  __typename?: 'StudioStats';
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  studio?: Maybe<Studio>;
  /** The amount of time in minutes the studio's works have been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** Submission sort enums */
export enum SubmissionSort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

/** Submission status */
export enum SubmissionStatus {
  Accepted = 'ACCEPTED',
  PartiallyAccepted = 'PARTIALLY_ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

/** User's tag statistics */
export type TagStats = {
  __typename?: 'TagStats';
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<MediaTag>;
  /** The amount of time in minutes the tag has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** User text activity */
export type TextActivity = {
  __typename?: 'TextActivity';
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is pinned to the top of the users activity feed */
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The status text (Markdown) */
  text?: Maybe<Scalars['String']['output']>;
  /** The type of activity */
  type?: Maybe<ActivityType>;
  /** The user who created the activity */
  user?: Maybe<User>;
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars['Int']['output']>;
};


/** User text activity */
export type TextActivityTextArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Forum Thread */
export type Thread = {
  __typename?: 'Thread';
  /** The text body of the thread (Markdown) */
  body?: Maybe<Scalars['String']['output']>;
  /** The categories of the thread */
  categories?: Maybe<Array<Maybe<ThreadCategory>>>;
  /** The time of the thread creation */
  createdAt: Scalars['Int']['output'];
  /** The id of the thread */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the thread */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the thread is locked and can receive comments */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the thread is stickied and should be displayed at the top of the page */
  isSticky?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the thread */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the thread has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the thread */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The media categories of the thread */
  mediaCategories?: Maybe<Array<Maybe<Media>>>;
  /** The time of the last reply */
  repliedAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the most recent comment on the thread */
  replyCommentId?: Maybe<Scalars['Int']['output']>;
  /** The number of comments on the thread */
  replyCount?: Maybe<Scalars['Int']['output']>;
  /** The user to last reply to the thread */
  replyUser?: Maybe<User>;
  /** The id of the user who most recently commented on the thread */
  replyUserId?: Maybe<Scalars['Int']['output']>;
  /** The url for the thread page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The title of the thread */
  title?: Maybe<Scalars['String']['output']>;
  /** The time of the thread last update */
  updatedAt: Scalars['Int']['output'];
  /** The owner of the thread */
  user?: Maybe<User>;
  /** The id of the thread owner user */
  userId: Scalars['Int']['output'];
  /** The number of times users have viewed the thread */
  viewCount?: Maybe<Scalars['Int']['output']>;
};


/** Forum Thread */
export type ThreadBodyArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A forum thread category */
export type ThreadCategory = {
  __typename?: 'ThreadCategory';
  /** The id of the category */
  id: Scalars['Int']['output'];
  /** The name of the category */
  name: Scalars['String']['output'];
};

/** Forum Thread Comment */
export type ThreadComment = {
  __typename?: 'ThreadComment';
  /** The comment's child reply comments */
  childComments?: Maybe<Scalars['Json']['output']>;
  /** The text content of the comment (Markdown) */
  comment?: Maybe<Scalars['String']['output']>;
  /** The time of the comments creation */
  createdAt: Scalars['Int']['output'];
  /** The id of the comment */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the comment */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the comment tree is locked and may not receive replies or edits */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the comment has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the comment */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The url for the comment page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The thread the comment belongs to */
  thread?: Maybe<Thread>;
  /** The id of thread the comment belongs to */
  threadId?: Maybe<Scalars['Int']['output']>;
  /** The time of the comments last update */
  updatedAt: Scalars['Int']['output'];
  /** The user who created the comment */
  user?: Maybe<User>;
  /** The user id of the comment's owner */
  userId?: Maybe<Scalars['Int']['output']>;
};


/** Forum Thread Comment */
export type ThreadCommentCommentArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Notification for when a thread comment is liked */
export type ThreadCommentLikeNotification = {
  __typename?: 'ThreadCommentLikeNotification';
  /** The thread comment that was liked */
  comment?: Maybe<ThreadComment>;
  /** The id of the activity which was liked */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who liked the activity */
  user?: Maybe<User>;
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
};

/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export type ThreadCommentMentionNotification = {
  __typename?: 'ThreadCommentMentionNotification';
  /** The thread comment that included the @ mention */
  comment?: Maybe<ThreadComment>;
  /** The id of the comment where mentioned */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<User>;
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int']['output'];
};

/** Notification for when a user replies to your forum thread comment */
export type ThreadCommentReplyNotification = {
  __typename?: 'ThreadCommentReplyNotification';
  /** The reply thread comment */
  comment?: Maybe<ThreadComment>;
  /** The id of the reply comment */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
  /** The id of the user who create the comment reply */
  userId: Scalars['Int']['output'];
};

/** Thread comments sort enums */
export enum ThreadCommentSort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

/** Notification for when a user replies to a subscribed forum thread */
export type ThreadCommentSubscribedNotification = {
  __typename?: 'ThreadCommentSubscribedNotification';
  /** The reply thread comment */
  comment?: Maybe<ThreadComment>;
  /** The id of the new comment in the subscribed thread */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who replied to the subscribed thread */
  user?: Maybe<User>;
  /** The id of the user who commented on the thread */
  userId: Scalars['Int']['output'];
};

/** Notification for when a thread is liked */
export type ThreadLikeNotification = {
  __typename?: 'ThreadLikeNotification';
  /** The liked thread comment */
  comment?: Maybe<ThreadComment>;
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The id of the thread which was liked */
  threadId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who liked the activity */
  user?: Maybe<User>;
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
};

/** Thread sort enums */
export enum ThreadSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  IsSticky = 'IS_STICKY',
  RepliedAt = 'REPLIED_AT',
  RepliedAtDesc = 'REPLIED_AT_DESC',
  ReplyCount = 'REPLY_COUNT',
  ReplyCountDesc = 'REPLY_COUNT_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Title = 'TITLE',
  TitleDesc = 'TITLE_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ViewCount = 'VIEW_COUNT',
  ViewCountDesc = 'VIEW_COUNT_DESC'
}

/** A user */
export type User = {
  __typename?: 'User';
  /** The bio written by user (Markdown) */
  about?: Maybe<Scalars['String']['output']>;
  /** The user's avatar images */
  avatar?: Maybe<UserAvatar>;
  /** The user's banner images */
  bannerImage?: Maybe<Scalars['String']['output']>;
  bans?: Maybe<Scalars['Json']['output']>;
  /** When the user's account was created. (Does not exist for accounts created before 2020) */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** Custom donation badge text */
  donatorBadge?: Maybe<Scalars['String']['output']>;
  /** The donation tier of the user */
  donatorTier?: Maybe<Scalars['Int']['output']>;
  /** The users favourites */
  favourites?: Maybe<Favourites>;
  /** The id of the user */
  id: Scalars['Int']['output'];
  /** If the user is blocked by the authenticated user */
  isBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** If this user if following the authenticated user */
  isFollower?: Maybe<Scalars['Boolean']['output']>;
  /** If the authenticated user if following this user */
  isFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** The user's media list options */
  mediaListOptions?: Maybe<MediaListOptions>;
  /** The user's moderator roles if they are a site moderator */
  moderatorRoles?: Maybe<Array<Maybe<ModRole>>>;
  /**
   * If the user is a moderator or data moderator
   * @deprecated Deprecated. Replaced with moderatorRoles field.
   */
  moderatorStatus?: Maybe<Scalars['String']['output']>;
  /** The name of the user */
  name: Scalars['String']['output'];
  /** The user's general options */
  options?: Maybe<UserOptions>;
  /** The user's previously used names. */
  previousNames?: Maybe<Array<Maybe<UserPreviousName>>>;
  /** The url for the user page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The users anime & manga list statistics */
  statistics?: Maybe<UserStatisticTypes>;
  /**
   * The user's statistics
   * @deprecated Deprecated. Replaced with statistics field.
   */
  stats?: Maybe<UserStats>;
  /** The number of unread notifications the user has */
  unreadNotificationCount?: Maybe<Scalars['Int']['output']>;
  /** When the user's data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
};


/** A user */
export type UserAboutArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A user */
export type UserFavouritesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** A user's activity history stats. */
export type UserActivityHistory = {
  __typename?: 'UserActivityHistory';
  /** The amount of activity on the day */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The day the activity took place (Unix timestamp) */
  date?: Maybe<Scalars['Int']['output']>;
  /** The level of activity represented on a 1-10 scale */
  level?: Maybe<Scalars['Int']['output']>;
};

/** A user's avatars */
export type UserAvatar = {
  __typename?: 'UserAvatar';
  /** The avatar of user at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The avatar of user at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

export type UserCountryStatistic = {
  __typename?: 'UserCountryStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  country?: Maybe<Scalars['CountryCode']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type UserFormatStatistic = {
  __typename?: 'UserFormatStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  format?: Maybe<MediaFormat>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type UserGenreStatistic = {
  __typename?: 'UserGenreStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  genre?: Maybe<Scalars['String']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type UserLengthStatistic = {
  __typename?: 'UserLengthStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  length?: Maybe<Scalars['String']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

/** User data for moderators */
export type UserModData = {
  __typename?: 'UserModData';
  alts?: Maybe<Array<Maybe<User>>>;
  bans?: Maybe<Scalars['Json']['output']>;
  counts?: Maybe<Scalars['Json']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['Json']['output']>;
  privacy?: Maybe<Scalars['Int']['output']>;
};

/** A user's general options */
export type UserOptions = {
  __typename?: 'UserOptions';
  /** Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. */
  activityMergeTime?: Maybe<Scalars['Int']['output']>;
  /** Whether the user receives notifications when a show they are watching aires */
  airingNotifications?: Maybe<Scalars['Boolean']['output']>;
  /** The list activity types the user has disabled from being created from list updates */
  disabledListActivity?: Maybe<Array<Maybe<ListActivityOption>>>;
  /** Whether the user has enabled viewing of 18+ content */
  displayAdultContent?: Maybe<Scalars['Boolean']['output']>;
  /** Notification options */
  notificationOptions?: Maybe<Array<Maybe<NotificationOption>>>;
  /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
  profileColor?: Maybe<Scalars['String']['output']>;
  /** Whether the user only allow messages from users they follow */
  restrictMessagesToFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** The language the user wants to see staff and character names in */
  staffNameLanguage?: Maybe<UserStaffNameLanguage>;
  /** The user's timezone offset (Auth user only) */
  timezone?: Maybe<Scalars['String']['output']>;
  /** The language the user wants to see media titles in */
  titleLanguage?: Maybe<UserTitleLanguage>;
};

/** A user's previous name */
export type UserPreviousName = {
  __typename?: 'UserPreviousName';
  /** When the user first changed from this name. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** A previous name of the user. */
  name?: Maybe<Scalars['String']['output']>;
  /** When the user most recently changed from this name. */
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type UserReleaseYearStatistic = {
  __typename?: 'UserReleaseYearStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  releaseYear?: Maybe<Scalars['Int']['output']>;
};

export type UserScoreStatistic = {
  __typename?: 'UserScoreStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  score?: Maybe<Scalars['Int']['output']>;
};

/** User sort enums */
export enum UserSort {
  ChaptersRead = 'CHAPTERS_READ',
  ChaptersReadDesc = 'CHAPTERS_READ_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Username = 'USERNAME',
  UsernameDesc = 'USERNAME_DESC',
  WatchedTime = 'WATCHED_TIME',
  WatchedTimeDesc = 'WATCHED_TIME_DESC'
}

/** The language the user wants to see staff and character names in */
export enum UserStaffNameLanguage {
  /** The staff or character's name in their native language */
  Native = 'NATIVE',
  /** The romanization of the staff or character's native name */
  Romaji = 'ROMAJI',
  /** The romanization of the staff or character's native name, with western name ordering */
  RomajiWestern = 'ROMAJI_WESTERN'
}

export type UserStaffStatistic = {
  __typename?: 'UserStaffStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  staff?: Maybe<Staff>;
};

export type UserStartYearStatistic = {
  __typename?: 'UserStartYearStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  startYear?: Maybe<Scalars['Int']['output']>;
};

export type UserStatisticTypes = {
  __typename?: 'UserStatisticTypes';
  anime?: Maybe<UserStatistics>;
  manga?: Maybe<UserStatistics>;
};

export type UserStatistics = {
  __typename?: 'UserStatistics';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  countries?: Maybe<Array<Maybe<UserCountryStatistic>>>;
  episodesWatched: Scalars['Int']['output'];
  formats?: Maybe<Array<Maybe<UserFormatStatistic>>>;
  genres?: Maybe<Array<Maybe<UserGenreStatistic>>>;
  lengths?: Maybe<Array<Maybe<UserLengthStatistic>>>;
  meanScore: Scalars['Float']['output'];
  minutesWatched: Scalars['Int']['output'];
  releaseYears?: Maybe<Array<Maybe<UserReleaseYearStatistic>>>;
  scores?: Maybe<Array<Maybe<UserScoreStatistic>>>;
  staff?: Maybe<Array<Maybe<UserStaffStatistic>>>;
  standardDeviation: Scalars['Float']['output'];
  startYears?: Maybe<Array<Maybe<UserStartYearStatistic>>>;
  statuses?: Maybe<Array<Maybe<UserStatusStatistic>>>;
  studios?: Maybe<Array<Maybe<UserStudioStatistic>>>;
  tags?: Maybe<Array<Maybe<UserTagStatistic>>>;
  voiceActors?: Maybe<Array<Maybe<UserVoiceActorStatistic>>>;
  volumesRead: Scalars['Int']['output'];
};


export type UserStatisticsCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsFormatsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsGenresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsLengthsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsReleaseYearsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsScoresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsStaffArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsStartYearsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsStudiosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};


export type UserStatisticsVoiceActorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

/** User statistics sort enum */
export enum UserStatisticsSort {
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MeanScore = 'MEAN_SCORE',
  MeanScoreDesc = 'MEAN_SCORE_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC'
}

/** A user's statistics */
export type UserStats = {
  __typename?: 'UserStats';
  activityHistory?: Maybe<Array<Maybe<UserActivityHistory>>>;
  animeListScores?: Maybe<ListScoreStats>;
  animeScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  animeStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
  /** The amount of manga chapters the user has read */
  chaptersRead?: Maybe<Scalars['Int']['output']>;
  favouredActors?: Maybe<Array<Maybe<StaffStats>>>;
  favouredFormats?: Maybe<Array<Maybe<FormatStats>>>;
  favouredGenres?: Maybe<Array<Maybe<GenreStats>>>;
  favouredGenresOverview?: Maybe<Array<Maybe<GenreStats>>>;
  favouredStaff?: Maybe<Array<Maybe<StaffStats>>>;
  favouredStudios?: Maybe<Array<Maybe<StudioStats>>>;
  favouredTags?: Maybe<Array<Maybe<TagStats>>>;
  favouredYears?: Maybe<Array<Maybe<YearStats>>>;
  mangaListScores?: Maybe<ListScoreStats>;
  mangaScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  mangaStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
  /** The amount of anime the user has watched in minutes */
  watchedTime?: Maybe<Scalars['Int']['output']>;
};

export type UserStatusStatistic = {
  __typename?: 'UserStatusStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  status?: Maybe<MediaListStatus>;
};

export type UserStudioStatistic = {
  __typename?: 'UserStudioStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  studio?: Maybe<Studio>;
};

export type UserTagStatistic = {
  __typename?: 'UserTagStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  tag?: Maybe<MediaTag>;
};

/** The language the user wants to see media titles in */
export enum UserTitleLanguage {
  /** The official english title */
  English = 'ENGLISH',
  /** The official english title, stylised by media creator */
  EnglishStylised = 'ENGLISH_STYLISED',
  /** Official title in it's native language */
  Native = 'NATIVE',
  /** Official title in it's native language, stylised by media creator */
  NativeStylised = 'NATIVE_STYLISED',
  /** The romanization of the native language title */
  Romaji = 'ROMAJI',
  /** The romanization of the native language title, stylised by media creator */
  RomajiStylised = 'ROMAJI_STYLISED'
}

export type UserVoiceActorStatistic = {
  __typename?: 'UserVoiceActorStatistic';
  chaptersRead: Scalars['Int']['output'];
  characterIds: Array<Maybe<Scalars['Int']['output']>>;
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  voiceActor?: Maybe<Staff>;
};

/** User's year statistics */
export type YearStats = {
  __typename?: 'YearStats';
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type CharacterFragment = { __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null };

export type CharacterMediaFragment = { __typename?: 'CharacterConnection', edges?: Array<{ __typename?: 'CharacterEdge', role?: CharacterRole | null, voiceActors?: Array<{ __typename?: 'Staff', id: number, languageV2?: string | null, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null } | null> | null, node?: { __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null } | null } | null> | null };

export type AnimeFavouritesFragment = { __typename?: 'MediaConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null } | null> | null };

export type MangaFavouritesFragment = { __typename?: 'MediaConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null } | null> | null };

export type CharacterFavouritesFragment = { __typename?: 'CharacterConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null } | null> | null };

export type StaffFavouritesFragment = { __typename?: 'StaffConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Staff', id: number, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null } | null> | null };

export type StudioFavouritesFragment = { __typename?: 'StudioConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Studio', id: number, name: string } | null> | null };

export type MediaCardFragment = { __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null };

export type MediaFragment = { __typename?: 'Media', id: number, favourites?: number | null, popularity?: number | null, status?: MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, source?: MediaSource | null, format?: MediaFormat | null, genres?: Array<string | null> | null, countryOfOrigin?: any | null, season?: MediaSeason | null, seasonYear?: number | null, synonyms?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, trailer?: { __typename?: 'MediaTrailer', site?: string | null, id?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null, tags?: Array<{ __typename?: 'MediaTag', name: string, rank?: number | null, isMediaSpoiler?: boolean | null } | null> | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, studios?: { __typename?: 'StudioConnection', nodes?: Array<{ __typename?: 'Studio', id: number, name: string, siteUrl?: string | null } | null> | null } | null };

export type MediaListCollectionFragment = { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, isCustomList?: boolean | null, isCompletedList?: boolean | null, entries?: Array<{ __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null> | null } | null> | null, user?: { __typename?: 'User', mediaListOptions?: { __typename?: 'MediaListOptions', scoreFormat?: ScoreFormat | null, rowOrder?: string | null, animeList?: { __typename?: 'MediaListTypeOptions', sectionOrder?: Array<string | null> | null, customLists?: Array<string | null> | null, splitCompletedSectionByFormat?: boolean | null, theme?: any | null } | null, mangaList?: { __typename?: 'MediaListTypeOptions', sectionOrder?: Array<string | null> | null, customLists?: Array<string | null> | null, splitCompletedSectionByFormat?: boolean | null, theme?: any | null } | null } | null } | null };

export type MediaListEntryFragment = { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null };

export type StaffFragment = { __typename?: 'Staff', id: number, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null };

export type StudioFragment = { __typename?: 'Studio', id: number, name: string };

export type UserFragment = { __typename?: 'User', id: number, name: string, bannerImage?: string | null, about?: string | null, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null };

export type ToggleFavouritesMutationVariables = Exact<{
  animeId?: InputMaybe<Scalars['Int']['input']>;
  mangaId?: InputMaybe<Scalars['Int']['input']>;
  characterId?: InputMaybe<Scalars['Int']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  studioId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ToggleFavouritesMutation = { __typename?: 'Mutation', ToggleFavourite?: { __typename?: 'Favourites', anime?: { __typename?: 'MediaConnection', nodes?: Array<{ __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null } | null> | null } | null, manga?: { __typename?: 'MediaConnection', nodes?: Array<{ __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null } | null> | null } | null, characters?: { __typename?: 'CharacterConnection', nodes?: Array<{ __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null } | null> | null } | null, staff?: { __typename?: 'StaffConnection', nodes?: Array<{ __typename?: 'Staff', id: number, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null } | null> | null } | null, studios?: { __typename?: 'StudioConnection', nodes?: Array<{ __typename?: 'Studio', id: number, name: string } | null> | null } | null } | null };

export type LikeListActivityMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LikeListActivityMutation = { __typename?: 'Mutation', ToggleLikeV2?: { __typename: 'ActivityReply' } | { __typename: 'ListActivity', likeCount: number, isLiked?: boolean | null } | { __typename: 'MessageActivity' } | { __typename: 'TextActivity' } | { __typename: 'Thread' } | { __typename: 'ThreadComment' } | null };

export type DeleteMediaListEntryMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteMediaListEntryMutation = { __typename?: 'Mutation', DeleteMediaListEntry?: { __typename?: 'Deleted', deleted?: boolean | null } | null };

export type SaveMediaListEntryMutationVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<MediaListStatus>;
  scoreRaw?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  progressVolumes?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  repeat?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<FuzzyDateInput>;
  completedAt?: InputMaybe<FuzzyDateInput>;
}>;


export type SaveMediaListEntryMutation = { __typename?: 'Mutation', SaveMediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null };

export type UpdateMediaListEntriesMutationVariables = Exact<{
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  status?: InputMaybe<MediaListStatus>;
  scoreRaw?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  progressVolumes?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  repeat?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<FuzzyDateInput>;
  completedAt?: InputMaybe<FuzzyDateInput>;
}>;


export type UpdateMediaListEntriesMutation = { __typename?: 'Mutation', UpdateMediaListEntries?: Array<{ __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null> | null };

export type RateReviewMutationVariables = Exact<{
  reviewId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<ReviewRating>;
}>;


export type RateReviewMutation = { __typename?: 'Mutation', RateReview?: { __typename?: 'Review', rating?: number | null, ratingAmount?: number | null, userRating?: ReviewRating | null } | null };

export type FollowMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FollowMutation = { __typename?: 'Mutation', ToggleFollow?: { __typename?: 'User', isFollowing?: boolean | null } | null };

export type GetReviewQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetReviewQuery = { __typename?: 'Query', Review?: { __typename?: 'Review', score?: number | null, body?: string | null, rating?: number | null, ratingAmount?: number | null, userRating?: ReviewRating | null, user?: { __typename?: 'User', id: number, name: string, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null, media?: { __typename?: 'Media', bannerImage?: string | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null } | null } | null };

export type SearchCharacterQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>> | InputMaybe<CharacterSort>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchCharacterQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', currentPage?: number | null, hasNextPage?: boolean | null } | null, characters?: Array<{ __typename?: 'Character', id: number, description?: string | null, name?: { __typename?: 'CharacterName', full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, media?: { __typename?: 'MediaConnection', nodes?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null } | null> | null } | null } | null> | null } | null };

export type GetAnimeFavouritesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  favouritesPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAnimeFavouritesQuery = { __typename?: 'Query', User?: { __typename?: 'User', favourites?: { __typename?: 'Favourites', anime?: { __typename?: 'MediaConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null } | null> | null } | null } | null } | null };

export type GetMangaFavouritesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  favouritesPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetMangaFavouritesQuery = { __typename?: 'Query', User?: { __typename?: 'User', favourites?: { __typename?: 'Favourites', manga?: { __typename?: 'MediaConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null } | null> | null } | null } | null } | null };

export type GetCharacterFavouritesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  favouritesPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCharacterFavouritesQuery = { __typename?: 'Query', User?: { __typename?: 'User', favourites?: { __typename?: 'Favourites', characters?: { __typename?: 'CharacterConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null } | null> | null } | null } | null } | null };

export type GetStaffFavouritesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  favouritesPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetStaffFavouritesQuery = { __typename?: 'Query', User?: { __typename?: 'User', favourites?: { __typename?: 'Favourites', staff?: { __typename?: 'StaffConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Staff', id: number, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null } | null> | null } | null } | null } | null };

export type GetStudioFavouritesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  favouritesPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetStudioFavouritesQuery = { __typename?: 'Query', User?: { __typename?: 'User', favourites?: { __typename?: 'Favourites', studios?: { __typename?: 'StudioConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Studio', id: number, name: string } | null> | null } | null } | null } | null };

export type GetAnimeHomePageQueryVariables = Exact<{
  season?: InputMaybe<MediaSeason>;
  year?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAnimeHomePageQuery = { __typename?: 'Query', Carousel?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null, Trending?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null, HighestRated?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null, Popular?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null };

export type GetMangaHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMangaHomePageQuery = { __typename?: 'Query', Carousel?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null, Trending?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null, HighestRated?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null, Popular?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null };

export type GetMediaQueryVariables = Exact<{
  mediaType: MediaType;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>> | InputMaybe<MediaSort>>;
  status?: InputMaybe<MediaStatus>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  season?: InputMaybe<MediaSeason>;
  year?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetMediaQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null };

export type GetMediaCharactersQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetMediaCharactersQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', characters?: { __typename?: 'CharacterConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, edges?: Array<{ __typename?: 'CharacterEdge', role?: CharacterRole | null, voiceActors?: Array<{ __typename?: 'Staff', id: number, languageV2?: string | null, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null } | null> | null, node?: { __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null } | null } | null> | null } | null } | null };

export type GetMediaDetailsQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  charactersPerPage?: InputMaybe<Scalars['Int']['input']>;
  staffPerPage?: InputMaybe<Scalars['Int']['input']>;
  reviewsPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetMediaDetailsQuery = { __typename?: 'Query', MediaDetails?: { __typename?: 'Media', id: number, favourites?: number | null, popularity?: number | null, status?: MediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, source?: MediaSource | null, format?: MediaFormat | null, genres?: Array<string | null> | null, countryOfOrigin?: any | null, season?: MediaSeason | null, seasonYear?: number | null, synonyms?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, trailer?: { __typename?: 'MediaTrailer', site?: string | null, id?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null, tags?: Array<{ __typename?: 'MediaTag', name: string, rank?: number | null, isMediaSpoiler?: boolean | null } | null> | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, studios?: { __typename?: 'StudioConnection', nodes?: Array<{ __typename?: 'Studio', id: number, name: string, siteUrl?: string | null } | null> | null } | null } | null, Following?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', total?: number | null, perPage?: number | null, currentPage?: number | null, lastPage?: number | null, hasNextPage?: boolean | null } | null, mediaList?: Array<{ __typename?: 'MediaList', id: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, user?: { __typename?: 'User', id: number, name: string, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null } | null> | null } | null, MediaInfo?: { __typename?: 'Media', id: number, description?: string | null, relations?: { __typename?: 'MediaConnection', edges?: Array<{ __typename?: 'MediaEdge', relationType?: MediaRelation | null, node?: { __typename?: 'Media', id: number, idMal?: number | null, episodes?: number | null, chapters?: number | null, popularity?: number | null, meanScore?: number | null, isAdult?: boolean | null, isFavourite: boolean, format?: MediaFormat | null, type?: MediaType | null, status?: MediaStatus | null, bannerImage?: string | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null, private?: boolean | null, score?: number | null, status?: MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null } | null } | null> | null } | null, recommendations?: { __typename?: 'RecommendationConnection', nodes?: Array<{ __typename?: 'Recommendation', mediaRecommendation?: { __typename?: 'Media', id: number, episodes?: number | null, chapters?: number | null, meanScore?: number | null, isAdult?: boolean | null, format?: MediaFormat | null, type?: MediaType | null, status?: MediaStatus | null, bannerImage?: string | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null, score?: number | null } | null } | null } | null> | null } | null } | null, MediaCharacters?: { __typename?: 'Media', characters?: { __typename?: 'CharacterConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, edges?: Array<{ __typename?: 'CharacterEdge', role?: CharacterRole | null, voiceActors?: Array<{ __typename?: 'Staff', id: number, languageV2?: string | null, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null } | null> | null, node?: { __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null } | null } | null> | null } | null } | null, MediaStaff?: { __typename?: 'Media', id: number, staff?: { __typename?: 'StaffConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, edges?: Array<{ __typename?: 'StaffEdge', id?: number | null, role?: string | null, node?: { __typename?: 'Staff', id: number, name?: { __typename?: 'StaffName', userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null } | null } | null } | null> | null } | null } | null, MediaReviews?: { __typename?: 'Media', reviews?: { __typename?: 'ReviewConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, edges?: Array<{ __typename?: 'ReviewEdge', node?: { __typename?: 'Review', id: number, score?: number | null, rating?: number | null, ratingAmount?: number | null, userRating?: ReviewRating | null, summary?: string | null, createdAt: number, user?: { __typename?: 'User', id: number, name: string, avatar?: { __typename?: 'UserAvatar', medium?: string | null } | null } | null } | null } | null> | null } | null } | null };

export type GetMediaInfoQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
}>;


export type GetMediaInfoQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, description?: string | null, relations?: { __typename?: 'MediaConnection', edges?: Array<{ __typename?: 'MediaEdge', relationType?: MediaRelation | null, node?: { __typename?: 'Media', id: number, idMal?: number | null, episodes?: number | null, chapters?: number | null, popularity?: number | null, meanScore?: number | null, isAdult?: boolean | null, isFavourite: boolean, format?: MediaFormat | null, type?: MediaType | null, status?: MediaStatus | null, bannerImage?: string | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null, private?: boolean | null, score?: number | null, status?: MediaListStatus | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null } | null } | null> | null } | null, recommendations?: { __typename?: 'RecommendationConnection', nodes?: Array<{ __typename?: 'Recommendation', mediaRecommendation?: { __typename?: 'Media', id: number, episodes?: number | null, chapters?: number | null, meanScore?: number | null, isAdult?: boolean | null, format?: MediaFormat | null, type?: MediaType | null, status?: MediaStatus | null, bannerImage?: string | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null, score?: number | null } | null } | null } | null> | null } | null } | null };

export type GetMediaReviewsQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetMediaReviewsQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', reviews?: { __typename?: 'ReviewConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, edges?: Array<{ __typename?: 'ReviewEdge', node?: { __typename?: 'Review', id: number, score?: number | null, rating?: number | null, ratingAmount?: number | null, userRating?: ReviewRating | null, summary?: string | null, createdAt: number, user?: { __typename?: 'User', id: number, name: string, avatar?: { __typename?: 'UserAvatar', medium?: string | null } | null } | null } | null } | null> | null } | null } | null };

export type GetMediaStaffQueryVariables = Exact<{
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetMediaStaffQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, staff?: { __typename?: 'StaffConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, edges?: Array<{ __typename?: 'StaffEdge', id?: number | null, role?: string | null, node?: { __typename?: 'Staff', id: number, name?: { __typename?: 'StaffName', userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null } | null } | null } | null> | null } | null } | null };

export type SearchMediaQueryVariables = Exact<{
  mediaType: MediaType;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>> | InputMaybe<MediaSort>>;
  statuses?: InputMaybe<Array<InputMaybe<MediaStatus>> | InputMaybe<MediaStatus>>;
  formats?: InputMaybe<Array<InputMaybe<MediaFormat>> | InputMaybe<MediaFormat>>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  season?: InputMaybe<MediaSeason>;
  year?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchMediaQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', currentPage?: number | null, hasNextPage?: boolean | null } | null, media?: Array<{ __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, format?: MediaFormat | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, chapters?: number | null, volumes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null> | null } | null };

export type GetViewerMediaQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  status?: InputMaybe<MediaListStatus>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>> | InputMaybe<MediaListSort>>;
}>;


export type GetViewerMediaQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, entries?: Array<{ __typename?: 'MediaList', id: number, progress?: number | null, score?: number | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, description?: string | null, genres?: Array<string | null> | null, episodes?: number | null, status?: MediaStatus | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', progress?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number } | null } | null } | null> | null } | null> | null } | null };

export type SearchStaffQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>> | InputMaybe<StaffSort>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchStaffQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', currentPage?: number | null, hasNextPage?: boolean | null } | null, staff?: Array<{ __typename?: 'Staff', id: number, name?: { __typename?: 'StaffName', full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null, characters?: { __typename?: 'CharacterConnection', nodes?: Array<{ __typename?: 'Character', id: number, name?: { __typename?: 'CharacterName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null } | null> | null } | null } | null> | null } | null };

export type GetViewerShortDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetViewerShortDataQuery = { __typename?: 'Query', Viewer?: { __typename?: 'User', id: number, avatar?: { __typename?: 'UserAvatar', large?: string | null } | null } | null };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  activitiesPerPage?: InputMaybe<Scalars['Int']['input']>;
  favouritesPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUserQuery = { __typename?: 'Query', User?: { __typename?: 'User', name: string, bannerImage?: string | null, isFollowing?: boolean | null, isFollower?: boolean | null, isBlocked?: boolean | null, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null, favourites?: { __typename?: 'Favourites', anime?: { __typename?: 'MediaConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null } | null> | null } | null, manga?: { __typename?: 'MediaConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Media', id: number, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, type?: MediaType | null, meanScore?: number | null, bannerImage?: string | null, isFavourite: boolean, format?: MediaFormat | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, mediaListEntry?: { __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', episode: number, timeUntilAiring: number } | null } | null> | null } | null, characters?: { __typename?: 'CharacterConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Character', id: number, isFavourite: boolean, image?: { __typename?: 'CharacterImage', large?: string | null, medium?: string | null } | null, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null } | null> | null } | null, staff?: { __typename?: 'StaffConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Staff', id: number, name?: { __typename?: 'StaffName', first?: string | null, middle?: string | null, last?: string | null, full?: string | null, native?: string | null, userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null, medium?: string | null } | null } | null> | null } | null, studios?: { __typename?: 'StudioConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, nodes?: Array<{ __typename?: 'Studio', id: number, name: string } | null> | null } | null } | null } | null, animeLists?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, isCustomList?: boolean | null, isCompletedList?: boolean | null, entries?: Array<{ __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null> | null } | null> | null, user?: { __typename?: 'User', mediaListOptions?: { __typename?: 'MediaListOptions', scoreFormat?: ScoreFormat | null, rowOrder?: string | null, animeList?: { __typename?: 'MediaListTypeOptions', sectionOrder?: Array<string | null> | null, customLists?: Array<string | null> | null, splitCompletedSectionByFormat?: boolean | null, theme?: any | null } | null, mangaList?: { __typename?: 'MediaListTypeOptions', sectionOrder?: Array<string | null> | null, customLists?: Array<string | null> | null, splitCompletedSectionByFormat?: boolean | null, theme?: any | null } | null } | null } | null } | null, mangaLists?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, isCustomList?: boolean | null, isCompletedList?: boolean | null, entries?: Array<{ __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null> | null } | null> | null, user?: { __typename?: 'User', mediaListOptions?: { __typename?: 'MediaListOptions', scoreFormat?: ScoreFormat | null, rowOrder?: string | null, animeList?: { __typename?: 'MediaListTypeOptions', sectionOrder?: Array<string | null> | null, customLists?: Array<string | null> | null, splitCompletedSectionByFormat?: boolean | null, theme?: any | null } | null, mangaList?: { __typename?: 'MediaListTypeOptions', sectionOrder?: Array<string | null> | null, customLists?: Array<string | null> | null, splitCompletedSectionByFormat?: boolean | null, theme?: any | null } | null } | null } | null } | null, Overview?: { __typename?: 'User', about?: string | null, statistics?: { __typename?: 'UserStatisticTypes', anime?: { __typename?: 'UserStatistics', count: number, meanScore: number, minutesWatched: number, episodesWatched: number, highestCount?: Array<{ __typename?: 'UserGenreStatistic', count: number, genre?: string | null } | null> | null, highestScore?: Array<{ __typename?: 'UserGenreStatistic', meanScore: number, genre?: string | null } | null> | null, highestProgress?: Array<{ __typename?: 'UserGenreStatistic', minutesWatched: number, genre?: string | null } | null> | null } | null, manga?: { __typename?: 'UserStatistics', count: number, meanScore: number, chaptersRead: number, volumesRead: number, highestCount?: Array<{ __typename?: 'UserGenreStatistic', count: number, genre?: string | null } | null> | null, highestScore?: Array<{ __typename?: 'UserGenreStatistic', meanScore: number, genre?: string | null } | null> | null, highestProgress?: Array<{ __typename?: 'UserGenreStatistic', chaptersRead: number, genre?: string | null } | null> | null } | null } | null } | null, Activities?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, activities?: Array<{ __typename: 'ListActivity', id: number, status?: string | null, progress?: string | null, createdAt: number, likeCount: number, isLiked?: boolean | null, isPinned?: boolean | null, replyCount: number, media?: { __typename?: 'Media', id: number, type?: MediaType | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null } | null } | { __typename: 'MessageActivity' } | { __typename: 'TextActivity' } | null> | null } | null };

export type GetUserExtraQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  followingPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUserExtraQuery = { __typename?: 'Query', following?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, following?: Array<{ __typename?: 'User', id: number, name: string, bannerImage?: string | null, about?: string | null, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null> | null } | null, followers?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, followers?: Array<{ __typename?: 'User', id: number, name: string, bannerImage?: string | null, about?: string | null, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null> | null } | null };

export type GetUserListActivitiesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  activitiesPerPage?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUserListActivitiesQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, activities?: Array<{ __typename: 'ListActivity', id: number, status?: string | null, progress?: string | null, createdAt: number, likeCount: number, isLiked?: boolean | null, isPinned?: boolean | null, replyCount: number, media?: { __typename?: 'Media', id: number, type?: MediaType | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null } | null } | { __typename: 'MessageActivity' } | { __typename: 'TextActivity' } | null> | null } | null };

export type GetUserMediaListQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
}>;


export type GetUserMediaListQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, isCustomList?: boolean | null, isCompletedList?: boolean | null, entries?: Array<{ __typename?: 'MediaList', id: number, mediaId: number, status?: MediaListStatus | null, score?: number | null, progress?: number | null, progressVolumes?: number | null, repeat?: number | null, priority?: number | null, private?: boolean | null, hiddenFromStatusLists?: boolean | null, customLists?: any | null, advancedScores?: any | null, notes?: string | null, updatedAt?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, type?: MediaType | null, format?: MediaFormat | null, status?: MediaStatus | null, episodes?: number | null, volumes?: number | null, chapters?: number | null, averageScore?: number | null, popularity?: number | null, isAdult?: boolean | null, countryOfOrigin?: any | null, genres?: Array<string | null> | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null } | null> | null } | null> | null, user?: { __typename?: 'User', mediaListOptions?: { __typename?: 'MediaListOptions', scoreFormat?: ScoreFormat | null, rowOrder?: string | null, animeList?: { __typename?: 'MediaListTypeOptions', sectionOrder?: Array<string | null> | null, customLists?: Array<string | null> | null, splitCompletedSectionByFormat?: boolean | null, theme?: any | null } | null, mangaList?: { __typename?: 'MediaListTypeOptions', sectionOrder?: Array<string | null> | null, customLists?: Array<string | null> | null, splitCompletedSectionByFormat?: boolean | null, theme?: any | null } | null } | null } | null } | null };

export type SearchUsersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>> | InputMaybe<UserSort>>;
}>;


export type SearchUsersQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', currentPage?: number | null, hasNextPage?: boolean | null } | null, users?: Array<{ __typename?: 'User', id: number, name: string, bannerImage?: string | null, about?: string | null, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null> | null } | null };

export type GetUserFollowingQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  followingPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUserFollowingQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, following?: Array<{ __typename?: 'User', id: number, name: string, bannerImage?: string | null, about?: string | null, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null> | null } | null };

export type GetUserFollowersQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  followingPerPage?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUserFollowersQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null } | null, followers?: Array<{ __typename?: 'User', id: number, name: string, bannerImage?: string | null, about?: string | null, avatar?: { __typename?: 'UserAvatar', large?: string | null, medium?: string | null } | null } | null> | null } | null };

export const CharacterFragmentDoc = gql`
    fragment character on Character {
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
    `;
export const CharacterMediaFragmentDoc = gql`
    fragment characterMedia on CharacterConnection {
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
      ...character
    }
  }
}
    ${CharacterFragmentDoc}`;
export const MediaListEntryFragmentDoc = gql`
    fragment mediaListEntry on MediaList {
  id
  mediaId
  status
  score(format: POINT_100)
  progress
  progressVolumes
  repeat
  priority
  private
  hiddenFromStatusLists
  customLists
  advancedScores
  notes
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
  customLists
  media {
    id
    title {
      userPreferred
      romaji
      english
      native
    }
    coverImage {
      extraLarge
      large
      medium
    }
    type
    format
    status(version: 2)
    episodes
    volumes
    chapters
    averageScore
    popularity
    isAdult
    countryOfOrigin
    genres
    startDate {
      year
      month
      day
    }
  }
}
    `;
export const MediaCardFragmentDoc = gql`
    fragment mediaCard on Media {
  id
  episodes
  duration
  chapters
  volumes
  type
  title {
    userPreferred
  }
  coverImage {
    extraLarge
    large
    medium
    color
  }
  meanScore
  bannerImage
  mediaListEntry {
    ...mediaListEntry
  }
  isFavourite
  nextAiringEpisode {
    episode
    timeUntilAiring
  }
  format
}
    ${MediaListEntryFragmentDoc}`;
export const AnimeFavouritesFragmentDoc = gql`
    fragment animeFavourites on MediaConnection {
  pageInfo {
    hasNextPage
  }
  nodes {
    ...mediaCard
  }
}
    ${MediaCardFragmentDoc}`;
export const MangaFavouritesFragmentDoc = gql`
    fragment mangaFavourites on MediaConnection {
  pageInfo {
    hasNextPage
  }
  nodes {
    ...mediaCard
  }
}
    ${MediaCardFragmentDoc}`;
export const CharacterFavouritesFragmentDoc = gql`
    fragment characterFavourites on CharacterConnection {
  pageInfo {
    hasNextPage
  }
  nodes {
    ...character
  }
}
    ${CharacterFragmentDoc}`;
export const StaffFragmentDoc = gql`
    fragment staff on Staff {
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
}
    `;
export const StaffFavouritesFragmentDoc = gql`
    fragment staffFavourites on StaffConnection {
  pageInfo {
    hasNextPage
  }
  nodes {
    ...staff
  }
}
    ${StaffFragmentDoc}`;
export const StudioFragmentDoc = gql`
    fragment studio on Studio {
  id
  name
}
    `;
export const StudioFavouritesFragmentDoc = gql`
    fragment studioFavourites on StudioConnection {
  pageInfo {
    hasNextPage
  }
  nodes {
    ...studio
  }
}
    ${StudioFragmentDoc}`;
export const MediaFragmentDoc = gql`
    fragment media on Media {
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
    ...mediaListEntry
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
  synonyms
}
    ${MediaListEntryFragmentDoc}`;
export const MediaListCollectionFragmentDoc = gql`
    fragment mediaListCollection on MediaListCollection {
  lists {
    name
    isCustomList
    isCompletedList: isSplitCompletedList
    entries {
      ...mediaListEntry
    }
  }
  user {
    mediaListOptions {
      scoreFormat
      rowOrder
      animeList {
        sectionOrder
        customLists
        splitCompletedSectionByFormat
        theme
      }
      mangaList {
        sectionOrder
        customLists
        splitCompletedSectionByFormat
        theme
      }
    }
  }
}
    ${MediaListEntryFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  name
  avatar {
    large
    medium
  }
  bannerImage
  about
}
    `;
export const ToggleFavouritesDocument = gql`
    mutation ToggleFavourites($animeId: Int, $mangaId: Int, $characterId: Int, $staffId: Int, $studioId: Int) {
  ToggleFavourite(
    animeId: $animeId
    mangaId: $mangaId
    characterId: $characterId
    staffId: $staffId
    studioId: $studioId
  ) {
    anime {
      nodes {
        ...mediaCard
      }
    }
    manga {
      nodes {
        ...mediaCard
      }
    }
    characters {
      nodes {
        ...character
      }
    }
    staff {
      nodes {
        ...staff
      }
    }
    studios {
      nodes {
        ...studio
      }
    }
  }
}
    ${MediaCardFragmentDoc}
${CharacterFragmentDoc}
${StaffFragmentDoc}
${StudioFragmentDoc}`;
export type ToggleFavouritesMutationFn = Apollo.MutationFunction<ToggleFavouritesMutation, ToggleFavouritesMutationVariables>;

/**
 * __useToggleFavouritesMutation__
 *
 * To run a mutation, you first call `useToggleFavouritesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFavouritesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFavouritesMutation, { data, loading, error }] = useToggleFavouritesMutation({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      mangaId: // value for 'mangaId'
 *      characterId: // value for 'characterId'
 *      staffId: // value for 'staffId'
 *      studioId: // value for 'studioId'
 *   },
 * });
 */
export function useToggleFavouritesMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFavouritesMutation, ToggleFavouritesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleFavouritesMutation, ToggleFavouritesMutationVariables>(ToggleFavouritesDocument, options);
      }
export type ToggleFavouritesMutationHookResult = ReturnType<typeof useToggleFavouritesMutation>;
export type ToggleFavouritesMutationResult = Apollo.MutationResult<ToggleFavouritesMutation>;
export type ToggleFavouritesMutationOptions = Apollo.BaseMutationOptions<ToggleFavouritesMutation, ToggleFavouritesMutationVariables>;
export const LikeListActivityDocument = gql`
    mutation LikeListActivity($id: Int) {
  ToggleLikeV2(type: ACTIVITY, id: $id) {
    __typename
    ... on ListActivity {
      likeCount
      isLiked
    }
  }
}
    `;
export type LikeListActivityMutationFn = Apollo.MutationFunction<LikeListActivityMutation, LikeListActivityMutationVariables>;

/**
 * __useLikeListActivityMutation__
 *
 * To run a mutation, you first call `useLikeListActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeListActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeListActivityMutation, { data, loading, error }] = useLikeListActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikeListActivityMutation(baseOptions?: Apollo.MutationHookOptions<LikeListActivityMutation, LikeListActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeListActivityMutation, LikeListActivityMutationVariables>(LikeListActivityDocument, options);
      }
export type LikeListActivityMutationHookResult = ReturnType<typeof useLikeListActivityMutation>;
export type LikeListActivityMutationResult = Apollo.MutationResult<LikeListActivityMutation>;
export type LikeListActivityMutationOptions = Apollo.BaseMutationOptions<LikeListActivityMutation, LikeListActivityMutationVariables>;
export const DeleteMediaListEntryDocument = gql`
    mutation DeleteMediaListEntry($id: Int) {
  DeleteMediaListEntry(id: $id) {
    deleted
  }
}
    `;
export type DeleteMediaListEntryMutationFn = Apollo.MutationFunction<DeleteMediaListEntryMutation, DeleteMediaListEntryMutationVariables>;

/**
 * __useDeleteMediaListEntryMutation__
 *
 * To run a mutation, you first call `useDeleteMediaListEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMediaListEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMediaListEntryMutation, { data, loading, error }] = useDeleteMediaListEntryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMediaListEntryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMediaListEntryMutation, DeleteMediaListEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMediaListEntryMutation, DeleteMediaListEntryMutationVariables>(DeleteMediaListEntryDocument, options);
      }
export type DeleteMediaListEntryMutationHookResult = ReturnType<typeof useDeleteMediaListEntryMutation>;
export type DeleteMediaListEntryMutationResult = Apollo.MutationResult<DeleteMediaListEntryMutation>;
export type DeleteMediaListEntryMutationOptions = Apollo.BaseMutationOptions<DeleteMediaListEntryMutation, DeleteMediaListEntryMutationVariables>;
export const SaveMediaListEntryDocument = gql`
    mutation SaveMediaListEntry($mediaId: Int, $status: MediaListStatus, $scoreRaw: Int, $progress: Int, $progressVolumes: Int, $private: Boolean, $notes: String, $repeat: Int, $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput) {
  SaveMediaListEntry(
    mediaId: $mediaId
    status: $status
    scoreRaw: $scoreRaw
    progress: $progress
    progressVolumes: $progressVolumes
    private: $private
    notes: $notes
    repeat: $repeat
    startedAt: $startedAt
    completedAt: $completedAt
  ) {
    ...mediaListEntry
  }
}
    ${MediaListEntryFragmentDoc}`;
export type SaveMediaListEntryMutationFn = Apollo.MutationFunction<SaveMediaListEntryMutation, SaveMediaListEntryMutationVariables>;

/**
 * __useSaveMediaListEntryMutation__
 *
 * To run a mutation, you first call `useSaveMediaListEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveMediaListEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveMediaListEntryMutation, { data, loading, error }] = useSaveMediaListEntryMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      status: // value for 'status'
 *      scoreRaw: // value for 'scoreRaw'
 *      progress: // value for 'progress'
 *      progressVolumes: // value for 'progressVolumes'
 *      private: // value for 'private'
 *      notes: // value for 'notes'
 *      repeat: // value for 'repeat'
 *      startedAt: // value for 'startedAt'
 *      completedAt: // value for 'completedAt'
 *   },
 * });
 */
export function useSaveMediaListEntryMutation(baseOptions?: Apollo.MutationHookOptions<SaveMediaListEntryMutation, SaveMediaListEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveMediaListEntryMutation, SaveMediaListEntryMutationVariables>(SaveMediaListEntryDocument, options);
      }
export type SaveMediaListEntryMutationHookResult = ReturnType<typeof useSaveMediaListEntryMutation>;
export type SaveMediaListEntryMutationResult = Apollo.MutationResult<SaveMediaListEntryMutation>;
export type SaveMediaListEntryMutationOptions = Apollo.BaseMutationOptions<SaveMediaListEntryMutation, SaveMediaListEntryMutationVariables>;
export const UpdateMediaListEntriesDocument = gql`
    mutation UpdateMediaListEntries($ids: [Int], $status: MediaListStatus, $scoreRaw: Int, $progress: Int, $progressVolumes: Int, $private: Boolean, $notes: String, $repeat: Int, $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput) {
  UpdateMediaListEntries(
    ids: $ids
    status: $status
    scoreRaw: $scoreRaw
    progress: $progress
    progressVolumes: $progressVolumes
    private: $private
    notes: $notes
    repeat: $repeat
    startedAt: $startedAt
    completedAt: $completedAt
  ) {
    ...mediaListEntry
  }
}
    ${MediaListEntryFragmentDoc}`;
export type UpdateMediaListEntriesMutationFn = Apollo.MutationFunction<UpdateMediaListEntriesMutation, UpdateMediaListEntriesMutationVariables>;

/**
 * __useUpdateMediaListEntriesMutation__
 *
 * To run a mutation, you first call `useUpdateMediaListEntriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMediaListEntriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMediaListEntriesMutation, { data, loading, error }] = useUpdateMediaListEntriesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      status: // value for 'status'
 *      scoreRaw: // value for 'scoreRaw'
 *      progress: // value for 'progress'
 *      progressVolumes: // value for 'progressVolumes'
 *      private: // value for 'private'
 *      notes: // value for 'notes'
 *      repeat: // value for 'repeat'
 *      startedAt: // value for 'startedAt'
 *      completedAt: // value for 'completedAt'
 *   },
 * });
 */
export function useUpdateMediaListEntriesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMediaListEntriesMutation, UpdateMediaListEntriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMediaListEntriesMutation, UpdateMediaListEntriesMutationVariables>(UpdateMediaListEntriesDocument, options);
      }
export type UpdateMediaListEntriesMutationHookResult = ReturnType<typeof useUpdateMediaListEntriesMutation>;
export type UpdateMediaListEntriesMutationResult = Apollo.MutationResult<UpdateMediaListEntriesMutation>;
export type UpdateMediaListEntriesMutationOptions = Apollo.BaseMutationOptions<UpdateMediaListEntriesMutation, UpdateMediaListEntriesMutationVariables>;
export const RateReviewDocument = gql`
    mutation RateReview($reviewId: Int, $rating: ReviewRating) {
  RateReview(reviewId: $reviewId, rating: $rating) {
    rating
    ratingAmount
    userRating
  }
}
    `;
export type RateReviewMutationFn = Apollo.MutationFunction<RateReviewMutation, RateReviewMutationVariables>;

/**
 * __useRateReviewMutation__
 *
 * To run a mutation, you first call `useRateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rateReviewMutation, { data, loading, error }] = useRateReviewMutation({
 *   variables: {
 *      reviewId: // value for 'reviewId'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useRateReviewMutation(baseOptions?: Apollo.MutationHookOptions<RateReviewMutation, RateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RateReviewMutation, RateReviewMutationVariables>(RateReviewDocument, options);
      }
export type RateReviewMutationHookResult = ReturnType<typeof useRateReviewMutation>;
export type RateReviewMutationResult = Apollo.MutationResult<RateReviewMutation>;
export type RateReviewMutationOptions = Apollo.BaseMutationOptions<RateReviewMutation, RateReviewMutationVariables>;
export const FollowDocument = gql`
    mutation Follow($userId: Int) {
  ToggleFollow(userId: $userId) {
    isFollowing
  }
}
    `;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const GetReviewDocument = gql`
    query GetReview($id: Int) {
  Review(id: $id) {
    score
    body
    rating
    ratingAmount
    userRating
    user {
      id
      name
      avatar {
        large
        medium
      }
    }
    media {
      title {
        romaji
        english
        native
        userPreferred
      }
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
    `;

/**
 * __useGetReviewQuery__
 *
 * To run a query within a React component, call `useGetReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReviewQuery(baseOptions?: Apollo.QueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
      }
export function useGetReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
        }
export function useGetReviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
        }
export type GetReviewQueryHookResult = ReturnType<typeof useGetReviewQuery>;
export type GetReviewLazyQueryHookResult = ReturnType<typeof useGetReviewLazyQuery>;
export type GetReviewSuspenseQueryHookResult = ReturnType<typeof useGetReviewSuspenseQuery>;
export type GetReviewQueryResult = Apollo.QueryResult<GetReviewQuery, GetReviewQueryVariables>;
export const SearchCharacterDocument = gql`
    query SearchCharacter($search: String, $sort: [CharacterSort], $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
    }
    characters(search: $search, sort: $sort) {
      id
      name {
        full
        native
        userPreferred
      }
      image {
        large
        medium
      }
      description
      media(sort: POPULARITY_DESC) {
        nodes {
          id
          type
          title {
            romaji
            english
            native
            userPreferred
          }
        }
      }
    }
  }
}
    `;

/**
 * __useSearchCharacterQuery__
 *
 * To run a query within a React component, call `useSearchCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCharacterQuery({
 *   variables: {
 *      search: // value for 'search'
 *      sort: // value for 'sort'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useSearchCharacterQuery(baseOptions?: Apollo.QueryHookOptions<SearchCharacterQuery, SearchCharacterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCharacterQuery, SearchCharacterQueryVariables>(SearchCharacterDocument, options);
      }
export function useSearchCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCharacterQuery, SearchCharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCharacterQuery, SearchCharacterQueryVariables>(SearchCharacterDocument, options);
        }
export function useSearchCharacterSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchCharacterQuery, SearchCharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchCharacterQuery, SearchCharacterQueryVariables>(SearchCharacterDocument, options);
        }
export type SearchCharacterQueryHookResult = ReturnType<typeof useSearchCharacterQuery>;
export type SearchCharacterLazyQueryHookResult = ReturnType<typeof useSearchCharacterLazyQuery>;
export type SearchCharacterSuspenseQueryHookResult = ReturnType<typeof useSearchCharacterSuspenseQuery>;
export type SearchCharacterQueryResult = Apollo.QueryResult<SearchCharacterQuery, SearchCharacterQueryVariables>;
export const GetAnimeFavouritesDocument = gql`
    query GetAnimeFavourites($userId: Int, $page: Int, $favouritesPerPage: Int) {
  User(id: $userId) {
    favourites {
      anime(page: $page, perPage: $favouritesPerPage) {
        ...animeFavourites
      }
    }
  }
}
    ${AnimeFavouritesFragmentDoc}`;

/**
 * __useGetAnimeFavouritesQuery__
 *
 * To run a query within a React component, call `useGetAnimeFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeFavouritesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      page: // value for 'page'
 *      favouritesPerPage: // value for 'favouritesPerPage'
 *   },
 * });
 */
export function useGetAnimeFavouritesQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimeFavouritesQuery, GetAnimeFavouritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeFavouritesQuery, GetAnimeFavouritesQueryVariables>(GetAnimeFavouritesDocument, options);
      }
export function useGetAnimeFavouritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeFavouritesQuery, GetAnimeFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeFavouritesQuery, GetAnimeFavouritesQueryVariables>(GetAnimeFavouritesDocument, options);
        }
export function useGetAnimeFavouritesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAnimeFavouritesQuery, GetAnimeFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeFavouritesQuery, GetAnimeFavouritesQueryVariables>(GetAnimeFavouritesDocument, options);
        }
export type GetAnimeFavouritesQueryHookResult = ReturnType<typeof useGetAnimeFavouritesQuery>;
export type GetAnimeFavouritesLazyQueryHookResult = ReturnType<typeof useGetAnimeFavouritesLazyQuery>;
export type GetAnimeFavouritesSuspenseQueryHookResult = ReturnType<typeof useGetAnimeFavouritesSuspenseQuery>;
export type GetAnimeFavouritesQueryResult = Apollo.QueryResult<GetAnimeFavouritesQuery, GetAnimeFavouritesQueryVariables>;
export const GetMangaFavouritesDocument = gql`
    query GetMangaFavourites($userId: Int, $page: Int, $favouritesPerPage: Int) {
  User(id: $userId) {
    favourites {
      manga(page: $page, perPage: $favouritesPerPage) {
        ...mangaFavourites
      }
    }
  }
}
    ${MangaFavouritesFragmentDoc}`;

/**
 * __useGetMangaFavouritesQuery__
 *
 * To run a query within a React component, call `useGetMangaFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMangaFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMangaFavouritesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      page: // value for 'page'
 *      favouritesPerPage: // value for 'favouritesPerPage'
 *   },
 * });
 */
export function useGetMangaFavouritesQuery(baseOptions?: Apollo.QueryHookOptions<GetMangaFavouritesQuery, GetMangaFavouritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMangaFavouritesQuery, GetMangaFavouritesQueryVariables>(GetMangaFavouritesDocument, options);
      }
export function useGetMangaFavouritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMangaFavouritesQuery, GetMangaFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMangaFavouritesQuery, GetMangaFavouritesQueryVariables>(GetMangaFavouritesDocument, options);
        }
export function useGetMangaFavouritesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMangaFavouritesQuery, GetMangaFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMangaFavouritesQuery, GetMangaFavouritesQueryVariables>(GetMangaFavouritesDocument, options);
        }
export type GetMangaFavouritesQueryHookResult = ReturnType<typeof useGetMangaFavouritesQuery>;
export type GetMangaFavouritesLazyQueryHookResult = ReturnType<typeof useGetMangaFavouritesLazyQuery>;
export type GetMangaFavouritesSuspenseQueryHookResult = ReturnType<typeof useGetMangaFavouritesSuspenseQuery>;
export type GetMangaFavouritesQueryResult = Apollo.QueryResult<GetMangaFavouritesQuery, GetMangaFavouritesQueryVariables>;
export const GetCharacterFavouritesDocument = gql`
    query GetCharacterFavourites($userId: Int, $page: Int, $favouritesPerPage: Int) {
  User(id: $userId) {
    favourites {
      characters(page: $page, perPage: $favouritesPerPage) {
        ...characterFavourites
      }
    }
  }
}
    ${CharacterFavouritesFragmentDoc}`;

/**
 * __useGetCharacterFavouritesQuery__
 *
 * To run a query within a React component, call `useGetCharacterFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterFavouritesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      page: // value for 'page'
 *      favouritesPerPage: // value for 'favouritesPerPage'
 *   },
 * });
 */
export function useGetCharacterFavouritesQuery(baseOptions?: Apollo.QueryHookOptions<GetCharacterFavouritesQuery, GetCharacterFavouritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterFavouritesQuery, GetCharacterFavouritesQueryVariables>(GetCharacterFavouritesDocument, options);
      }
export function useGetCharacterFavouritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterFavouritesQuery, GetCharacterFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterFavouritesQuery, GetCharacterFavouritesQueryVariables>(GetCharacterFavouritesDocument, options);
        }
export function useGetCharacterFavouritesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCharacterFavouritesQuery, GetCharacterFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCharacterFavouritesQuery, GetCharacterFavouritesQueryVariables>(GetCharacterFavouritesDocument, options);
        }
export type GetCharacterFavouritesQueryHookResult = ReturnType<typeof useGetCharacterFavouritesQuery>;
export type GetCharacterFavouritesLazyQueryHookResult = ReturnType<typeof useGetCharacterFavouritesLazyQuery>;
export type GetCharacterFavouritesSuspenseQueryHookResult = ReturnType<typeof useGetCharacterFavouritesSuspenseQuery>;
export type GetCharacterFavouritesQueryResult = Apollo.QueryResult<GetCharacterFavouritesQuery, GetCharacterFavouritesQueryVariables>;
export const GetStaffFavouritesDocument = gql`
    query GetStaffFavourites($userId: Int, $page: Int, $favouritesPerPage: Int) {
  User(id: $userId) {
    favourites {
      staff(page: $page, perPage: $favouritesPerPage) {
        ...staffFavourites
      }
    }
  }
}
    ${StaffFavouritesFragmentDoc}`;

/**
 * __useGetStaffFavouritesQuery__
 *
 * To run a query within a React component, call `useGetStaffFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffFavouritesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      page: // value for 'page'
 *      favouritesPerPage: // value for 'favouritesPerPage'
 *   },
 * });
 */
export function useGetStaffFavouritesQuery(baseOptions?: Apollo.QueryHookOptions<GetStaffFavouritesQuery, GetStaffFavouritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaffFavouritesQuery, GetStaffFavouritesQueryVariables>(GetStaffFavouritesDocument, options);
      }
export function useGetStaffFavouritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaffFavouritesQuery, GetStaffFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaffFavouritesQuery, GetStaffFavouritesQueryVariables>(GetStaffFavouritesDocument, options);
        }
export function useGetStaffFavouritesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStaffFavouritesQuery, GetStaffFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStaffFavouritesQuery, GetStaffFavouritesQueryVariables>(GetStaffFavouritesDocument, options);
        }
export type GetStaffFavouritesQueryHookResult = ReturnType<typeof useGetStaffFavouritesQuery>;
export type GetStaffFavouritesLazyQueryHookResult = ReturnType<typeof useGetStaffFavouritesLazyQuery>;
export type GetStaffFavouritesSuspenseQueryHookResult = ReturnType<typeof useGetStaffFavouritesSuspenseQuery>;
export type GetStaffFavouritesQueryResult = Apollo.QueryResult<GetStaffFavouritesQuery, GetStaffFavouritesQueryVariables>;
export const GetStudioFavouritesDocument = gql`
    query GetStudioFavourites($userId: Int, $page: Int, $favouritesPerPage: Int) {
  User(id: $userId) {
    favourites {
      studios(page: $page, perPage: $favouritesPerPage) {
        ...studioFavourites
      }
    }
  }
}
    ${StudioFavouritesFragmentDoc}`;

/**
 * __useGetStudioFavouritesQuery__
 *
 * To run a query within a React component, call `useGetStudioFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudioFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudioFavouritesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      page: // value for 'page'
 *      favouritesPerPage: // value for 'favouritesPerPage'
 *   },
 * });
 */
export function useGetStudioFavouritesQuery(baseOptions?: Apollo.QueryHookOptions<GetStudioFavouritesQuery, GetStudioFavouritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudioFavouritesQuery, GetStudioFavouritesQueryVariables>(GetStudioFavouritesDocument, options);
      }
export function useGetStudioFavouritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudioFavouritesQuery, GetStudioFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudioFavouritesQuery, GetStudioFavouritesQueryVariables>(GetStudioFavouritesDocument, options);
        }
export function useGetStudioFavouritesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStudioFavouritesQuery, GetStudioFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStudioFavouritesQuery, GetStudioFavouritesQueryVariables>(GetStudioFavouritesDocument, options);
        }
export type GetStudioFavouritesQueryHookResult = ReturnType<typeof useGetStudioFavouritesQuery>;
export type GetStudioFavouritesLazyQueryHookResult = ReturnType<typeof useGetStudioFavouritesLazyQuery>;
export type GetStudioFavouritesSuspenseQueryHookResult = ReturnType<typeof useGetStudioFavouritesSuspenseQuery>;
export type GetStudioFavouritesQueryResult = Apollo.QueryResult<GetStudioFavouritesQuery, GetStudioFavouritesQueryVariables>;
export const GetAnimeHomePageDocument = gql`
    query GetAnimeHomePage($season: MediaSeason, $year: Int) {
  Carousel: Page(page: 1, perPage: 20) {
    media(type: ANIME, sort: [POPULARITY_DESC], seasonYear: $year, season: $season) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
      status
      mediaListEntry {
        progress
      }
      nextAiringEpisode {
        episode
      }
    }
  }
  Trending: Page(page: 1, perPage: 20) {
    media(type: ANIME, sort: TRENDING_DESC) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
      status
      mediaListEntry {
        progress
      }
      nextAiringEpisode {
        episode
      }
    }
  }
  HighestRated: Page(page: 1, perPage: 20) {
    media(type: ANIME, sort: SCORE_DESC) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
      status
      mediaListEntry {
        progress
      }
      nextAiringEpisode {
        episode
      }
    }
  }
  Popular: Page(page: 1, perPage: 20) {
    media(type: ANIME, sort: POPULARITY_DESC) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
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
 * __useGetAnimeHomePageQuery__
 *
 * To run a query within a React component, call `useGetAnimeHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeHomePageQuery({
 *   variables: {
 *      season: // value for 'season'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetAnimeHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimeHomePageQuery, GetAnimeHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeHomePageQuery, GetAnimeHomePageQueryVariables>(GetAnimeHomePageDocument, options);
      }
export function useGetAnimeHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeHomePageQuery, GetAnimeHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeHomePageQuery, GetAnimeHomePageQueryVariables>(GetAnimeHomePageDocument, options);
        }
export function useGetAnimeHomePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAnimeHomePageQuery, GetAnimeHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeHomePageQuery, GetAnimeHomePageQueryVariables>(GetAnimeHomePageDocument, options);
        }
export type GetAnimeHomePageQueryHookResult = ReturnType<typeof useGetAnimeHomePageQuery>;
export type GetAnimeHomePageLazyQueryHookResult = ReturnType<typeof useGetAnimeHomePageLazyQuery>;
export type GetAnimeHomePageSuspenseQueryHookResult = ReturnType<typeof useGetAnimeHomePageSuspenseQuery>;
export type GetAnimeHomePageQueryResult = Apollo.QueryResult<GetAnimeHomePageQuery, GetAnimeHomePageQueryVariables>;
export const GetMangaHomePageDocument = gql`
    query GetMangaHomePage {
  Carousel: Page(page: 1, perPage: 20) {
    media(type: MANGA, sort: [POPULARITY_DESC], status: RELEASING) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
      status
      mediaListEntry {
        progress
      }
      nextAiringEpisode {
        episode
      }
    }
  }
  Trending: Page(page: 1, perPage: 20) {
    media(type: MANGA, sort: TRENDING_DESC, onList: false) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
      status
      mediaListEntry {
        progress
      }
      nextAiringEpisode {
        episode
      }
    }
  }
  HighestRated: Page(page: 1, perPage: 20) {
    media(type: MANGA, sort: SCORE_DESC, onList: false) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
      status
      mediaListEntry {
        progress
      }
      nextAiringEpisode {
        episode
      }
    }
  }
  Popular: Page(page: 1, perPage: 20) {
    media(type: MANGA, sort: POPULARITY_DESC, onList: false) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
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
 * __useGetMangaHomePageQuery__
 *
 * To run a query within a React component, call `useGetMangaHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMangaHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMangaHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMangaHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetMangaHomePageQuery, GetMangaHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMangaHomePageQuery, GetMangaHomePageQueryVariables>(GetMangaHomePageDocument, options);
      }
export function useGetMangaHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMangaHomePageQuery, GetMangaHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMangaHomePageQuery, GetMangaHomePageQueryVariables>(GetMangaHomePageDocument, options);
        }
export function useGetMangaHomePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMangaHomePageQuery, GetMangaHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMangaHomePageQuery, GetMangaHomePageQueryVariables>(GetMangaHomePageDocument, options);
        }
export type GetMangaHomePageQueryHookResult = ReturnType<typeof useGetMangaHomePageQuery>;
export type GetMangaHomePageLazyQueryHookResult = ReturnType<typeof useGetMangaHomePageLazyQuery>;
export type GetMangaHomePageSuspenseQueryHookResult = ReturnType<typeof useGetMangaHomePageSuspenseQuery>;
export type GetMangaHomePageQueryResult = Apollo.QueryResult<GetMangaHomePageQuery, GetMangaHomePageQueryVariables>;
export const GetMediaDocument = gql`
    query GetMedia($mediaType: MediaType!, $sort: [MediaSort], $status: MediaStatus, $onList: Boolean, $season: MediaSeason, $year: Int, $page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(
      type: $mediaType
      sort: $sort
      status: $status
      onList: $onList
      season: $season
      seasonYear: $year
    ) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
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
 * __useGetMediaQuery__
 *
 * To run a query within a React component, call `useGetMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaQuery({
 *   variables: {
 *      mediaType: // value for 'mediaType'
 *      sort: // value for 'sort'
 *      status: // value for 'status'
 *      onList: // value for 'onList'
 *      season: // value for 'season'
 *      year: // value for 'year'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetMediaQuery(baseOptions: Apollo.QueryHookOptions<GetMediaQuery, GetMediaQueryVariables> & ({ variables: GetMediaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaQuery, GetMediaQueryVariables>(GetMediaDocument, options);
      }
export function useGetMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaQuery, GetMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaQuery, GetMediaQueryVariables>(GetMediaDocument, options);
        }
export function useGetMediaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMediaQuery, GetMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMediaQuery, GetMediaQueryVariables>(GetMediaDocument, options);
        }
export type GetMediaQueryHookResult = ReturnType<typeof useGetMediaQuery>;
export type GetMediaLazyQueryHookResult = ReturnType<typeof useGetMediaLazyQuery>;
export type GetMediaSuspenseQueryHookResult = ReturnType<typeof useGetMediaSuspenseQuery>;
export type GetMediaQueryResult = Apollo.QueryResult<GetMediaQuery, GetMediaQueryVariables>;
export const GetMediaCharactersDocument = gql`
    query GetMediaCharacters($mediaId: Int, $mediaType: MediaType, $page: Int, $perPage: Int) {
  Media(id: $mediaId, type: $mediaType) {
    characters(page: $page, perPage: $perPage, sort: [ROLE, FAVOURITES_DESC]) {
      pageInfo {
        hasNextPage
      }
      ...characterMedia
    }
  }
}
    ${CharacterMediaFragmentDoc}`;

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
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
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
    query GetMediaDetails($mediaId: Int, $mediaType: MediaType, $charactersPerPage: Int, $staffPerPage: Int, $reviewsPerPage: Int) {
  MediaDetails: Media(id: $mediaId, type: $mediaType) {
    ...media
  }
  Following: Page(page: 1) {
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
  MediaInfo: Media(id: $mediaId, type: $mediaType) {
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
  MediaCharacters: Media(id: $mediaId, type: $mediaType) {
    characters(page: 1, perPage: $charactersPerPage, sort: [ROLE, FAVOURITES_DESC]) {
      pageInfo {
        hasNextPage
      }
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
  MediaStaff: Media(id: $mediaId, type: $mediaType) {
    id
    staff(page: 1, perPage: $staffPerPage) {
      pageInfo {
        hasNextPage
      }
      edges {
        id
        role
        node {
          id
          name {
            userPreferred
          }
          image {
            large
          }
        }
      }
    }
  }
  MediaReviews: Media(id: $mediaId, type: $mediaType) {
    reviews(page: 1, perPage: $reviewsPerPage, sort: [RATING_DESC]) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          score
          rating
          ratingAmount
          userRating
          summary
          createdAt
          user {
            id
            name
            avatar {
              medium
            }
          }
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;

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
 *      charactersPerPage: // value for 'charactersPerPage'
 *      staffPerPage: // value for 'staffPerPage'
 *      reviewsPerPage: // value for 'reviewsPerPage'
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
export const GetMediaReviewsDocument = gql`
    query GetMediaReviews($mediaId: Int, $mediaType: MediaType, $page: Int, $perPage: Int) {
  Media(id: $mediaId, type: $mediaType) {
    reviews(page: $page, perPage: $perPage, sort: [RATING_DESC]) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          score
          rating
          ratingAmount
          userRating
          summary
          createdAt
          user {
            id
            name
            avatar {
              medium
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetMediaReviewsQuery__
 *
 * To run a query within a React component, call `useGetMediaReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaReviewsQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      mediaType: // value for 'mediaType'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetMediaReviewsQuery(baseOptions?: Apollo.QueryHookOptions<GetMediaReviewsQuery, GetMediaReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaReviewsQuery, GetMediaReviewsQueryVariables>(GetMediaReviewsDocument, options);
      }
export function useGetMediaReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaReviewsQuery, GetMediaReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaReviewsQuery, GetMediaReviewsQueryVariables>(GetMediaReviewsDocument, options);
        }
export function useGetMediaReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMediaReviewsQuery, GetMediaReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMediaReviewsQuery, GetMediaReviewsQueryVariables>(GetMediaReviewsDocument, options);
        }
export type GetMediaReviewsQueryHookResult = ReturnType<typeof useGetMediaReviewsQuery>;
export type GetMediaReviewsLazyQueryHookResult = ReturnType<typeof useGetMediaReviewsLazyQuery>;
export type GetMediaReviewsSuspenseQueryHookResult = ReturnType<typeof useGetMediaReviewsSuspenseQuery>;
export type GetMediaReviewsQueryResult = Apollo.QueryResult<GetMediaReviewsQuery, GetMediaReviewsQueryVariables>;
export const GetMediaStaffDocument = gql`
    query GetMediaStaff($mediaId: Int, $mediaType: MediaType, $page: Int, $perPage: Int) {
  Media(id: $mediaId, type: $mediaType) {
    id
    staff(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
      }
      edges {
        id
        role
        node {
          id
          name {
            userPreferred
          }
          image {
            large
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetMediaStaffQuery__
 *
 * To run a query within a React component, call `useGetMediaStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaStaffQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      mediaType: // value for 'mediaType'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetMediaStaffQuery(baseOptions?: Apollo.QueryHookOptions<GetMediaStaffQuery, GetMediaStaffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaStaffQuery, GetMediaStaffQueryVariables>(GetMediaStaffDocument, options);
      }
export function useGetMediaStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaStaffQuery, GetMediaStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaStaffQuery, GetMediaStaffQueryVariables>(GetMediaStaffDocument, options);
        }
export function useGetMediaStaffSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMediaStaffQuery, GetMediaStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMediaStaffQuery, GetMediaStaffQueryVariables>(GetMediaStaffDocument, options);
        }
export type GetMediaStaffQueryHookResult = ReturnType<typeof useGetMediaStaffQuery>;
export type GetMediaStaffLazyQueryHookResult = ReturnType<typeof useGetMediaStaffLazyQuery>;
export type GetMediaStaffSuspenseQueryHookResult = ReturnType<typeof useGetMediaStaffSuspenseQuery>;
export type GetMediaStaffQueryResult = Apollo.QueryResult<GetMediaStaffQuery, GetMediaStaffQueryVariables>;
export const SearchMediaDocument = gql`
    query SearchMedia($mediaType: MediaType!, $sort: [MediaSort], $statuses: [MediaStatus], $formats: [MediaFormat], $onList: Boolean, $season: MediaSeason, $year: Int, $genres: [String], $tags: [String], $search: String, $page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
    }
    media(
      type: $mediaType
      sort: $sort
      status_in: $statuses
      onList: $onList
      season: $season
      seasonYear: $year
      format_in: $formats
      genre_in: $genres
      tag_in: $tags
      search: $search
    ) {
      id
      type
      meanScore
      bannerImage
      format
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
      chapters
      volumes
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
 * __useSearchMediaQuery__
 *
 * To run a query within a React component, call `useSearchMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMediaQuery({
 *   variables: {
 *      mediaType: // value for 'mediaType'
 *      sort: // value for 'sort'
 *      statuses: // value for 'statuses'
 *      formats: // value for 'formats'
 *      onList: // value for 'onList'
 *      season: // value for 'season'
 *      year: // value for 'year'
 *      genres: // value for 'genres'
 *      tags: // value for 'tags'
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useSearchMediaQuery(baseOptions: Apollo.QueryHookOptions<SearchMediaQuery, SearchMediaQueryVariables> & ({ variables: SearchMediaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMediaQuery, SearchMediaQueryVariables>(SearchMediaDocument, options);
      }
export function useSearchMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMediaQuery, SearchMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMediaQuery, SearchMediaQueryVariables>(SearchMediaDocument, options);
        }
export function useSearchMediaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchMediaQuery, SearchMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchMediaQuery, SearchMediaQueryVariables>(SearchMediaDocument, options);
        }
export type SearchMediaQueryHookResult = ReturnType<typeof useSearchMediaQuery>;
export type SearchMediaLazyQueryHookResult = ReturnType<typeof useSearchMediaLazyQuery>;
export type SearchMediaSuspenseQueryHookResult = ReturnType<typeof useSearchMediaSuspenseQuery>;
export type SearchMediaQueryResult = Apollo.QueryResult<SearchMediaQuery, SearchMediaQueryVariables>;
export const GetViewerMediaDocument = gql`
    query GetViewerMedia($userId: Int, $mediaType: MediaType, $status: MediaListStatus, $sort: [MediaListSort]) {
  MediaListCollection(
    userId: $userId
    type: $mediaType
    status: $status
    sort: $sort
  ) {
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
 * __useGetViewerMediaQuery__
 *
 * To run a query within a React component, call `useGetViewerMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewerMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewerMediaQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      mediaType: // value for 'mediaType'
 *      status: // value for 'status'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetViewerMediaQuery(baseOptions?: Apollo.QueryHookOptions<GetViewerMediaQuery, GetViewerMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewerMediaQuery, GetViewerMediaQueryVariables>(GetViewerMediaDocument, options);
      }
export function useGetViewerMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewerMediaQuery, GetViewerMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewerMediaQuery, GetViewerMediaQueryVariables>(GetViewerMediaDocument, options);
        }
export function useGetViewerMediaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetViewerMediaQuery, GetViewerMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetViewerMediaQuery, GetViewerMediaQueryVariables>(GetViewerMediaDocument, options);
        }
export type GetViewerMediaQueryHookResult = ReturnType<typeof useGetViewerMediaQuery>;
export type GetViewerMediaLazyQueryHookResult = ReturnType<typeof useGetViewerMediaLazyQuery>;
export type GetViewerMediaSuspenseQueryHookResult = ReturnType<typeof useGetViewerMediaSuspenseQuery>;
export type GetViewerMediaQueryResult = Apollo.QueryResult<GetViewerMediaQuery, GetViewerMediaQueryVariables>;
export const SearchStaffDocument = gql`
    query SearchStaff($search: String, $sort: [StaffSort], $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
    }
    staff(search: $search, sort: $sort) {
      id
      name {
        full
        native
        userPreferred
      }
      image {
        large
        medium
      }
      characters(sort: ROLE) {
        nodes {
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
        }
      }
    }
  }
}
    `;

/**
 * __useSearchStaffQuery__
 *
 * To run a query within a React component, call `useSearchStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchStaffQuery({
 *   variables: {
 *      search: // value for 'search'
 *      sort: // value for 'sort'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useSearchStaffQuery(baseOptions?: Apollo.QueryHookOptions<SearchStaffQuery, SearchStaffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchStaffQuery, SearchStaffQueryVariables>(SearchStaffDocument, options);
      }
export function useSearchStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchStaffQuery, SearchStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchStaffQuery, SearchStaffQueryVariables>(SearchStaffDocument, options);
        }
export function useSearchStaffSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchStaffQuery, SearchStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchStaffQuery, SearchStaffQueryVariables>(SearchStaffDocument, options);
        }
export type SearchStaffQueryHookResult = ReturnType<typeof useSearchStaffQuery>;
export type SearchStaffLazyQueryHookResult = ReturnType<typeof useSearchStaffLazyQuery>;
export type SearchStaffSuspenseQueryHookResult = ReturnType<typeof useSearchStaffSuspenseQuery>;
export type SearchStaffQueryResult = Apollo.QueryResult<SearchStaffQuery, SearchStaffQueryVariables>;
export const GetViewerShortDataDocument = gql`
    query GetViewerShortData {
  Viewer {
    id
    avatar {
      large
    }
  }
}
    `;

/**
 * __useGetViewerShortDataQuery__
 *
 * To run a query within a React component, call `useGetViewerShortDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewerShortDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewerShortDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetViewerShortDataQuery(baseOptions?: Apollo.QueryHookOptions<GetViewerShortDataQuery, GetViewerShortDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewerShortDataQuery, GetViewerShortDataQueryVariables>(GetViewerShortDataDocument, options);
      }
export function useGetViewerShortDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewerShortDataQuery, GetViewerShortDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewerShortDataQuery, GetViewerShortDataQueryVariables>(GetViewerShortDataDocument, options);
        }
export function useGetViewerShortDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetViewerShortDataQuery, GetViewerShortDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetViewerShortDataQuery, GetViewerShortDataQueryVariables>(GetViewerShortDataDocument, options);
        }
export type GetViewerShortDataQueryHookResult = ReturnType<typeof useGetViewerShortDataQuery>;
export type GetViewerShortDataLazyQueryHookResult = ReturnType<typeof useGetViewerShortDataLazyQuery>;
export type GetViewerShortDataSuspenseQueryHookResult = ReturnType<typeof useGetViewerShortDataSuspenseQuery>;
export type GetViewerShortDataQueryResult = Apollo.QueryResult<GetViewerShortDataQuery, GetViewerShortDataQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($userId: Int!, $activitiesPerPage: Int, $favouritesPerPage: Int) {
  User(id: $userId) {
    name
    avatar {
      large
      medium
    }
    bannerImage
    isFollowing
    isFollower
    isBlocked
    favourites {
      anime(page: 1, perPage: $favouritesPerPage) {
        ...animeFavourites
      }
      manga(page: 1, perPage: $favouritesPerPage) {
        ...mangaFavourites
      }
      characters(page: 1, perPage: $favouritesPerPage) {
        ...characterFavourites
      }
      staff(page: 1, perPage: $favouritesPerPage) {
        ...staffFavourites
      }
      studios(page: 1, perPage: $favouritesPerPage) {
        ...studioFavourites
      }
    }
  }
  animeLists: MediaListCollection(userId: $userId, type: ANIME) {
    ...mediaListCollection
  }
  mangaLists: MediaListCollection(userId: $userId, type: MANGA) {
    ...mediaListCollection
  }
  Overview: User(id: $userId) {
    about
    statistics {
      anime {
        count
        meanScore
        minutesWatched
        episodesWatched
        highestCount: genres(limit: 5, sort: [COUNT_DESC]) {
          count
          genre
        }
        highestScore: genres(limit: 5, sort: [MEAN_SCORE_DESC]) {
          meanScore
          genre
        }
        highestProgress: genres(limit: 5, sort: [PROGRESS_DESC]) {
          minutesWatched
          genre
        }
      }
      manga {
        count
        meanScore
        chaptersRead
        volumesRead
        highestCount: genres(limit: 5, sort: [COUNT_DESC]) {
          count
          genre
        }
        highestScore: genres(limit: 5, sort: [MEAN_SCORE_DESC]) {
          meanScore
          genre
        }
        highestProgress: genres(limit: 5, sort: [PROGRESS_DESC]) {
          chaptersRead
          genre
        }
      }
    }
  }
  Activities: Page(page: 1, perPage: $activitiesPerPage) {
    pageInfo {
      hasNextPage
    }
    activities(userId: $userId, sort: [PINNED, ID_DESC]) {
      __typename
      ... on ListActivity {
        id
        status
        progress
        createdAt
        likeCount
        isLiked
        isPinned
        replyCount
        media {
          id
          type
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
        }
      }
    }
  }
}
    ${AnimeFavouritesFragmentDoc}
${MangaFavouritesFragmentDoc}
${CharacterFavouritesFragmentDoc}
${StaffFavouritesFragmentDoc}
${StudioFavouritesFragmentDoc}
${MediaListCollectionFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      activitiesPerPage: // value for 'activitiesPerPage'
 *      favouritesPerPage: // value for 'favouritesPerPage'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUserExtraDocument = gql`
    query GetUserExtra($userId: Int!, $followingPerPage: Int) {
  following: Page(page: 1, perPage: $followingPerPage) {
    pageInfo {
      hasNextPage
    }
    following(userId: $userId, sort: USERNAME) {
      ...user
    }
  }
  followers: Page(page: 1, perPage: $followingPerPage) {
    pageInfo {
      hasNextPage
    }
    followers(userId: $userId, sort: USERNAME) {
      ...user
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserExtraQuery__
 *
 * To run a query within a React component, call `useGetUserExtraQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserExtraQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserExtraQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      followingPerPage: // value for 'followingPerPage'
 *   },
 * });
 */
export function useGetUserExtraQuery(baseOptions: Apollo.QueryHookOptions<GetUserExtraQuery, GetUserExtraQueryVariables> & ({ variables: GetUserExtraQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserExtraQuery, GetUserExtraQueryVariables>(GetUserExtraDocument, options);
      }
export function useGetUserExtraLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserExtraQuery, GetUserExtraQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserExtraQuery, GetUserExtraQueryVariables>(GetUserExtraDocument, options);
        }
export function useGetUserExtraSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserExtraQuery, GetUserExtraQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserExtraQuery, GetUserExtraQueryVariables>(GetUserExtraDocument, options);
        }
export type GetUserExtraQueryHookResult = ReturnType<typeof useGetUserExtraQuery>;
export type GetUserExtraLazyQueryHookResult = ReturnType<typeof useGetUserExtraLazyQuery>;
export type GetUserExtraSuspenseQueryHookResult = ReturnType<typeof useGetUserExtraSuspenseQuery>;
export type GetUserExtraQueryResult = Apollo.QueryResult<GetUserExtraQuery, GetUserExtraQueryVariables>;
export const GetUserListActivitiesDocument = gql`
    query GetUserListActivities($page: Int, $activitiesPerPage: Int, $userId: Int) {
  Page(page: $page, perPage: $activitiesPerPage) {
    pageInfo {
      hasNextPage
    }
    activities(userId: $userId, sort: [PINNED, ID_DESC]) {
      __typename
      ... on ListActivity {
        id
        status
        progress
        createdAt
        likeCount
        isLiked
        isPinned
        replyCount
        media {
          id
          type
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
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserListActivitiesQuery__
 *
 * To run a query within a React component, call `useGetUserListActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserListActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserListActivitiesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      activitiesPerPage: // value for 'activitiesPerPage'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserListActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetUserListActivitiesQuery, GetUserListActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserListActivitiesQuery, GetUserListActivitiesQueryVariables>(GetUserListActivitiesDocument, options);
      }
export function useGetUserListActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserListActivitiesQuery, GetUserListActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserListActivitiesQuery, GetUserListActivitiesQueryVariables>(GetUserListActivitiesDocument, options);
        }
export function useGetUserListActivitiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserListActivitiesQuery, GetUserListActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserListActivitiesQuery, GetUserListActivitiesQueryVariables>(GetUserListActivitiesDocument, options);
        }
export type GetUserListActivitiesQueryHookResult = ReturnType<typeof useGetUserListActivitiesQuery>;
export type GetUserListActivitiesLazyQueryHookResult = ReturnType<typeof useGetUserListActivitiesLazyQuery>;
export type GetUserListActivitiesSuspenseQueryHookResult = ReturnType<typeof useGetUserListActivitiesSuspenseQuery>;
export type GetUserListActivitiesQueryResult = Apollo.QueryResult<GetUserListActivitiesQuery, GetUserListActivitiesQueryVariables>;
export const GetUserMediaListDocument = gql`
    query GetUserMediaList($userId: Int, $mediaType: MediaType) {
  MediaListCollection(userId: $userId, type: $mediaType) {
    ...mediaListCollection
  }
}
    ${MediaListCollectionFragmentDoc}`;

/**
 * __useGetUserMediaListQuery__
 *
 * To run a query within a React component, call `useGetUserMediaListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMediaListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMediaListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      mediaType: // value for 'mediaType'
 *   },
 * });
 */
export function useGetUserMediaListQuery(baseOptions?: Apollo.QueryHookOptions<GetUserMediaListQuery, GetUserMediaListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMediaListQuery, GetUserMediaListQueryVariables>(GetUserMediaListDocument, options);
      }
export function useGetUserMediaListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMediaListQuery, GetUserMediaListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMediaListQuery, GetUserMediaListQueryVariables>(GetUserMediaListDocument, options);
        }
export function useGetUserMediaListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserMediaListQuery, GetUserMediaListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserMediaListQuery, GetUserMediaListQueryVariables>(GetUserMediaListDocument, options);
        }
export type GetUserMediaListQueryHookResult = ReturnType<typeof useGetUserMediaListQuery>;
export type GetUserMediaListLazyQueryHookResult = ReturnType<typeof useGetUserMediaListLazyQuery>;
export type GetUserMediaListSuspenseQueryHookResult = ReturnType<typeof useGetUserMediaListSuspenseQuery>;
export type GetUserMediaListQueryResult = Apollo.QueryResult<GetUserMediaListQuery, GetUserMediaListQueryVariables>;
export const SearchUsersDocument = gql`
    query SearchUsers($search: String, $page: Int, $perPage: Int, $sort: [UserSort]) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
    }
    users(search: $search, sort: $sort) {
      ...user
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useSearchUsersQuery__
 *
 * To run a query within a React component, call `useSearchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsersQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useSearchUsersQuery(baseOptions?: Apollo.QueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
      }
export function useSearchUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
        }
export function useSearchUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
        }
export type SearchUsersQueryHookResult = ReturnType<typeof useSearchUsersQuery>;
export type SearchUsersLazyQueryHookResult = ReturnType<typeof useSearchUsersLazyQuery>;
export type SearchUsersSuspenseQueryHookResult = ReturnType<typeof useSearchUsersSuspenseQuery>;
export type SearchUsersQueryResult = Apollo.QueryResult<SearchUsersQuery, SearchUsersQueryVariables>;
export const GetUserFollowingDocument = gql`
    query GetUserFollowing($userId: Int!, $page: Int, $followingPerPage: Int) {
  Page(page: $page, perPage: $followingPerPage) {
    pageInfo {
      hasNextPage
    }
    following(userId: $userId, sort: USERNAME) {
      ...user
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserFollowingQuery__
 *
 * To run a query within a React component, call `useGetUserFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFollowingQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      page: // value for 'page'
 *      followingPerPage: // value for 'followingPerPage'
 *   },
 * });
 */
export function useGetUserFollowingQuery(baseOptions: Apollo.QueryHookOptions<GetUserFollowingQuery, GetUserFollowingQueryVariables> & ({ variables: GetUserFollowingQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserFollowingQuery, GetUserFollowingQueryVariables>(GetUserFollowingDocument, options);
      }
export function useGetUserFollowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFollowingQuery, GetUserFollowingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserFollowingQuery, GetUserFollowingQueryVariables>(GetUserFollowingDocument, options);
        }
export function useGetUserFollowingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserFollowingQuery, GetUserFollowingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserFollowingQuery, GetUserFollowingQueryVariables>(GetUserFollowingDocument, options);
        }
export type GetUserFollowingQueryHookResult = ReturnType<typeof useGetUserFollowingQuery>;
export type GetUserFollowingLazyQueryHookResult = ReturnType<typeof useGetUserFollowingLazyQuery>;
export type GetUserFollowingSuspenseQueryHookResult = ReturnType<typeof useGetUserFollowingSuspenseQuery>;
export type GetUserFollowingQueryResult = Apollo.QueryResult<GetUserFollowingQuery, GetUserFollowingQueryVariables>;
export const GetUserFollowersDocument = gql`
    query GetUserFollowers($userId: Int!, $page: Int, $followingPerPage: Int) {
  Page(page: $page, perPage: $followingPerPage) {
    pageInfo {
      hasNextPage
    }
    followers(userId: $userId, sort: USERNAME) {
      ...user
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserFollowersQuery__
 *
 * To run a query within a React component, call `useGetUserFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFollowersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      page: // value for 'page'
 *      followingPerPage: // value for 'followingPerPage'
 *   },
 * });
 */
export function useGetUserFollowersQuery(baseOptions: Apollo.QueryHookOptions<GetUserFollowersQuery, GetUserFollowersQueryVariables> & ({ variables: GetUserFollowersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserFollowersQuery, GetUserFollowersQueryVariables>(GetUserFollowersDocument, options);
      }
export function useGetUserFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFollowersQuery, GetUserFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserFollowersQuery, GetUserFollowersQueryVariables>(GetUserFollowersDocument, options);
        }
export function useGetUserFollowersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserFollowersQuery, GetUserFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserFollowersQuery, GetUserFollowersQueryVariables>(GetUserFollowersDocument, options);
        }
export type GetUserFollowersQueryHookResult = ReturnType<typeof useGetUserFollowersQuery>;
export type GetUserFollowersLazyQueryHookResult = ReturnType<typeof useGetUserFollowersLazyQuery>;
export type GetUserFollowersSuspenseQueryHookResult = ReturnType<typeof useGetUserFollowersSuspenseQuery>;
export type GetUserFollowersQueryResult = Apollo.QueryResult<GetUserFollowersQuery, GetUserFollowersQueryVariables>;