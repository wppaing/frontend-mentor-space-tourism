import { useState } from "react";
import Layout from "../components/Layout";
import data from "../utils/data";
import { Tab } from "@headlessui/react";
import Image from "next/image";

export default function Destinations() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="bg-destination h-screen">
      <div className="container mx-auto px-16 grid grid-cols-2 text-white h-full w-full">
        <div className="h-screen flex flex-col gap-4 justify-center px-24 pr-28 pt-32">
          <h2>
            <span>01</span>Pick your destination
          </h2>
          {/* <Image src={} alt='' /> */}
        </div>
        <div className="h-screen grid place-items-center pt-32">
          <div className="mx-20">
            <Tab.Group>
              <Tab.List className={`flex items-center justify-start gap-4`}>
                {data.destinations.map((dest) => (
                  <Tab
                    key={dest.id}
                    className={({ selected }) =>
                      `py-2 text-base uppercase tracking-widest border-b-2 transition-colors duration-150 ${
                        selected
                          ? "border-b-white text-white"
                          : "border-b-transparent text-primary"
                      }`
                    }
                    onClick={(e) => console.log(dest.id)}
                  >
                    {dest.name}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className={"mt-6"}>
                {data.destinations.map((dest) => (
                  <Tab.Panel key={dest.id}>
                    <h3 className="font-bellefair text-8xl uppercase">
                      {dest.name}
                    </h3>
                    <p className="font-barlow text-primary text-lg tracking-wider my-6">
                      {dest.description}
                    </p>
                    <div className="py-[0.5px] backdrop-blur-xl w-full bg-primary"></div>
                    <div className="grid grid-cols-2 mt-6">
                      <div>
                        <h4 className="uppercase tracking-widest text-primary">
                          avg. distance
                        </h4>
                        <p className="font-bellefair text-3xl uppercase">
                          {dest.distance}
                        </p>
                      </div>
                      <div>
                        <h4 className="uppercase tracking-widest text-primary">
                          est. travel time
                        </h4>
                        <p className="font-bellefair text-3xl uppercase">
                          {dest.travel}
                        </p>
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

Destinations.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
