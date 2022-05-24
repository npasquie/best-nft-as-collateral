import Image from "next/image";
import Repay from "../../modal/repay";
import Deposit from "../../modal/deposit";
// import boredApes from "../imgs/boredApe.png";
import Button from "../Button";
import Input from "./Input";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const boredApe =
  "data:image/png;base64,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";

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
                <img src={boredApe}></img>
                {/* <Image
                  className="rounded-lg object-cover"
                  src={src}
                  layout="fixed"
                  width={150}
                  height={150}
                  alt={name}
                  loader={myLoader}
                /> */}
              </div>
            </div>
            <div className="row inline-flex flex-wrap">
              <div className="p-5 text-xl font-medium  text-white">
                <p>
                  <span>Black Suit Bored Apes</span>
                </p>
              </div>
              <div className="p-5 text-xl font-medium  text-white">
                <p>
                  Supplied: <span>3.5 ETH</span>
                </p>
              </div>
              <div className="p-5 text-xl font-medium  text-white">
                <p>
                  Countdown: <span>Claim in 10 days</span>
                </p>
              </div>
              <div className="p-5 text-xl font-medium text-white">
                <p>
                  Interest: <span>10%</span>
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
