"use client"
import {
  ConnectButton,
} from "thirdweb/react";

import { useTwebContext } from '@/components/thirdweb/thirdweb-provider'

import {
  generatePayload,
  isLoggedIn,
  login,
  logout,
} from "@/actions/auth";
import { currentChain } from "@/const/chains";

export function ConnectBtn() {
  const { client, wallets, setLoggedIn } = useTwebContext()
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      chain={currentChain}
      theme={"light"}
      connectModal={{
        size: "wide",
        showThirdwebBranding: false,
      }}
      showAllWallets={false}
      recommendedWallets={[wallets[0]]}
      auth={{
        isLoggedIn: async (address) => {
          // console.log("checking if logged in!", { address });
          const status = await isLoggedIn();
          setLoggedIn(status);
          return status;
        },
        doLogin: async (params) => {
          // console.log("logging in!");
          await login(params);
        },
        getLoginPayload: async ({ address }) =>
          generatePayload({ address }),
        doLogout: async () => {
          // console.log("logging out!");
          await logout();
          setLoggedIn(false);
        },
      }}
    />
  );
}