import Image from "next/image";
import TopButton from '../components/TopButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">

      <div className="flex mb-[10px] items-center justify-center">
        <a
          className="flex items-center place-items-center pointer-events-none lg:pointer-events-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/WeRaGlobal.svg"
            alt="WeRa Global"
            className="dark"
            width={160}
            height={60}
            priority
          />
        </a>
      </div>

      <div className="w-full pb-[15px] max-w-4xl items-center justify-between font-mono text-sm lg:flex">

        <div className="pb-1">
          <TopButton href="#" title="Button">
            Button 1
          </TopButton>
        </div>

        <TopButton href="#" title="Button">
          Button 2
        </TopButton>

        <div className="w-0" />

        <TopButton href="#" title="Button">
          Button 3
        </TopButton>

        <div className="pb-1">
          <TopButton href="#" title="Button">
            Button 4
          </TopButton>
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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
