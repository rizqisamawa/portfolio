import Navbar from "../components/navbar";
import Head from "next/head";
import Image from "next/image";
import data from "../data/data.json";
import { useState } from "react";

function Media() {
  const [media, setMedia] = useState([]);

  useState(() => {
    setMedia(data.media);
  }, []);

  return (
    <>
      <Head>
        <title>Media | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />

      <div className="mx-22 items-center mt-20 md:mt-40">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 p-2 items-center content-center">
          {media.map((item) => (
            <div className="flex justify-center" key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image src={item.src} alt={item.alt} width={50} height={50} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Media;
