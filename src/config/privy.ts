import { PrivyClientConfig } from '@privy-io/react-auth';

// Privy configuration
export const privyConfig: PrivyClientConfig = {
  appearance: {
    theme: 'light',
    accentColor: '#6366f1',
    showWalletLoginFirst: true,
  },
  loginMethods: ['email', 'wallet', 'google', 'discord'],
  embeddedWallets: {
    createOnLogin: 'all-users',
    noPromptOnSignature: true,
  },
  defaultChain: 1, // Ethereum Mainnet
  supportedChains: [1], // Add more chains as needed
}; 