import { useState, useEffect, useContext } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { useStateContext } from "../../context/ThemeContext";

declare let window: any;

export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};

const Metamask = () => {
  const { account, handleAccount } = useStateContext();
  console.log("account", account);

  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState<any>(initialState);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));
    };

    getProvider();
  }, []);

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    handleAccount(accounts);
    updateWallet(accounts);
  };

  const updateWallet = async (accounts: any) => {
    const balance = formatBalance(
      await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );
    const chainId = await window.ethereum!.request({
      method: "eth_chainId",
    });
    setWallet({ accounts, balance, chainId });
  };

  return (
    <div className="flex justify-between items-center text-white px-10 py-5">
       {/*  <div>
                Injected Provider {hasProvider ? "DOES" : "DOES NOT"} Exist
            </div> 
        */}
      <div className="flex">
        <div>
          <img src="metamsk.png" />
        </div>
        <div className="flex justify-center">
          {hasProvider && (
            <button onClick={handleConnect} className="pl-5 text-[20px]">
              {" "}
              MetaMask
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <img src="arrow.png" className="w-5 h-5" />
      </div>

      {/*   {wallet.accounts.length > 0 && (    
                <>
                    <div>Wallet Accounts: {wallet.accounts[0]}</div>
                    <div>Wallet Balance: {wallet.balance}</div> 
                </>
        )} */}
    </div>
  );
};

export default Metamask;