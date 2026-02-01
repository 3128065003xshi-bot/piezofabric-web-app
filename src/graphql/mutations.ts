/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const createBPReading = /* GraphQL */ `mutation CreateBPReading(
  $input: CreateBPReadingInput!
  $condition: ModelBPReadingConditionInput
) {
  createBPReading(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBPReadingMutationVariables,
  APITypes.CreateBPReadingMutation
>;
export const updateBPReading = /* GraphQL */ `mutation UpdateBPReading(
  $input: UpdateBPReadingInput!
  $condition: ModelBPReadingConditionInput
) {
  updateBPReading(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBPReadingMutationVariables,
  APITypes.UpdateBPReadingMutation
>;
export const deleteBPReading = /* GraphQL */ `mutation DeleteBPReading(
  $input: DeleteBPReadingInput!
  $condition: ModelBPReadingConditionInput
) {
  deleteBPReading(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBPReadingMutationVariables,
  APITypes.DeleteBPReadingMutation
>;
