/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string };
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string };
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any };
  /** A date wihout time information */
  Date: { input: string; output: string };
  /** A date and time */
  Datetime: { input: string; output: string };
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string };
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any };
  /** A time without date information */
  Time: { input: string; output: string };
  /** A universally unique identifier */
  UUID: { input: string; output: string };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars["BigFloat"]["input"]>;
  gt?: InputMaybe<Scalars["BigFloat"]["input"]>;
  gte?: InputMaybe<Scalars["BigFloat"]["input"]>;
  in?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigFloat"]["input"]>;
  lte?: InputMaybe<Scalars["BigFloat"]["input"]>;
  neq?: InputMaybe<Scalars["BigFloat"]["input"]>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]["input"]>;
  gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  neq?: InputMaybe<Scalars["BigInt"]["input"]>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  in?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  neq?: InputMaybe<Scalars["Date"]["input"]>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]["input"]>;
  gt?: InputMaybe<Scalars["Datetime"]["input"]>;
  gte?: InputMaybe<Scalars["Datetime"]["input"]>;
  in?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Datetime"]["input"]>;
  lte?: InputMaybe<Scalars["Datetime"]["input"]>;
  neq?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export enum FilterIs {
  NotNull = "NOT_NULL",
  Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  neq?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  neq?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the `journey` collection */
  deleteFromjourneyCollection: JourneyDeleteResponse;
  /** Deletes zero or more records from the `traveller_info` collection */
  deleteFromtraveller_infoCollection: Traveller_InfoDeleteResponse;
  /** Deletes zero or more records from the `user_info` collection */
  deleteFromuser_infoCollection: User_InfoDeleteResponse;
  /** Adds one or more `journey` records to the collection */
  insertIntojourneyCollection?: Maybe<JourneyInsertResponse>;
  /** Adds one or more `traveller_info` records to the collection */
  insertIntotraveller_infoCollection?: Maybe<Traveller_InfoInsertResponse>;
  /** Adds one or more `user_info` records to the collection */
  insertIntouser_infoCollection?: Maybe<User_InfoInsertResponse>;
  /** Updates zero or more records in the `journey` collection */
  updatejourneyCollection: JourneyUpdateResponse;
  /** Updates zero or more records in the `traveller_info` collection */
  updatetraveller_infoCollection: Traveller_InfoUpdateResponse;
  /** Updates zero or more records in the `user_info` collection */
  updateuser_infoCollection: User_InfoUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromjourneyCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<JourneyFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromtraveller_InfoCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Traveller_InfoFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuser_InfoCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<User_InfoFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntojourneyCollectionArgs = {
  objects: Array<JourneyInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntotraveller_InfoCollectionArgs = {
  objects: Array<Traveller_InfoInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntouser_InfoCollectionArgs = {
  objects: Array<User_InfoInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdatejourneyCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<JourneyFilter>;
  set: JourneyUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatetraveller_InfoCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Traveller_InfoFilter>;
  set: Traveller_InfoUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateuser_InfoCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<User_InfoFilter>;
  set: User_InfoUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars["ID"]["output"];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars["Opaque"]["input"]>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = "AscNullsFirst",
  /** Ascending order, nulls last */
  AscNullsLast = "AscNullsLast",
  /** Descending order, nulls first */
  DescNullsFirst = "DescNullsFirst",
  /** Descending order, nulls last */
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The root type for querying data */
export type Query = {
  __typename?: "Query";
  /** A pagable collection of type `journey` */
  journeyCollection?: Maybe<JourneyConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `traveller_info` */
  traveller_infoCollection?: Maybe<Traveller_InfoConnection>;
  /** A pagable collection of type `user_info` */
  user_infoCollection?: Maybe<User_InfoConnection>;
};

/** The root type for querying data */
export type QueryJourneyCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<JourneyFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<JourneyOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root type for querying data */
export type QueryTraveller_InfoCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Traveller_InfoFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Traveller_InfoOrderBy>>;
};

/** The root type for querying data */
export type QueryUser_InfoCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<User_InfoFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<User_InfoOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  ilike?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  iregex?: InputMaybe<Scalars["String"]["input"]>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  neq?: InputMaybe<Scalars["String"]["input"]>;
  regex?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars["Time"]["input"]>;
  gt?: InputMaybe<Scalars["Time"]["input"]>;
  gte?: InputMaybe<Scalars["Time"]["input"]>;
  in?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Time"]["input"]>;
  lte?: InputMaybe<Scalars["Time"]["input"]>;
  neq?: InputMaybe<Scalars["Time"]["input"]>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]["input"]>;
  in?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Journey = Node & {
  __typename?: "journey";
  created_at: Scalars["Datetime"]["output"];
  fare: Scalars["Int"]["output"];
  from_address: Scalars["String"]["output"];
  hubType: Scalars["String"]["output"];
  id: Scalars["UUID"]["output"];
  inbound: Scalars["Boolean"]["output"];
  status: Scalars["String"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  to_address: Scalars["String"]["output"];
  traveller_info: Traveller_Info;
};

export type JourneyConnection = {
  __typename?: "journeyConnection";
  edges: Array<JourneyEdge>;
  pageInfo: PageInfo;
};

export type JourneyDeleteResponse = {
  __typename?: "journeyDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Journey>;
};

export type JourneyEdge = {
  __typename?: "journeyEdge";
  cursor: Scalars["String"]["output"];
  node: Journey;
};

export type JourneyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<JourneyFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  fare?: InputMaybe<IntFilter>;
  from_address?: InputMaybe<StringFilter>;
  hubType?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  inbound?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<JourneyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<JourneyFilter>>;
  to_address?: InputMaybe<StringFilter>;
  traveller_info?: InputMaybe<UuidFilter>;
};

export type JourneyInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  fare?: InputMaybe<Scalars["Int"]["input"]>;
  from_address?: InputMaybe<Scalars["String"]["input"]>;
  hubType?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  inbound?: InputMaybe<Scalars["Boolean"]["input"]>;
  to_address?: InputMaybe<Scalars["String"]["input"]>;
  traveller_info?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type JourneyInsertResponse = {
  __typename?: "journeyInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Journey>;
};

export type JourneyOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  fare?: InputMaybe<OrderByDirection>;
  from_address?: InputMaybe<OrderByDirection>;
  hubType?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  inbound?: InputMaybe<OrderByDirection>;
  to_address?: InputMaybe<OrderByDirection>;
  traveller_info?: InputMaybe<OrderByDirection>;
};

export type JourneyUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  fare?: InputMaybe<Scalars["Int"]["input"]>;
  from_address?: InputMaybe<Scalars["String"]["input"]>;
  hubType?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  inbound?: InputMaybe<Scalars["Boolean"]["input"]>;
  to_address?: InputMaybe<Scalars["String"]["input"]>;
  traveller_info?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type JourneyUpdateResponse = {
  __typename?: "journeyUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Journey>;
};

export type Traveller_Info = Node & {
  __typename?: "traveller_info";
  created_at: Scalars["Datetime"]["output"];
  first_name: Scalars["String"]["output"];
  flight_number: Scalars["String"]["output"];
  id: Scalars["UUID"]["output"];
  journeyCollection?: Maybe<JourneyConnection>;
  last_name: Scalars["String"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  passenger_count: Scalars["Int"]["output"];
  phone_number: Scalars["String"]["output"];
};

export type Traveller_InfoJourneyCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<JourneyFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<JourneyOrderBy>>;
};

export type Traveller_InfoConnection = {
  __typename?: "traveller_infoConnection";
  edges: Array<Traveller_InfoEdge>;
  pageInfo: PageInfo;
};

export type Traveller_InfoDeleteResponse = {
  __typename?: "traveller_infoDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Traveller_Info>;
};

export type Traveller_InfoEdge = {
  __typename?: "traveller_infoEdge";
  cursor: Scalars["String"]["output"];
  node: Traveller_Info;
};

export type Traveller_InfoFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Traveller_InfoFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  first_name?: InputMaybe<StringFilter>;
  flight_number?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  last_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Traveller_InfoFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Traveller_InfoFilter>>;
  passenger_count?: InputMaybe<IntFilter>;
  phone_number?: InputMaybe<StringFilter>;
};

