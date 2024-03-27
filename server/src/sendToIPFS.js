import { NFTStorage } from "nft.storage";
import mime from 'mime'
import fs from 'fs'
import path from 'path'

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

export default async function sendToIPFS() {
  const NFT_STORAGE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNlZDBBODdlNTI3MjY2MEExZTk1NEYwQ0M2RTUwNzc2OTVDNmI4NWUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcxMTAzNjUxMzY3OSwibmFtZSI6IkRlY29kZSBUZXN0In0.KJae81AlykIs7YfOl6iDFMaFCcN6045Oyragco4FN14";

  if (typeof window !== 'undefined') {
    console.log('Côté client');
  } else {
    console.log('Côté serveur');
  }

  console.log("Preparing Metadata ...");

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

  console.log("Uploading Metadata to IPFS ....");

  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store(nft);
  const img = metadata.data.image.href;
  console.log(img)
  console.log("NFT data stored successfully 🚀🚀");
  console.log("Metadata URI: ", metadata.url);

  return [metadata, img];
};
