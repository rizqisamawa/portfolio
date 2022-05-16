import Navbar from "../components/navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="mx-24 mt-20 items-center justify-center">
        <p className="text-center font-sans text-2xl font-semibold md:text-6xl">Hello Everyone</p>
        <p className="mt-4 p-1 text-justify font-mono md:text-center md:text-2xl">{"My Name is Muhammad Rizqi Samawa, I'm a Fresh Graduate"}</p>
        <p className="p-1 text-justify font-sans text-sm font-light italic md:text-center md:text-xl">I hope I become a useful person for others</p>
        <div className="mt-5 text-center md:mt-10">
          <button className="rounded-lg bg-gray-700 p-2 font-mono text-white hover:bg-gray-900">npx rizqisamawa</button>
        </div>
      </div>
    </>
  );
}

export default About;
