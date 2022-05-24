import Image from "next/image";
import Repay from "../modal/repay";
import { useState } from "react";
import Confirm from "../modal/confirm";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
};
const DashCardSm = ({ id, name, src, totalDeposit, totalBorrowed, countdown, interest }) => {

  const [modalOn, setmodalOn] = useState(false);
  const [modalOn2, setmodalOn2] = useState(false);
  const [choice, setChoice] = useState(false);

  return (
    <div className="flex w-4/5 xl:hidden flex-col   rounded-lg shadow-lg m-auto p-8  bg-blue-600 ">
      <h5 className="text-gray-900 text-xl font-medium p-3 mb-2">Borrowed</h5>
      <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image className="rounded-xl object-fill" src={src} layout="responsive" width={500} height={500} alt={name} loader={myLoader} />
      </a>
      <div className="p-3">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
        <p>Total borrowed: <span>{totalBorrowed}</span></p>
        <p>Countdown: <span>{countdown}</span></p>
        <p>Interest: <span>{interest}</span></p>
        <button
          type="button"
          onClick={() => setmodalOn(!modalOn)}
          className=" inline-block w-full m-auto px-6 py-2.5 bg-yellow-100 text-blue font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">Repay</button>
      </div>
      {
        modalOn && <Repay setmodalOn={setmodalOn} modalOn={modalOn} setmodalOn2={setmodalOn2} modalOn2={modalOn2} />

      }
      {
        modalOn2 && <Confirm />

      }
    </div>
  )
}

export default DashCardSm;