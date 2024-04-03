import db from "../firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

export default async function getUserData(walletID) {
  const idoCollectionRef = collection(db, "Decode");
  const doc = await getDocs(idoCollectionRef);
  const allDatas = doc.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  let userData;

  for (const user of allDatas) {
    if (user.id == walletID) {
        userData = user;

        break;
    }
  }

  return userData;
}
