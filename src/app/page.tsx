import Header from "./header";

export default function Home() {

  return (
    <main className="
      flex flex-col w-full min-h-screen items-center justify-between
      relative bg-cover bg-center
      "
    >

      <div className="
        relative flex flex-col items-center justify-between
        w-full lg:w-2/3 h-screen m-auto mb-96
        shadow-inner bg-transparent border border-wera-yellow
      ">
        <Header />

        <button className="
          px-6 py-3 font-semibold text-xl
          lg:text-2xl
          shadow-lg rounded-full border
          mx-auto my-auto mt-44
          bg-transparent text-wera-yellow border-wera-yellow
          hover:text-wera-dark hover:bg-wera-yellow hover:border-wera-yellow
          active:text-wera-dark active:bg-wera-yellow active:border-wera-yellow
        ">
          Become Solar Resident
        </button>

      </div>

    </main>
  );
}
