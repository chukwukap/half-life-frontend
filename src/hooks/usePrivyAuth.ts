import { usePrivy } from "@privy-io/react-auth";
import { useCallback } from "react";

export function usePrivyAuth() {
  const {
    ready,
    authenticated,
    user,
    login,
    logout,
    linkWallet,
    unlinkWallet,
    createWallet,
    wallet,
  } = usePrivy();

  const handleLogin = useCallback(async () => {
    try {
      await login();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }, [login]);

  const handleLogout = useCallback(async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }, [logout]);

  return {
    ready,
    authenticated,
    user,
    wallet,
    handleLogin,
    handleLogout,
    linkWallet,
    unlinkWallet,
    createWallet,
  };
}
