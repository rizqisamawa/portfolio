import Navbar from "../components/navbar";
import Head from "next/head";

function Skill() {
  return (
    <>
      <Head>
        <title>Skill | Muhammad Rizqi Samawa</title>
      </Head>
      <Navbar />
      <div className="mx-24 items-center mt-20">
        <div className="grid grid-cols-3 gap-10 mt-2 text-center">
          <div>
            <p className="text-2xl font-mono">Languages</p>
            <p className="text-1xl font-mono">PHP Javascript</p>
            <p className="text-sm font-mono mt-10">
              * Go Dart TypeScript Phyton*
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono">Framework</p>
            <p className="text-1xl font-mono">
              Laravel CodeIgniter NextJS TailwindCSS Bootstrap
            </p>
            <p className="text-sm font-mono mt-4">
              * NuxtJS Flutter ReactNative ExpressJS NodeJS *
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono">Library</p>
            <p className="text-1xl font-mono">ReactJS JQuery</p>
            <p className="text-sm font-mono mt-10">* VueJS ChartJS ThreeJS *</p>
          </div>
          <div>
            <p className="text-2xl font-mono">Database</p>
            <p className="text-1xl font-mono">MySQL</p>
            <p className="text-sm font-mono mt-4">
              * MongoDB PostgreSQL Redis *
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono">Deployment</p>
            <p className="text-1xl font-mono">Vercel</p>
            <p className="text-sm font-mono mt-4">
              * Netlify DigitalOcean cPanel *
            </p>
          </div>
          <div>
            <p className="text-2xl font-mono">Other Tools</p>
            <p className="text-1xl font-mono">VSCode Git</p>
            <p className="text-sm font-mono mt-4">
              * Vim Docker GraphQL NGINX*
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <p className="italic font-semibold underline">
          Note : The * sign is the technology i want to learn.
        </p>
      </div>
    </>
  );
}

export default Skill;
