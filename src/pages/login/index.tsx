import Container from "@/components/Container";
import React from "react";
import Metamask from "./metamask";

const Login = () => {
  return(
    <Container>
        <div className="bg-[#080714] w-full bg-opacity-[70%] h-[500px]">
          <p className="text-white text-center flex justify-center text-[39px] px-10 py-5">
            Connect wallet to start learning
          </p>
          <Metamask/>
        </div>
    </Container>
  )
}

export default Login