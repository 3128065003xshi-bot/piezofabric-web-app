/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    id
    age
    weight
    height
    highSystolic
    highDiastolic
    enableAlerts
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      age
      weight
      height
      highSystolic
      highDiastolic
      enableAlerts
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const getBPReading = /* GraphQL */ `query GetBPReading($id: ID!) {
  getBPReading(id: $id) {
    id
    systolic
    diastolic
    heartRate
    timestamp
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBPReadingQueryVariables,
  APITypes.GetBPReadingQuery
>;
export const listBPReadings = /* GraphQL */ `query ListBPReadings(
  $filter: ModelBPReadingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBPReadings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      systolic
      diastolic
      heartRate
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBPReadingsQueryVariables,
  APITypes.ListBPReadingsQuery
>;
