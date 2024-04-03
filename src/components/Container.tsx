import React from "react";

export default function Container({ children }: any) {
  return (
    <main className="bg-background w-full h-screen bg-decode-black">
      <div className="container w-[420px] m-auto">
        <div className="flex justify-center pt-12">
          <img src="/logo.png" className="w-[154px] h-[48px]" />
        </div>
        {children}
      </div>
    </main>
  );
}
