import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hash, setHash] = useState("");
  const [ipfsUri, setIpfsUri] = useState("");
  const [ipfsImg, setIpfsImg] = useState("");

  const apiCallMint = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/mint", {}, {
      params: {
        user: "Username"
      }    
    });

    setHash(response.data.Hash);
    console.log("Hash of the token:", response.data.Hash);

    const url = `https://nftstorage.link/ipfs/${response.data.Metadatas.ipnft}`;
    setIpfsUri(url);
    console.log("IPFS URI:", url);

    const imgUrl = response.data.Image;
    const imgUrlGood = imgUrl.replace("ipfs://", "https://nftstorage.link/ipfs/")
    setIpfsImg(imgUrlGood);
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
            {ipfsUri ? (
                <>
                  <Image
                      src={ipfsImg}
                      alt="NFT Image"
                      width={450}
                      height={150}
                      priority
                  />
                  <a target="_blank" rel="noopener noreferrer" href={ipfsUri}>Your Ipfs Link Here</a>
                </>
            ) : (
              <a>Click and wait few seconds...</a>
            )}
      </div>
    </main>
  );
}
