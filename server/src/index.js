import express from 'express';
import cors from "cors";
import mintToken from "./mintNFT.js";

const app = express();
app.use(cors());

app.listen(8080, () => console.log('Server started. Listening on port 8080!'));

app.post("/api/v1/mint", async (req, res) => {
    let hash, metadatas, img;

    try {
        [hash, metadatas, img] = await mintToken(req.query.walletID);
    } catch (error) {
        console.error(error);
    }

    res.status(200).json( { Hash: hash, Metadatas: metadatas, Image: img } );
});
