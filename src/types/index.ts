import type { Dispatch } from "react";
import type { Dayjs } from "dayjs";

export interface TodoTask {
  _id: string | number;
  title: string;
  status: boolean;
  deadline: Dayjs;
}

export type SortMode = "All" | "Incomplete" | "Complete";

export interface UserInfo {
  isLawyer?: boolean;
  [key: string]: unknown;
}

export interface ContactInfoType {
  contact_phone: string;
  contact_email: string;
  address: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube: string;
}

export interface StoreState {
  UserInfo: UserInfo | null;
  Admin: unknown | null;
  ContactInfo: ContactInfoType;
  Project?: unknown | null;
}

export type StoreAction =
  | { type: "LawyerLogin"; payload: UserInfo }
  | { type: "LawyerLogout" }
  | { type: "ClearUserInfo" }
  | { type: "Admin"; payload: unknown }
  | { type: "UserLoggedIn"; payload: UserInfo }
  | { type: "update"; payload: UserInfo }
  | { type: "ResetUserInfo" };

export interface StoreContextValue {
  state: StoreState;
  dispatch: Dispatch<StoreAction>;
}
