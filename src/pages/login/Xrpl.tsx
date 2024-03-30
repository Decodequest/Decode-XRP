import { useEffect, useState } from "react";
import { XrplPrivateKeyProvider } from "@web3auth/xrpl-provider";
import {
  SafeEventEmitterProvider,
  getChainConfig,
  CHAIN_NAMESPACES,
} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { Web3Auth } from "@web3auth/modal";
import RPC from "../login/xrplRPC";

const clientId =
  "BGenusTIDE8IORYNOUx31xH1GH4gvBks3cbG0X-2r9a9uWR94dQZCs7P57TWkY7KbgZnF0KhyLTI6wiVX64wdf8"; // get from https://dashboard.web3auth.io

function XPRLWallet() {
  const [web3auth, setWeb3auth] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);

  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.OTHER,
    chainId: "0x2",
    // Avoid using public rpcTarget & wsTarget in production.
    // Use services like Infura, Quicknode etc
    rpcTarget: "https://testnet-ripple-node.tor.us",
    wsTarget: "wss://s.altnet.rippletest.net",
    ticker: "XRP",
    tickerName: "XRPL",
    displayName: "xrpl testnet",
    blockExplorer: "https://testnet.xrpl.org",
  };

  useEffect(() => {
    const init = async () => {
      try {
        // const xrplProvider = new XrplPrivateKeyProvider({
        //     config: {
        //         chainConfig: chainConfig
        //     },
        //   });

        const privateKeyProvider: any = new XrplPrivateKeyProvider({
          config: { chainConfig },
        });

        console.log(privateKeyProvider.config);

        const web3auth = new Web3Auth({
          clientId,
          uiConfig: {
            appName: "W3A",
            // appLogo: "https://web3auth.io/images/web3authlog.png", // Your App Logo Here
            theme: {
              primary: "red",
            },
            mode: "dark",
            logoLight: "https://web3auth.io/images/web3authlog.png",
            logoDark: "https://web3auth.io/images/web3authlogodark.png",
            defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
            loginGridCol: 3,
            primaryButton: "externalLogin", // "externalLogin" | "socialLogin" | "emailLogin"
            // uxMode: UX_MODE.REDIRECT,
          },
          web3AuthNetwork: "sapphire_mainnet",
          privateKeyProvider,
        });

        const openloginAdapter = new OpenloginAdapter({
          loginSettings: {
            mfaLevel: "optional",
          },
          adapterSettings: {
            uxMode: "redirect", // "redirect" | "popup"
            whiteLabel: {
              logoLight: "https://web3auth.io/images/web3authlog.png",
              logoDark: "https://web3auth.io/images/web3authlogodark.png",
              defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
              // dark: false, // whether to enable dark mode. defaultValue: false
            },
            mfaSettings: {
              deviceShareFactor: {
                enable: true,
                priority: 1,
                mandatory: true,
              },
              backUpShareFactor: {
                enable: true,
                priority: 2,
                mandatory: false,
              },
              socialBackupFactor: {
                enable: true,
                priority: 3,
                mandatory: false,
              },
              passwordFactor: {
                enable: true,
                priority: 4,
                mandatory: false,
              },
            },
          },
        });
        web3auth.configureAdapter(openloginAdapter);

        setWeb3auth(web3auth);

        await web3auth.initModal();

        if (web3auth.connected) {
          setProvider(web3auth.provider!);
          //   setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const getAccounts = async () => {
    // if (!provider) {
    //   uiConsole("provider not initialized yet");
    //   return;
    // }
    const rpc = new RPC(provider);
    const userAccount = await rpc.getAccounts();
    console.log("Accpuint info: ", userAccount);
  };

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    console.log("web3authProvider", web3authProvider);

    // setProvider(web3authProvider!);
    // setLoggedIn(true);
  };

  return (
    <>
      <button onClick={login} className="text-white">
        Web3Auth Xrpl
      </button>
      <button onClick={getAccounts} className="card">
        Get Accounts
      </button>
    </>
  );
}

export default XPRLWallet;
