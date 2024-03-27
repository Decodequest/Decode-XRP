import express from 'express';
import cors from "cors";
import mintToken from "./mintNFT.js";
import sendToIPFS from "./sendToIPFS.js";

const app = express();

app.use(cors());

app.listen(8080, () => console.log('Server started. Listening on port 8080!'));

app.get('/api/v1/users', (req, res) =>{
    try {
      console.log("Coucou")
      const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ];

      return res.status(200).json({ users });
    } catch (error) {
      throw error;
    }

})

app.post("/api/v1/mint", async (req, res) => {
    let hash;

    try {
        hash = await mintToken();
    } catch (error) {
        console.error(error);
    }

    res.status(200).send(hash).toString();
});

app.post("/api/v1/ipfs", async (req, res) => {
    let metadatas;
    let img;

    try {
        console.log(req.query.user);
        [metadatas, img] = await sendToIPFS();
        console.log(metadatas);
        console.log(img);
    } catch (error) {
        console.error(error);
    }

    res.status(200).json( { Metadatas: metadatas, Image: img } );
});

app.post("/api/v1/test", async (req, res) => {
    res.status(200).send("Hey").toString();
});
