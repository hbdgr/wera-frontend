import Image from "next/image";
import TopButton from '../components/TopButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <TopButton href="#" title="Button">
          Button 1
        </TopButton>

        <TopButton href="#" title="Button">
          Button 2
        </TopButton>

        <div className="flex items-center justify-center ">
          <a
            className="flex items-center place-items-center gap-2 pointer-events-none lg:pointer-events-auto"
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

        <TopButton href="#" title="Button">
          Button 3
        </TopButton>

        <TopButton href="#" title="Button">
          Button 4
        </TopButton>

      </div>



      <div className="flex items-center justify-center h-[600px]">
        <div className="relative w-[600px] h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/distantSun.png')" }}></div>
          <div className="relative z-10 p-8 rounded-lg text-center">
            <h1 className="text-2xl font-bold">Your Component</h1>
            {/* Add more content here */}
          </div>
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
