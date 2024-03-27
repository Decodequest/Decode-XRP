import { Client, Wallet, convertStringToHex } from "xrpl";

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

const Wallet1 = Wallet.fromSeed('sEdVsttB6eqqL39LURRfG1LsUbDoDfL'); // Public : rEfdm8aEDaViMx5pAv5Wz344cCB8zdgtJS

export default async function mintToken() {
    // let results = 'Connecting to....'
    // if (standbyResultField.current) {
    //   standbyResultField.current.value = results;
    // }

    const client = getXrplClient()
    await client.connect()

    // results += '\nConnected. Minting NFT.'
    // if (standbyResultField.current) {
    //   standbyResultField.current.value = results;
    // }

    // const uriHex = standbyTokenUrlField.current ? convertStringToHex(standbyTokenUrlField.current.value) : '';

    const transactionJson = {
      "TransactionType": "NFTokenMint",
      "Account": Wallet1.classicAddress,
      "URI": convertStringToHex("https://framerusercontent.com/images/BJXhV1Gboqk3vc2TwNqzRbt58U.webp"),
      "Flags": 8,
      "TransferFee": 1000,
      "NFTokenTaxon": 0
    }

    // console.log(transactionJson.URI);

    const tx = await client.submitAndWait(transactionJson, { wallet: Wallet1 })
    // console.log("tx : ", tx);

    const hash = tx.result.hash;
    console.log("tx hash: ", hash);

    // const nfts = await client.request({
    //   method: "account_nfts",
    //   account: Wallet1.classicAddress
    // })

    // results += '\n\nTransaction result: ' + tx.result.meta.TransactionResult
    // results += '\n\nnfts: ' + JSON.stringify(nfts, null, 2)
    // console.log(results);
    // const balance = (await client.getXrpBalance(Wallet1.address))
    // console.log("\nWallet XRP Balance:", balance);

    client.disconnect()

    return hash;
}
