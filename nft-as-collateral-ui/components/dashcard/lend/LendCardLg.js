import Image from "next/image";
import Repay from "../../modal/repay";
import Deposit from "../../modal/deposit";
import Button from "../Button";
import Input from "./Input";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const LendCardLg = ({
  id,
  name,
  src,
  totalDeposit,
  totalBorrowed,
  countdown,
  interest,
  modalOn,
  setmodalOn,
  modalOn2,
  setmodalOn2,
  polypusAbi,
  contractAddress,
  valueToLoan,
  runContractFunction,
}) => {
  return (
    <div className="container relative hidden xl:block w-auto xl:max-w-1/2  p-10 mx-auto rounded-xl bg-blue-700">
      <div className="flex flex-start p-5">
        <h3 className="text-3xl text-white text-center">Lent</h3>
      </div>
      <div className="container m-auto">
        <div className="container flex bg-blue-600 rounded-xl items-center my-6 justify-between p-5">
          <div className="inline-flex items-center  flex-wrap">
            <div className="row inline-flex flex-wrap">
              <div className="p-5 text-white rounded-2xl overflow-hidden">
                <Image
                  className="rounded-lg object-cover"
                  src={src}
                  layout="fixed"
                  width={150}
                  height={150}
                  alt={name}
                  loader={myLoader}
                />
              </div>
            </div>
            <div className="row inline-flex flex-wrap">
              <div className="p-5 text-xl font-medium  text-white">
                <p>
                  <span>{name} : #</span>
                  {id}
                </p>
              </div>
              <div className="p-5 text-xl font-medium  text-white">
                <p>
                  Total borrowed: <span>{totalBorrowed}</span>
                </p>
              </div>
              <div className="p-5 text-xl font-medium  text-white">
                <p>
                  Total borrowed: <span>{totalBorrowed}</span>
                </p>
              </div>
              <div className="p-5 text-xl font-medium  text-white">
                <p>
                  Countdown: <span>{countdown}</span>
                </p>
              </div>
              <div className="p-5 text-xl font-medium text-white">
                <p>
                  Interest: <span>{interest}</span>
                </p>
              </div>
            </div>
          </div>
          <Button
            modalOn={modalOn}
            setmodalOn={setmodalOn}
            modalOn2={modalOn2}
            setmodalOn2={setmodalOn2}
          />
        </div>
        {modalOn && (
          <Input
            modalOn={modalOn}
            setmodalOn={setmodalOn}
            modalOn2={modalOn2}
            setmodalOn2={setmodalOn2}
          />
        )}
      </div>
    </div>
  );
};

export default LendCardLg;
