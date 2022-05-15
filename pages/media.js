import Navbar from "../components/navbar";
import Head from "next/head";
import Image from "next/image";

function Media() {
  return (
    <>
      <Head>
        <title>Media | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />

      <div className="mx-24 items-center mt-40">
        <ul className="flex space-x-10 justify-center p-10 items-center content-center">
          <li>
            <a
              href="mailto:rizqisamawa11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/svg/mail.svg" alt="mail" width={50} height={50} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rizqisamawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/instagram.svg"
                alt="instagram"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/rizqisamawa11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/twitter.svg"
                alt="twitter"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rizqisamawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/github.svg"
                alt="github"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/~rizqisamawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/svg/npm.svg" alt="npm" width={50} height={50} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Media;
