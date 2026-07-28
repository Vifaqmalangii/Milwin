"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import { ContactInfo } from "@/lib/data";
import type {
  StoreAction,
  StoreContextValue,
  StoreState,
} from "@/types";

export const Store = createContext<StoreContextValue | undefined>(undefined);

const initialState: StoreState = {
  UserInfo: null,
  Admin: null,
  ContactInfo,
};

function reducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case "LawyerLogin":
      localStorage.setItem("UserInfo", JSON.stringify(action.payload));
      return { ...state, UserInfo: action.payload };
    case "LawyerLogout":
      localStorage.removeItem("UserInfo");
      localStorage.removeItem("Project");
      return { ...state, UserInfo: null, Project: null };
    case "ClearUserInfo":
      return { ...state, UserInfo: null };
    case "Admin":
      return { ...state, Admin: action.payload };
    case "UserLoggedIn":
      return { ...state, UserInfo: action.payload };
    case "update":
      return { ...state, UserInfo: action.payload };
    case "ResetUserInfo":
      return { ...state, UserInfo: null };
    default:
      return state;
  }
}

function hydrateFromStorage(): Partial<StoreState> {
  if (typeof window === "undefined") return {};

  const hydrated: Partial<StoreState> = {};

  const userInfo = localStorage.getItem("UserInfo");
  if (userInfo) {
    try {
      hydrated.UserInfo = JSON.parse(userInfo) as StoreState["UserInfo"];
    } catch {
      hydrated.UserInfo = null;
    }
  }

  const admin = localStorage.getItem("Admin");
  if (admin) {
    try {
      hydrated.Admin = JSON.parse(admin);
    } catch {
      hydrated.Admin = null;
    }
  }

  const contactInfo = localStorage.getItem("ContactInfo");
  if (contactInfo) {
    try {
      hydrated.ContactInfo = JSON.parse(contactInfo) as StoreState["ContactInfo"];
    } catch {
      hydrated.ContactInfo = ContactInfo;
    }
  }

  return hydrated;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const hydrated = hydrateFromStorage();
    if (hydrated.UserInfo) {
      dispatch({ type: "UserLoggedIn", payload: hydrated.UserInfo });
    }
    if (hydrated.Admin) {
      dispatch({ type: "Admin", payload: hydrated.Admin });
    }
  }, []);

  const value: StoreContextValue = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export function useStore(): StoreContextValue {
  const context = useContext(Store);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
