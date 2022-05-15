import Navbar from "../components/navbar";
import Image from "next/image";
import Head from "next/head";

function Media() {
  const image = [
    {
      id: 1,
      href: "mailto:rizqisamawa11@gmail.com",
      src: "/svg/mail.svg",
      alt: "mail",
    },
    {
      id: 2,
      href: "https://www.instagram.com/rizqisamawa",
      src: "/svg/instagram.svg",
      alt: "instagram",
    },
    {
      id: 3,
      href: "https://twitter.com/rizqisamawa11",
      src: "/svg/twitter.svg",
      alt: "twitter",
    },
    {
      id: 4,
      href: "https://github.com/rizqisamawa",
      src: "/svg/github.svg",
      alt: "github",
    },
    {
      id: 5,
      href: "https://www.npmjs.com/~rizqisamawa",
      src: "/svg/npm.svg",
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
          {image.map((img) => {
            return (
              <div key={img.id}>
                <li>
                  <a href={img.href} target="_blank" rel="noopener noreferrer">
                    <Image src={img.src} alt={img.src} width={50} height={50} />
                  </a>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Media;
