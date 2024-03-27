import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hash, setHash] = useState("");

  const apiCallMint = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/mint");
    setHash(response.data);
    console.log("Hash of the token:", response.data);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">Decode</h1>
          <button onClick={apiCallMint} style={{ backgroundColor: "blue", color: 'white', fontSize: '18px', borderRadius: '8px', padding: '10px 20px', }}>Mint Your NFT</button>
          
          {hash && (
            <div style={{ color: 'blue', alignItems: 'center' }}>
              <h3>NFT minted!</h3>
              <p>
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://testnet.xrpl.org/transactions/${hash}`}
                  style={{ color: 'blue' }}
                >
                Check your transaction on XRP Ledger here!
                </a>
              </p>
            </div>
          )}
      </div>
    </main>
  );
}
