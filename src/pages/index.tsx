import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Container from "@/components/Container";
import Head from "next/head";
import db from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useStateContext } from "@/context/ThemeContext";
import XPRLWallet from "./login/Xrpl";
import Metamask from "./login/metamask";

type Props = {
  details: [];
};

export default function Home(details: any) {
  const { setUserDetails, account } = useStateContext();

  useEffect(() => {
    const data = details.details.filter((data: any) => data.id === account);
    setUserDetails(data[0]);
  }, [account]);

  return (
    <Container>
      <div className="bg-[#080714] w-full bg-opacity-[70%] h-[500px]">
        <p className="text-white text-center flex justify-center text-[39px] px-10 py-5">
          Connect wallet to start learning
        </p>
        <XPRLWallet />
        <Metamask />
      </div>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const idoCollectionRef = collection(db, "Decode");
  const doc = await getDocs(idoCollectionRef);
  const user_details = doc.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      details: user_details,
    },
  };
};
