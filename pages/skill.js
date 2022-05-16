import Navbar from "../components/navbar";
import Head from "next/head";

function Skill() {
  return (
    <>
      <Head>
        <title>Skill | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="mx-22 items-center mt-20">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-10 mt-2 text-center">
          <div>
            <p className="text-2xl font-mono underline">Languages</p>
            <p className="text-1xl font-mono">PHP Javascript</p>
            <p className="text-sm font-mono md:mt-10">
              * Go Dart TypeScript Phyton*
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono underline">Framework</p>
            <p className="text-1xl font-mono">
              Laravel CodeIgniter NextJS TailwindCSS Bootstrap
            </p>
            <p className="text-sm font-mono mt-4 md:mt-4">
              * NuxtJS Flutter ReactNative ExpressJS NodeJS *
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono underline">Library</p>
            <p className="text-1xl font-mono">ReactJS JQuery</p>
            <p className="text-sm font-mono md:mt-10">
              * VueJS ChartJS ThreeJS *
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono underline">Database</p>
            <p className="text-1xl font-mono">MySQL</p>
            <p className="text-sm font-mono md:mt-4">
              * MongoDB PostgreSQL Redis *
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono underline">Deployment</p>
            <p className="text-1xl font-mono">Netlify</p>
            <p className="text-sm font-mono md:mt-4">
              * Vercel DigitalOcean cPanel *
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono underline">Other Tools</p>
            <p className="text-1xl font-mono">VSCode Git</p>
            <p className="text-sm font-mono md:mt-4">
              * Vim Docker GraphQL NGINX*
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="italic font-bold underline text-sm md:text-base my-10">
            Note : The * sign is the technology i want to learn.
          </p>
        </div>
      </div>
    </>
  );
}

export default Skill;
