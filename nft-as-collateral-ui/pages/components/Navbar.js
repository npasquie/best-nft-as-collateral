import logo from "../../public/Frame 9.svg";
import Image from "next/image";
import Link from "next/link"
const myLoader = ({ src }) => {
  return `${src}`;
};

const Navbar = () => {
  return (
    <nav className="bg-blue flex h-15 items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 text-dark ">
        <Image
          className=" block h-2 w-auto"
          //layout="intrinsic"
          loader={myLoader}
          src={logo}
          height={100}
          width={250}
        />
        <span className="font-semibold text-3xl tracking-tight">
          NFTrade
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    <div class="w-full block flex-grow flex-end lg:flex lg:items-center lg:w-auto">
    <div class="text-xl lg:flex-grow lg:flex lg:justify-end flex-end text-white">
        <Link
        href="/#dashbord"
        passHref>
            <a className="p-4">
                Dashboard
            </a>
        </Link>
        <Link
        href="/#pools"
        passHref>
            <a className="p-4">
            Pools
            </a>
        </Link>
        <Link
        href="/#Docs"
        passHref>
            <a className="p-4">
            Docs
            </a>
        </Link>
    </div>
    </div>
    </nav>
  );
};

export default Navbar;
