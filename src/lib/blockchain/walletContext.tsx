import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { useAccount, useDisconnect } from "wagmi";
import { chainNames } from "./config";

interface WalletContextProps {
  isConnected: boolean;
  address: string | undefined;
  chainId: number | undefined;
  chainName: string | undefined;
  disconnectWallet: () => void;
  openConnectModal: () => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const { address, isConnected, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const chainName = chainId
    ? chainNames[chainId as keyof typeof chainNames]
    : undefined;

  const disconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  const openConnectModal = useCallback(() => {
    if (typeof window !== "undefined") {
      // Access Web3Modal global object from the window
      const w3mModal = (window as any).w3mModal;
      if (w3mModal) {
        w3mModal.open();
      }
    }
  }, []);

  const value = {
    isConnected,
    address,
    chainId,
    chainName,
    disconnectWallet,
    openConnectModal,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

export function useWallet(): WalletContextProps {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
