import { Client, Wallet, convertStringToHex } from "xrpl";
import sendToIPFS from "./sendToIPFS.js";
import getUserData from "./getUserData.js";
import dotenv from 'dotenv'
dotenv.config()

const networks = {
    RIPPLE_TESTNET: "wss://s.altnet.rippletest.net:51233"
}

let xrplClient;

const getXrplClient = () => {
    if (!xrplClient) {
      xrplClient = new Client(networks.RIPPLE_TESTNET)
    }

    return xrplClient
}

const Wallet1 = Wallet.fromSeed(process.env.XRPL_WALLET_SEED);

export default async function mintToken(walletID) {
    const userData = await getUserData(walletID);

    console.log(userData);

    const [metadatas, img] = await sendToIPFS(userData);

    const ipfsURL = metadatas.url;

    const client = getXrplClient()
    await client.connect()

    const transactionJson = {
      "TransactionType": "NFTokenMint",
      "Account": Wallet1.classicAddress,
      "URI": convertStringToHex(ipfsURL),
      "Flags": 8,
      "TransferFee": 1000,
      "NFTokenTaxon": 0
    }
    // console.log(transactionJson.URI);

    const tx = await client.submitAndWait(transactionJson, { wallet: Wallet1 })

    const hash = tx.result.hash;
    console.log("tx hash: ", hash);

    // const nfts = await client.request({
    //   method: "account_nfts",
    //   account: Wallet1.classicAddress
    // })

    // let results = '\n\nnfts: ' + JSON.stringify(nfts, null, 2)
    // console.log(results);
    // const balance = (await client.getXrpBalance(Wallet1.address))
    // console.log("\nWallet XRP Balance:", balance);

    client.disconnect()

    return [hash, metadatas, img];
}
