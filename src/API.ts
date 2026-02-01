/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserProfileInput = {
  id?: string | null,
  age?: number | null,
  weight?: number | null,
  height?: number | null,
  highSystolic?: number | null,
  highDiastolic?: number | null,
  enableAlerts?: boolean | null,
};

export type ModelUserProfileConditionInput = {
  age?: ModelIntInput | null,
  weight?: ModelIntInput | null,
  height?: ModelIntInput | null,
  highSystolic?: ModelIntInput | null,
  highDiastolic?: ModelIntInput | null,
  enableAlerts?: ModelBooleanInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  age?: number | null,
  weight?: number | null,
  height?: number | null,
  highSystolic?: number | null,
  highDiastolic?: number | null,
  enableAlerts?: boolean | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserProfileInput = {
  id: string,
  age?: number | null,
  weight?: number | null,
  height?: number | null,
  highSystolic?: number | null,
  highDiastolic?: number | null,
  enableAlerts?: boolean | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateBPReadingInput = {
  id?: string | null,
  systolic: number,
  diastolic: number,
  heartRate: number,
  timestamp: string,
};

export type ModelBPReadingConditionInput = {
  systolic?: ModelIntInput | null,
  diastolic?: ModelIntInput | null,
  heartRate?: ModelIntInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelBPReadingConditionInput | null > | null,
  or?: Array< ModelBPReadingConditionInput | null > | null,
  not?: ModelBPReadingConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type BPReading = {
  __typename: "BPReading",
  id: string,
  systolic: number,
  diastolic: number,
  heartRate: number,
  timestamp: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateBPReadingInput = {
  id: string,
  systolic?: number | null,
  diastolic?: number | null,
  heartRate?: number | null,
  timestamp?: string | null,
};

export type DeleteBPReadingInput = {
  id: string,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  age?: ModelIntInput | null,
  weight?: ModelIntInput | null,
  height?: ModelIntInput | null,
  highSystolic?: ModelIntInput | null,
  highDiastolic?: ModelIntInput | null,
  enableAlerts?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelBPReadingFilterInput = {
  id?: ModelIDInput | null,
  systolic?: ModelIntInput | null,
  diastolic?: ModelIntInput | null,
  heartRate?: ModelIntInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBPReadingFilterInput | null > | null,
  or?: Array< ModelBPReadingFilterInput | null > | null,
  not?: ModelBPReadingFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBPReadingConnection = {
  __typename: "ModelBPReadingConnection",
  items:  Array<BPReading | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  age?: ModelSubscriptionIntInput | null,
  weight?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionIntInput | null,
  highSystolic?: ModelSubscriptionIntInput | null,
  highDiastolic?: ModelSubscriptionIntInput | null,
  enableAlerts?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBPReadingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  systolic?: ModelSubscriptionIntInput | null,
  diastolic?: ModelSubscriptionIntInput | null,
  heartRate?: ModelSubscriptionIntInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBPReadingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBPReadingFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    age?: number | null,
    weight?: number | null,
    height?: number | null,
    highSystolic?: number | null,
    highDiastolic?: number | null,
    enableAlerts?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    age?: number | null,
    weight?: number | null,
    height?: number | null,
    highSystolic?: number | null,
    highDiastolic?: number | null,
    enableAlerts?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    age?: number | null,
    weight?: number | null,
    height?: number | null,
    highSystolic?: number | null,
    highDiastolic?: number | null,
    enableAlerts?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBPReadingMutationVariables = {
  input: CreateBPReadingInput,
  condition?: ModelBPReadingConditionInput | null,
};

export type CreateBPReadingMutation = {
  createBPReading?:  {
    __typename: "BPReading",
    id: string,
    systolic: number,
    diastolic: number,
    heartRate: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBPReadingMutationVariables = {
  input: UpdateBPReadingInput,
  condition?: ModelBPReadingConditionInput | null,
};

export type UpdateBPReadingMutation = {
  updateBPReading?:  {
    __typename: "BPReading",
    id: string,
    systolic: number,
    diastolic: number,
    heartRate: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBPReadingMutationVariables = {
  input: DeleteBPReadingInput,
  condition?: ModelBPReadingConditionInput | null,
};

export type DeleteBPReadingMutation = {
  deleteBPReading?:  {
    __typename: "BPReading",
    id: string,
    systolic: number,
    diastolic: number,
    heartRate: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    age?: number | null,
    weight?: number | null,
    height?: number | null,
    highSystolic?: number | null,
    highDiastolic?: number | null,
    enableAlerts?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      age?: number | null,
      weight?: number | null,
      height?: number | null,
      highSystolic?: number | null,
      highDiastolic?: number | null,
      enableAlerts?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBPReadingQueryVariables = {
  id: string,
};

export type GetBPReadingQuery = {
  getBPReading?:  {
    __typename: "BPReading",
    id: string,
    systolic: number,
    diastolic: number,
    heartRate: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBPReadingsQueryVariables = {
  filter?: ModelBPReadingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBPReadingsQuery = {
  listBPReadings?:  {
    __typename: "ModelBPReadingConnection",
    items:  Array< {
      __typename: "BPReading",
      id: string,
      systolic: number,
      diastolic: number,
      heartRate: number,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    age?: number | null,
    weight?: number | null,
    height?: number | null,
    highSystolic?: number | null,
    highDiastolic?: number | null,
    enableAlerts?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    age?: number | null,
    weight?: number | null,
    height?: number | null,
    highSystolic?: number | null,
    highDiastolic?: number | null,
    enableAlerts?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    age?: number | null,
    weight?: number | null,
    height?: number | null,
    highSystolic?: number | null,
    highDiastolic?: number | null,
    enableAlerts?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBPReadingSubscriptionVariables = {
  filter?: ModelSubscriptionBPReadingFilterInput | null,
  owner?: string | null,
};

export type OnCreateBPReadingSubscription = {
  onCreateBPReading?:  {
    __typename: "BPReading",
    id: string,
    systolic: number,
    diastolic: number,
    heartRate: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBPReadingSubscriptionVariables = {
  filter?: ModelSubscriptionBPReadingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBPReadingSubscription = {
  onUpdateBPReading?:  {
    __typename: "BPReading",
    id: string,
    systolic: number,
    diastolic: number,
    heartRate: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBPReadingSubscriptionVariables = {
  filter?: ModelSubscriptionBPReadingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBPReadingSubscription = {
  onDeleteBPReading?:  {
    __typename: "BPReading",
    id: string,
    systolic: number,
    diastolic: number,
    heartRate: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
