/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onCreateBPReading = /* GraphQL */ `subscription OnCreateBPReading(
  $filter: ModelSubscriptionBPReadingFilterInput
  $owner: String
) {
  onCreateBPReading(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBPReadingSubscriptionVariables,
  APITypes.OnCreateBPReadingSubscription
>;
export const onUpdateBPReading = /* GraphQL */ `subscription OnUpdateBPReading(
  $filter: ModelSubscriptionBPReadingFilterInput
  $owner: String
) {
  onUpdateBPReading(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBPReadingSubscriptionVariables,
  APITypes.OnUpdateBPReadingSubscription
>;
export const onDeleteBPReading = /* GraphQL */ `subscription OnDeleteBPReading(
  $filter: ModelSubscriptionBPReadingFilterInput
  $owner: String
) {
  onDeleteBPReading(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBPReadingSubscriptionVariables,
  APITypes.OnDeleteBPReadingSubscription
>;
