import Container from "@/components/Container";
import Head from "next/head";
import db from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

type Props = {
  details: [];
};

export default function Home({ details }: Props) {
  return (
    <>
      <Head>
        <title>Decode</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <h1>Get Firbase Details</h1>
        <div>
          {details.map((data: any, index: any) => {
            console.log("data", data);

            return (
              <h1 key={index} className="text-black">
                {data.Name}
              </h1>
            );
          })}
        </div>
      </div>
    </>
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
