import Container from "@/components/Container";
import React from "react";
import Metamask from "./metamask";
import XPRLWallet from "./Xrpl";

const Login = () => {
  return(
    <Container>
        <div className="bg-[#080714] w-full bg-opacity-[70%] h-[500px]">
          <p className="text-white">Connect wallet to start learning</p>
          <Metamask/>
          <XPRLWallet/>
        </div>
    </Container>
  )
}

export default Login