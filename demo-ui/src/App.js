import "./App.css";
import logo from "./imgs/plp.png";
import conn from "./imgs/Connect.png";
import Image from "react-bootstrap/Image";
import Core from "./Core";
import { useState } from "react";
import { useEthers } from "@usedapp/core";
import { Button, Container, Row, Col } from "react-bootstrap";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function App() {
  const { account, chainId } = useEthers();
  const [page, setPage] = useState("dash");
  const [cameBack, setCameBack] = useState(false);
  return (
    <div className="App">
      <body
        style={{
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          backgroundColor: "#0c102e",
        }}
      >
        <Navbar setPage={setPage} setCameBack={setCameBack} />
        {!account && (
          <>
            <Image src={conn}></Image>
          </>
        )}
        {account && <Core page={page} cameBack={cameBack} />}
      </body>
    </div>
  );
}

export default App;

const Navbar = ({ setPage, setCameBack }) => {
  const { activateBrowserWallet, account, chainId } = useEthers();
  const [show, setshow] = useState(false);
  return (
    <nav
      style={{ padding: "0", backgroundColor: "#0c102e" }}
      className="bg-blue-900 flex h-auto items-center justify-between flex-wrap"
    >
      <div>
        <a href="#/" className=" items-center inline-flex text-dark ">
          <Image
            style={{ height: "7em", marginBottom: "0" }}
            className=" block  w-auto object-cover"
            src={logo}
            height={150}
            width={200}
          />
        </a>
      </div>
      <div className="lg:hidden">
        <button
          className=" items-center inline-flex text-white bg-yellow-100 p-3 mr-10 rounded hover:bg-yellow-200 hover:border-yellow-200"
          onClick={() => {
            setshow(!show);
          }}
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
          show
            ? "top-nav w-full block flex-grow flex-end lg:inline-flex lg:flex-grow lg:items-center lg:w-auto"
            : "top-nav hidden flex-grow flex-end lg:inline-flex lg:flex-grow lg:items-center lg:w-auto"
        }
        id="navigation"
      >
        <div className="text-xl flex flex-col items-center lg:flex-row lg:flex lg:ml-auto text-white">
          <Button
            onClick={() => {
              setPage("dash");
              setCameBack(true);
            }}
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-blue-900 hover:bg-yellow-100"
          >
            Dashboard
          </Button>
          <Button
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-blue-900 hover:bg-yellow-100"
            onClick={() => {
              setPage("market");
            }}
          >
            Markets
          </Button>
          <Button
            onClick={() => {
              setPage("auction");
            }}
            className="p-4 lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-blue-900 hover:bg-yellow-100"
          >
            Auction
          </Button>
          <a className="p-4 lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-blue-900 hover:bg-yellow-100">
            Docs
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            className="p-4 lg:inline-flex lg:w-auto px-3 py-2 rounded text-blue-900 bg-yellow-400"
            onClick={() => {
              activateBrowserWallet();
            }}
          >
            {!account && <>Connect Wallet</>}
            {account && <>tobou.eth</>}
          </Button>
          &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </nav>
  );
};
