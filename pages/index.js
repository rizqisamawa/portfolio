import Navbar from "../components/navbar";
import Styles from "../styles/home.module.css";
import Typed from "typed.js";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";

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
      <div className="mx-24 items-center justify-center mt-10 text-center">
        <div className={Styles.box}></div>
        <p className="mt-8 text-8xl font-sans font-medium tracking-[5px]">
          <span ref={el}></span>
        </p>
      </div>
    </>
  );
}
