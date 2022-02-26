import React, { ReactNode } from 'react'
import { createContext, useEffect, useState, useMemo, useCallback } from "react";
import { getUserInfo, User } from "../services/UserService";
import { getAccessToken } from "../store/AcessTokenStore";

interface UserContextProps {
  user?: User
  getUser: () => Promise<void>,
  isFetching: boolean
}

export const UserContext = createContext<UserContextProps>({
  user: undefined,
  getUser: () => Promise.resolve(),
  isFetching: true
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const getUser = useCallback(async () => {
    try {
      const user = await getUserInfo()

      setUser(user)
      setIsFetching(false)
    } catch(err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    if (getAccessToken()) {
      getUser();
    } else {
      setIsFetching(false)
    }
  }, [getUser]);

  const value = useMemo(() => ({
    getUser,
    user,
    isFetching
  }), [user, getUser, isFetching]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}