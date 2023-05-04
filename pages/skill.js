import Navbar from "../components/navbar";
import Image from "next/image";
import Head from "next/head";

function Skill() {
  const tools = [
    { name: "HTML", svg: "https://cdn.worldvectorlogo.com/logos/html-1.svg"},
    { name: "CSS", svg: "https://cdn.worldvectorlogo.com/logos/css-3.svg"},
    { name: "PHP", svg: "https://cdn.worldvectorlogo.com/logos/php-logo-only-letter.svg"},
    { name: "JavaScript", svg: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"},
    { name: "TypeScript", svg: "https://cdn.worldvectorlogo.com/logos/typescript.svg"},
    { name: "CodeIgniter", svg: "https://www.svgrepo.com/show/353579/codeigniter.svg"},
    { name: "Laravel", svg: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg"},
    { name: "Node JS", svg: "https://www.svgrepo.com/show/303360/nodejs-logo.svg"},
    { name: "Express JS", svg: "https://cdn.worldvectorlogo.com/logos/express-109.svg"},
    { name: "React JS", svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg"},
    { name: "Next JS", svg: "https://cdn.worldvectorlogo.com/logos/next-js.svg"},
    { name: "React Native", svg: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"},
    { name: "TailwindCSS", svg: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"},
    { name: "Bootstrap", svg: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"},
    { name: "JQuery", svg: "https://cdn.worldvectorlogo.com/logos/jquery-1.svg"},
    { name: "MySQL", svg: "https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png"},
    { name: "PostgreSQL", svg: "https://www.svgrepo.com/show/354200/postgresql.svg"},
    { name: "MongoDB", svg: "https://www.svgrepo.com/show/354090/mongodb.svg"},
    { name: "Prisma", svg: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg"},
    { name: "Vercel", svg: "https://cdn.worldvectorlogo.com/logos/vercel.svg"},
    { name: "VSCode", svg: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"},
    { name: "GIT", svg: "https://cdn.worldvectorlogo.com/logos/git-icon.svg"},
    { name: "NPM", svg: "https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg"},
    { name: "Figma", svg: "https://img.icons8.com/?size=512&id=zfHRZ6i1Wg0U&format=png"},
  ];

  return (
    <>
      <Head>
        <title>Skill | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="mx-22 items-center mt-20">
        <div className="flex justify-center">
          <div className="grid grid-cols-10 gap-6">
            {tools.map((tool, index) => (
              <div className="block w-24 text-center" key={index}>
                <div className="border-[3px] bg-white border-black p-3 rounded-xl h-24 hover:bg-black">
                  <Image
                    src={tool.svg}
                    alt={tool.name}
                    width={100}
                    height={100}
                  />
                </div>
                <p className="mt-2 font-thin">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
