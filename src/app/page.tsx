import Image from "next/image";
import SunnyButton from "../components/SunnyButton";
import RainbowButton from "../components/RainbowButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-row w-screen mb-4 p-1">

        <div className="basis-1/3">
          {/* empty */}
        </div>

        <a
          className="basis-1/3 my-2 pointer-events-none lg:pointer-events-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/WeRaGlobal.svg"
            alt="WeRa Global"
            className="dark mx-auto"
            width={160}
            height={60}
            priority
          />
        </a>

        <div className="basis-1/3 pt-4">
          <div className="ml-auto pr-16 w-min">
            <RainbowButton />
          </div>
        </div>
      </div>

      {/* <div className="w-3/6 border-t-2 border-[#fdfd96]/60 py-2"/> */}

      <div className="w-full pb-[15px] max-w-4xl items-center justify-between font-mono text-sm lg:flex">

        <div className="pb-1">
          <SunnyButton href="#" title="Button">
            ???
          </SunnyButton>
        </div>

        <SunnyButton href="#" title="Button">
            Invest
        </SunnyButton>

        <div className="w-0" />

        <SunnyButton href="#" title="Button">
          Stake
        </SunnyButton>

        <div className="pb-1">
          <SunnyButton href="#" title="Button">
            Faucet
          </SunnyButton>
        </div>

      </div>

      <div className="relative flex items-center justify-center w-[1100px] h-[700px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/distantSun.png')" }}></div>

        <div className="
          relative text-center w-[900px] h-[650px]
          shadow-inner bg-black/80
          rounded-xl border border-[#fdfd96]/60"
        >
          <h1 className="text-2xl font-bold"></h1>
        </div>

      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-1/3 lg:max-w-5xl lg:grid-cols-2 lg:text-center">
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
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
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
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about WeRa Global.
          </p>
        </a>

      </div>
    </main>
  );
}
