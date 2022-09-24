import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/shared/logo.svg";

export default function Navigation() {
  return (
    <div className="fixed left-0 top-8 w-full">
      <div className="container mx-auto flex items-center justify-between pl-16">
        <Link href={"/"}>
          <a>
            <Image src={Logo} alt="" />
          </a>
        </Link>
        <nav className="flex items-center justify-between gap-8 pl-36 pr-36 text-white backdrop-blur-2xl uppercase">
          <Link href={"/"}>
            <a className="py-8 tracking-widest">
              <span className="font-medium mr-2">00</span> Home
            </a>
          </Link>
          <Link href={"/destinations"}>
            <a className="py-8 tracking-widest">
              <span className="font-medium mr-2">01</span> Destination
            </a>
          </Link>
          <Link href={"/crews"}>
            <a className="py-8 tracking-widest">
              <span className="font-medium mr-2">02</span> Crew
            </a>
          </Link>
          <Link href={"/technologies"}>
            <a className="py-8 tracking-widest">
              <span className="font-medium mr-2">03</span> Technology
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
