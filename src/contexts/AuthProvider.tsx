import React, { ReactNode } from 'react'
import { createContext, useEffect, useState, useMemo, useCallback } from "react";
import { getUserInfo, User } from "../services/UserService";
import { getAccessToken } from "../store/AcessTokenStore";

export const UserContext = createContext<{ user?: User, getUser: () => Promise<void> }>({
  user: undefined,
  getUser: () => Promise.resolve()
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();

  const getUser = useCallback(async () => {
    try {
      const user = await getUserInfo()

      setUser(user)
    } catch(err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    if (getAccessToken()) {
      getUser();
    }
  }, [getUser]);

  const value = useMemo(() => ({
    getUser,
    user,
  }), [user, getUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}