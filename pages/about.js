import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import data from "../data/data.json";
import { useState } from "react";

export default function About() {
  const [about, setAbout] = useState([]);

  useState(() => {
    setAbout(data.about[0]);
  }, []);

  return (
    <>
      <Head>
        <title>About | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-[200px] h-[300px] md:w-[240px] md:h-[422px] overflow-hidden border-4 border-black shadow-md">
              <Image
                src="/me.png"
                alt="Foto Muhammad Rizqi Samawa"
                width={240}
                height={432}
                className="object-cover"
                style={{ objectPosition: "center top" }}
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{about.nama}</h1>
            <p className="text-gray-600 text-sm mb-6 text-center md:text-left">
              {about.role}
            </p>

            <div className="space-y-4 text-sm md:text-base text-gray-700 text-justify">
              <p>
                Halo! Saya adalah seorang <strong>Fullstack Developer</strong>{" "}
                yang memiliki minat dalam membangun aplikasi dari sisi frontend
                maupun backend.
              </p>
              <p>
                Saya menyukai eksplorasi berbagai teknologi mulai dari Next.js,
                Laravel, Flutter, hingga Docker. Saya juga berfokus pada
                membangun UI/UX yang ramah pengguna serta performa aplikasi yang
                optimal.
              </p>
              <p>
                Di waktu luang, saya gemar bermain voli, menonton film, bermain
                game klasik favorit, membaca komik, dan mendengarkan radio.
                Aktivitas tersebut membantu saya tetap segar dan mendapatkan
                inspirasi baru untuk proyek yang saya kerjakan.
              </p>
              <p>
                Selain itu, saya aktif mengembangkan portofolio saya melalui
                berbagai proyek freelance, open-source, dan eksperimen pribadi
                untuk terus meningkatkan kemampuan teknis dan kreatif saya.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center transition">
              <Link href="/skill">
                <a className="px-4 py-2 bg-black text-white rounded text-sm hover:opacity-50">
                  Skill
                </a>
              </Link>
              <Link href="/experience">
                <a className="px-4 py-2 bg-black text-white rounded text-sm hover:opacity-50">
                  Experience
                </a>
              </Link>
              <Link href="/media">
                <a className="px-4 py-2 bg-black text-white rounded text-sm hover:opacity-50">
                  Media
                </a>
              </Link>
              <Link href="https://drive.google.com/file/d/15HWiRsoZyVv28yvBuQYUFbRWnYByDSIt/view?usp=sharing">
                <a
                  target="_blank"
                  className="px-4 py-2 bg-black text-white rounded text-sm hover:opacity-50"
                >
                  View CV
                </a>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 mt-8 text-sm text-gray-700">
              Jalankan di terminal kamu untuk informasi kecil :
              <pre className="bg-gray-900 text-white px-2 py-1 rounded w-fit font-mono text-xs">
                {about.info_npx}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
