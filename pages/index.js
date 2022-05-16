import Navbar from "../components/navbar";
import Typed from "typed.js";
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "REFLECTION",
        "TWO SIDES",
        "POSITION",
        "BE GRATEFUL",
        "SINCERE",
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: Infinity,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Muhammad Rizqi Samawa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="mx-22 items-center justify-center mt-40 text-center">
        <p className="text-5xl font-sans font-medium tracking-[5px]">
          <span ref={el}></span>
        </p>
      </div>
    </>
  );
}
