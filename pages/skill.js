import Navbar from "../components/navbar";
import Image from "next/image";
import Head from "next/head";
import data from "../data/data.json";
import { useEffect, useState } from "react";

function Skill() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    setTools(data.skill);
  }, []);

  return (
    <>
      <Head>
        <title>Skill | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="mx-22 items-center mt-20">
        <div className="flex justify-center">
          <div className="grid gap-12 grid-cols-2 md:grid-cols-5 lg:gap-6 lg:grid-cols-10 ">
            {tools.map((tool, index) => (
              <div className="block w-24 text-center" key={index}>
                <div className="border-[3px] bg-white border-black p-3 rounded-xl h-24 hover:bg-black">
                  <Image
                    src={tool.svg}
                    alt={tool.name}
                    width={100}
                    height={100}
                  />
                </div>
                <p className="mt-2 font-thin">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
