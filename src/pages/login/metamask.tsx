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
        handleAccount(accounts)                                      
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
        <div className="App text-white">
            <div>
                Injected Provider {hasProvider ? "DOES" : "DOES NOT"} Exist
            </div>

            {hasProvider && (                         
                <button onClick={handleConnect}>Connect MetaMask</button>
            )}

            {wallet.accounts.length > 0 && (    
                <>
                    <div>Wallet Accounts: {wallet.accounts[0]}</div>
                    <div>Wallet Balance: {wallet.balance}</div> 
                </>
            )}
        </div>
    );
};

export default Metamask;