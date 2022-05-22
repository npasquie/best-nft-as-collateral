import Image from "next/image";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { contractAddress } from "../../../constants";
import { useState } from "react";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const LendCardSm = ({
  id,
  name,
  src,
  totalDeposit,
  totalBorrowed,
  countdown,
  interest,
}) => {
  return (
    <div className="flex w-4/5 xl:hidden flex-col   rounded-lg shadow-lg m-auto p-8 bg-blue-600 ">
      <h5 className="text-gray-900 text-xl font-medium p-3 mb-2">Lent</h5>
      <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image
          className="rounded-xl object-fill"
          src={src}
          layout="responsive"
          width={500}
          height={500}
          alt={name}
          loader={myLoader}
        />
      </a>
      <div className="p-3">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
        <p>
          Total borrowed: <span>{totalBorrowed}</span>
        </p>
        <p>
          Countdown: <span>{countdown}</span>
        </p>
        <p>
          Interest: <span>{interest}</span>
        </p>
        <button
          type="button"
          className=" inline-block w-full m-auto px-6 py-2.5 bg-yellow-100 text-blue font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Supply
        </button>
      </div>
    </div>
  );
};

export default LendCardSm;
