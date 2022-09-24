import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="h-screen bg-home bg-no-repeat bg-cover">
      <div className="container mx-auto px-16 grid grid-cols-2 text-white h-full w-full">
        <div className="h-screen flex flex-col gap-4 justify-center px-24 pr-28 pt-32">
          <p className="text-3xl text-primary">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-9xl font-bellefair">SPACE</h1>
          <p className="text-lg font-barlow tracking-wider text-primary">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="h-screen grid place-items-center pt-32">
          <span className="text-4xl bg-white text-black p-32 rounded-full relative">
            <Link href={"/destinations"}>
              <a className="font-bellefair absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                EXPLORE
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
