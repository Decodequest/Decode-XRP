import { NFTStorage } from "nft.storage";
import mime from 'mime'
import fs from 'fs'
import path from 'path'
import * as dotenv from 'dotenv'
dotenv.config()

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

export default async function sendToIPFS() {
  const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;

  console.log("Preparing Metadata...");

  const image = await fileFromPath("img/1.png")

  const nft = {
    image: image,
    name: "Name",
    description: "Raw Description",
    properties: {
        strength: "11",
        speed: "7",
        intelligence: "6",
    }
  };

  console.log("Uploading Metadata to IPFS...");

  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store(nft);
  const img = metadata.data.image.href;
  console.log(img)
  console.log("NFT data stored successfully 🚀");
  console.log("Metadata URI: ", metadata.url);

  return [metadata, img];
};
