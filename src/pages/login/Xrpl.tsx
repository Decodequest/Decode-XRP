import { useEffect, useState } from "react";
import { XrplPrivateKeyProvider } from "@web3auth/xrpl-provider";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { Web3Auth } from "@web3auth/modal";
import RPC from "../login/xrplRPC";
import { useStateContext } from "@/context/ThemeContext";
import { useRouter } from 'next/router';

const clientId =
  "BGenusTIDE8IORYNOUx31xH1GH4gvBks3cbG0X-2r9a9uWR94dQZCs7P57TWkY7KbgZnF0KhyLTI6wiVX64wdf8"; // get from https://dashboard.web3auth.io

function XPRLWallet() {
  const { account, handleAccount, setBalance, balance, setChainId } = useStateContext();
  const router = useRouter();

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

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    console.log("web3authProvider", web3authProvider);

    const rpc = new RPC(provider);    
    console.log("rpc", rpc);
    
    const userAccount = await rpc.getAccounts();
    console.log("userAccount", userAccount);
    
    userAccount && router.push('/form');
    console.log("userAccount", userAccount);
    
    const balanceAmount = await rpc.getBalance();
    setChainId(chainConfig.chainId)
    setBalance(balanceAmount)
    handleAccount(userAccount.account_data.Account);
  };

  return (
    <>
      <div className="flex justify-between items-center text-white px-10 py-5">
        <div className="flex">
          <div className="bg-white rounded-md">
            <img src="web3auth.png" className="w-10 h-10" />
          </div>
          <div className="flex justify-center">
            <button onClick={login} className="pl-5 text-[20px]">
              {" "}
              Web3Auth Xrpl
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="arrow.png" className="w-5 h-5" />
        </div>
      </div>
    </>
  );
}

export default XPRLWallet;
