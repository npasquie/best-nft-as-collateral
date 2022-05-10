import logo from "../../public/Frame 9.svg";
import Image from "next/image";
import Link from "next/link"
import { ConnectButton } from "web3uikit";
import { useState } from "react";
const myLoader = ({ src }) => {
  return `${src}`;
};

const Navbar = () => {
  const [show, setshow] = useState(false)
  return (
    <nav className="bg-blue flex h-auto items-center justify-between flex-wrap">
      <a href="#/" className=" items-center inline-flex text-dark ">
        <Image
          className=" block  w-auto object-cover"
          //layout="responsive"
          loader={myLoader}
          src={logo}
          height={150}
          width={200}
        />
       
      </a>
      <div className="lg:hidden">
        <button 
        className=" items-center inline-flex text-white bg-yellow-100 p-3 mr-10 rounded hover:bg-yellow-200 hover:border-yellow-200"
        onClick={()=> {setshow(!show)}}
        >
          <svg
            className="fill-current h-8 w-8"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    <div 
    className={ 
      show ?
              "top-nav w-full block flex-grow flex-end lg:inline-flex lg:flex-grow lg:items-center lg:w-auto" 
              : 
              "top-nav w-full hidden flex-grow flex-end lg:inline-flex lg:flex-grow lg:items-center lg:w-auto"}
              id="navigation"
    >
    <div className="text-xl flex flex-col items-center lg:flex-row lg:inline-flex lg:ml-auto text-white">
        <Link
        href="#/"
        passHref>
            <a  
            onClick={()=> {setshow(!show)}}
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-blue hover:bg-yellow-200">
                Home
            </a>
        </Link>
        <Link
        href="#/dashbord"
        passHref>
            <a  
            onClick={()=> {setshow(!show)}}
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-blue hover:bg-yellow-200">
                Dashboard
            </a>
        </Link>
        <Link
        href="#/pools"
        passHref>
            <a  
             onClick={()=> {setshow(!show)}}
             className="p-4 lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-blue hover:bg-yellow-200">
            Pools
            </a>
        </Link>
        <Link
        href="#/Docs"
        passHref>
            <a 
            onClick={()=> {setshow(!show)}}
            className="p-4 lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-blue hover:bg-yellow-200">
            Docs
            </a>
        </Link>
    <ConnectButton />
    </div>
    </div>
   
  
    </nav>
  );
};

export default Navbar;
