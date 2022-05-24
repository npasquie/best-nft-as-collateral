import Button from "../Button";
import Deposit from "../../modal/deposit";
const Input = ({ modalOn, setmodalOn, modalOn2, setmodalOn2 }) => {
  return (
    <div className="container flex bg-blue-600 rounded-xl my-6 items-center justify-center p-5">
      <div className="inline-flex items-center  flex-wrap">
        <div className="row flex content-center flex-wrap">
          <div className="p-5 text-xl font-medium  text-white">
            <input
              className="appearance-none p-5 w-2/3 bg-gray-200 text-gray-700 border border-red-500 rounded leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
            />
          </div>
          <div className="p-5 text-xl font-medium  text-white">
            <input
              className="appearance-none p-5 w-2/3 bg-gray-200 text-gray-700 border border-red-500 rounded leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        {modalOn2 && (
          <Deposit
            setmodalOn={setmodalOn}
            modalOn={modalOn}
            setmodalOn2={setmodalOn2}
            modalOn2={modalOn2}
          />
        )}
      </div>
      <Button
        modalOn={modalOn}
        setmodalOn={setmodalOn}
        modalOn2={modalOn2}
        setmodalOn2={setmodalOn2}
      />
    </div>
  );
};

export default Input;
