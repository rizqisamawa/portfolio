import Navbar from "../components/navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="mx-22 items-center justify-center mt-20 text-center">
        <p className="text-5xl font-sans font-semibold">Hello Everyone</p>
        <p className="text-2xl font-mono mt-4 p-1">
          {"My Name is Muhammad Rizqi Samawa, I'm a Fresh Graduate"}
        </p>
        <p className="text-xl font-sans p-1 font-light italic ">
          I hope I become a useful person for others
        </p>
        <div className="text-center mt-8">
          <button className="bg-gray-700 font-mono p-2 text-white rounded-lg hover:bg-gray-800">
            npx rizqisamawa
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