export type Traveller_InfoInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  flight_number?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  passenger_count?: InputMaybe<Scalars["Int"]["input"]>;
  phone_number?: InputMaybe<Scalars["String"]["input"]>;
};

export type Traveller_InfoInsertResponse = {
  __typename?: "traveller_infoInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Traveller_Info>;
};

export type Traveller_InfoOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  flight_number?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  passenger_count?: InputMaybe<OrderByDirection>;
  phone_number?: InputMaybe<OrderByDirection>;
};

export type Traveller_InfoUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  flight_number?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  passenger_count?: InputMaybe<Scalars["Int"]["input"]>;
  phone_number?: InputMaybe<Scalars["String"]["input"]>;
};

export type Traveller_InfoUpdateResponse = {
  __typename?: "traveller_infoUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Traveller_Info>;
};

export type User_Info = Node & {
  __typename?: "user_info";
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
};

export type User_InfoConnection = {
  __typename?: "user_infoConnection";
  edges: Array<User_InfoEdge>;
  pageInfo: PageInfo;
};

export type User_InfoDeleteResponse = {
  __typename?: "user_infoDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Info>;
};

export type User_InfoEdge = {
  __typename?: "user_infoEdge";
  cursor: Scalars["String"]["output"];
  node: User_Info;
};

export type User_InfoFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_InfoFilter>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_InfoFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_InfoFilter>>;
};

export type User_InfoInsertInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type User_InfoInsertResponse = {
  __typename?: "user_infoInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Info>;
};

export type User_InfoOrderBy = {
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type User_InfoUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type User_InfoUpdateResponse = {
  __typename?: "user_infoUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Info>;
};
