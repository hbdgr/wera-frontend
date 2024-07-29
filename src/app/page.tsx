import Image from "next/image";
import SunnyButton from "../components/SunnyButton";

import Header from "./header";

export default function Home() {
  return (
    <main className="
      flex flex-col w-full min-h-screen items-center justify-between
      relative bg-cover bg-center
      "
      style={{ backgroundImage: "url('/distantSun.png')" }}
    >

      <Header />

      <div className="
        hidden lg:flex items-center justify-between font-mono text-sm
        w-full pb-[20px] pt-4 max-w-4xl mb-auto
      ">

        <div className="pb-1 p-2 pt-0 lg:p-0">
          <SunnyButton href="#" title="Button">
            ???
          </SunnyButton>
        </div>

        <div className="p-2 lg:p-0">
          <SunnyButton href="#" title="Button">
              Invest
          </SunnyButton>
        </div>

        <div className="w-0" />

        <div className="p-2 lg:p-0">
          <SunnyButton href="#" title="Button">
            Stake
          </SunnyButton>
        </div>

        <div className="pb-1 p-2 lg:p-0">
          <SunnyButton href="#" title="Button">
            Faucet
          </SunnyButton>
        </div>

      </div>

      <div className="
        relative  flex grow items-center justify-center
        w-11/12 m-2 lg:w-10/12 lg:m-20 xl:w-8/12
        shadow-inner bg-black/75 rounded-xl border border-sunny-300/60
      ">
      </div>

      <div className="shadow-inner w-screen m-4 border border-sunny-300/30">
      </div>

      <div className="grid text-left pl-2 mb-2 mr-auto lg:mr-0 lg:mb-0 lg:w-1/2 lg:max-w-5xl lg:grid-cols-2 lg:text-center">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-2 pr-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">
            Find in-depth information about <br/> WeRa Global.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-2 pr-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">
            Learn more about WeRa Global.
          </p>
        </a>

      </div>
    </main>
  );
}
