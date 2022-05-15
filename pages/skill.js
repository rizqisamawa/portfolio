import Navbar from "../components/navbar";
import Head from "next/head";
import Image from "next/image";

function Media() {
  const images = [
    {
      id: 1,
      href: "mailto:rizqisamawa11@gmail.com",
      src: "/mail.svg",
      alt: "mail",
    },
    {
      id: 2,
      href: "https://www.instagram.com/rizqisamawa",
      src: "/instagram.svg",
      alt: "instagram",
    },
    {
      id: 3,
      href: "https://twitter.com/rizqisamawa11",
      src: "/twitter.svg",
      alt: "twitter",
    },
    {
      id: 4,
      href: "https://github.com/rizqisamawa",
      src: "/github.svg",
      alt: "github",
    },
    {
      id: 5,
      href: "https://www.npmjs.com/~rizqisamawa",
      src: "/npm.svg",
      alt: "npm",
    },
  ];
  return (
    <>
      <Head>
        <title>Media | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />

      <div className="mx-24 items-center mt-40">
        <ul className="flex space-x-10 justify-center p-10 items-center content-center">
          {images.map((img) => {
            return (
              <>
                <li>
                  <a href={img.href} target="_blank" rel="noopener noreferrer">
                    <Image src={img.src} alt={img.alt} width={50} height={50} />
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Media;
