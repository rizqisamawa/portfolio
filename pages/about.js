import Navbar from "../components/navbar";
import Head from "next/head";
import data from "../data/data.json";
import { useState, useEffect } from "react";

function About() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    setAbout(data.about[0]);
  }, []);

  return (
    <>
      <Head>
        <title>About | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="mx-22 mt-20 text-center">
        <p className="text-5xl font-sans font-semibold">{about.title}</p>
        <p className="text-2xl font-mono mt-10 p-1">{about.greeting}</p>
        <p className="text-xl font-sans p-1 font-light italic ">
          {about.motto}
        </p>
        <div className="text-center mt-8">
          <div className="text-center mt-4 justify-center items-center gap-4 md:flex">
            <div className="text-base">Run in your command</div>
            <div className="bg-gray-600 font-mono p-2 text-white rounded-sm hover:bg-gray-900">
              {about.info_npx}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
