import Navbar from "../components/navbar";
import Head from "next/head";
import ScrollingButton from "../components/scrollingButton";
import data from "../data/data.json";
import { useEffect, useState } from "react";

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setExperience(data.experience);
  }, []);

  const reversedExperience = [...experience].reverse();

  return (
    <>
      <Head>
        <title>Experience | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="mx-22 items-center justify-center text-center">
        <div className="container mx-auto h-full w-full">
          <div className="wrap relative h-full overflow-hidden py-10 md:px-10">
            <div
              className="border-2-2 invisible absolute h-full border border-gray-700 border-opacity-20 md:visible"
              style={{ left: "50%" }}
            ></div>
            {reversedExperience.map((item, index) => (
              <div
                key={index}
                className={`mb-8 flex w-full ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                } items-center justify-between`}
              >
                <div className="order-1 hidden md:block md:w-5/12"></div>
                <div className="z-20 order-1 hidden md:block">
                  <div className="flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
                    <h1 className="mx-auto text-lg font-semibold text-white">
                      {item.id}
                    </h1>
                  </div>
                </div>
                <div className="order-1 w-full rounded-lg bg-gray-100 px-4 py-4 md:w-5/12 md:px-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <h5 className="mb-3 text-lg font-bold text-gray-800">
                    {item.datedet} - {item.role}
                  </h5>
                  <p className="mb-3 text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                    {item.location}
                  </p>
                  <p className="text-xs leading-snug tracking-wide text-gray-900 text-opacity-100">
                    {item.techStack}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollingButton />
    </>
  );
}

export default Experience;
