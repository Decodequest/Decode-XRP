import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useStateContext } from "@/context/ThemeContext";
import { doc, setDoc, collection, getDocs } from "@firebase/firestore";
import db from "../../../firebase-config";
import Link from "next/link";

const Dashboard = () => {
  const { userDeatils, account, setUserDetails } = useStateContext();
  console.log("userDeatils", userDeatils);
  
  const [open, setOpen] = useState(true);
  const [hash, setHash] = useState("");
  const [ipfsUri, setIpfsUri] = useState("");
  const [ipfsImg, setIpfsImg] = useState("");
  const [loader, setLoader] = useState(false)
  const [show, setShow] = useState(userDeatils.NFTExists);

  console.log("hash", hash, hash);
  console.log("ipfsUri", ipfsUri);
  console.log("ipfsImg", ipfsImg);

  const CourseAdavanceDetails = [
    {
      name: "Xrp",
      image: "/XRP.png",
      link: "/learn"
    },
    {
      name: "Solidity",
      image: "/SolidityCourse.png",
      link: "#"
    },
    {
      name: "Rust",
      image: "/RustCourse.png",
      link: "#"
    },
    {
      name: "Cario",
      image: "/Cario.png",
      link: "#"
    },
  ];

  const CourseBeginnerDetails = [
    {
      name: "XrpBasics",
      image: "/XrpBasics.png",
    },
    {
      name: "SolidityBasics",
      image: "/SolidityBasics.png",
    },
    {
      name: "RustBasics",
      image: "/RustBasics.png",
    },
  ];

  const AddData = async () => {
    try {
      await setDoc(doc(db, "Decode", `${account}`), {
        ...userDeatils,
        NFTExists: true,
      });
      console.log("Added to DB");
    } catch (err) {
      console.log(err);
    }
  };

  const apiCallMint = async () => {
    setLoader(true)
    console.log("calling mint api");

    const response = await axios.post(
      "http://localhost:8080/api/v1/mint",
      {},
      {
        params: {
          walletID: "67ZamOrDzg1asK7CDrxq",
        },
      }
    );
    console.log("response", response);

    setHash(response.data.Hash);
    // console.log("Hash of the token:", response.data.Hash);

    const url = `https://nftstorage.link/ipfs/${response.data.Metadatas.ipnft}`;
    setIpfsUri("url");
    console.log("IPFS URI:", url);
    //B96A6150F001B2AEA4AF5EF1F933C09808624EEF5D37F618308F8A0FB6538F3C
    //https://nftstorage.link/ipfs/bafyreieeuwf4lqebccdjrgjzzzbe7h4bvglrytuz3b25ebtk3xznpnoj5m
    //https://nftstorage.link/ipfs/bafybeibfj7234fflvasc5h7f6zhqaqiqxoqsqp2f5mqqiuxfrfi44ozdaq/0.png

    const imgUrl = response.data.Image;
    const imgUrlGood = imgUrl.replace(
      "ipfs://",
      "https://nftstorage.link/ipfs/"
    );
    setIpfsImg(imgUrlGood);
    setLoader(false)
    setShow(true);
    imgUrlGood && AddData();
  };

  return (
    <main className="bg-[#070C14] w-full">
      <Navbar />
      {ipfsUri && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-decode-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-white"
                        >
                          NFT minted!
                        </Dialog.Title>
                        <div className="mt-2 pb-4">
                          <p>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://testnet.xrpl.org/transactions/${hash}`}
                              style={{ color: "blue" }}
                            >
                              Check your transaction on XRP Ledger here!
                            </a>
                          </p>
                        </div>
                        {ipfsUri ? (
                          <>
                            <Image
                              src={ipfsImg}
                              alt="NFT Image"
                              width={350}
                              height={150}
                              priority
                            />
                            <div className="pt-4 text-white">
                              Your Ipfs Link Here :{" "}
                              <a style={{ color: "blue" }} href={ipfsUri}>
                                Click here
                              </a>
                            </div>
                          </>
                        ) : (
                          <a>Click and wait few seconds...</a>
                        )}
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpen(false)}
                      >
                        Go back to dashboard
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      <div className="mx-auto max-w-6xl pt-14">
        {!show && (
          <div className="flex justify-between p-8 border border-black rounded-xl bg-[#0D0E14] shadow-2xl">
            <div className="flex flex-col justify-between text-white">
              <div>
                <h1 className="text-2xl pb-6">
                  Woohhhoooo! You’ve earned your first NFT! Start minting now.
                </h1>
                <p className="text-sm italic">
                  {" "}
                  Here’s how to get started with your first NFT minting
                </p>
                <ul className="text-sm italic">
                  <li>lorem ipsum dolor sit amet</li>
                  <li>lorem ipsum dolor sit amet</li>
                  <li>lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <button
                  onClick={apiCallMint}
                  className="bg-white px-8 py-3 text-black rounded-lg"
                >
                  {loader ? "Minting NFT....." : "Mint NFT"}
                </button>
              </div>
            </div>
            <div>
              <img src="/Frame.png" />
            </div>
          </div>
        )}
        <div className="pt-[48px]">
          <p className="text-white text-[25px] pb-6">
            Get started on your quests
          </p>
          <div className="flex gap-x-6">
            {CourseAdavanceDetails.map((details, index) => {
              return (
                <Link href={details.link}>
                    <img src={details.image} className="w-[270px] h-[350px]" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="pt-[48px]">
          <p className="text-white text-[25px] pb-6">
            Compete with your fellow warriors
          </p>
          <div className="flex gap-x-6">
            {CourseBeginnerDetails.map((details, index) => {
              return (
                <img src={details.image} className="w-[270px] h-[350px]" />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
