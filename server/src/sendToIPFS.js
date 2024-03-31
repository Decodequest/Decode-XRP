import { NFTStorage } from "nft.storage";
import mime from 'mime'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

export default async function sendToIPFS(userData) {
  const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;

  console.log("Preparing Metadata...");

  const image = await fileFromPath(`img/${userData.RankXRPL}.png`)

  const nft = {
    image: image,
    name: userData.Name,
    description: "Raw Description",
    properties: {
        strength: userData.PropertiesXRPL.Strength,
        speed: userData.PropertiesXRPL.Speed,
        accuracy: userData.PropertiesXRPL.Accuracy,
    }
  };

  console.log("Uploading Metadata to IPFS...");

  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store(nft);
  const img = metadata.data.image.href;
  console.log("NFT data stored successfully 🚀");
  console.log("Metadata URI: ", metadata.url);

  return [metadata, img];
};
