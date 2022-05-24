import { ImSpinner10 } from "react-icons/im";

const Deposit = () => {
  return (
    <div
      className="modal fade absolute inset-x-0 -top-4  flex w-full justify-center items-center h-auto outline-none overflow-x-hidden overflow-y-auto z-10"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog d-flex content-center rounded-full items-center w-3/4 relative  pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-blue-800 bg-clip-padding rounded-md outline-none text-current z-10">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4  rounded-xl">
            <h5 className="text-3xl font-medium leading-normal text-white mx-2">
              Confirm Transation
            </h5>
            <button
              type="button"
              className="btn-close box-content w-5 h-5 p-1 text-2xl text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <ImSpinner10 />
            </button>
          </div>
          <div className="modal-body bg-blue-600 border-solid border-8 border-yellow-100 m-9 rounded-2xl relative p-4">
            <div className="container flex bg-blue-600 rounded-xl  items-center justify-center p-5">
              <div className="flex-column items-center flex-center p-5 rounded flex-wrap">
                <div className="p-5 text-white text-xl text-center">
                  <p>Deposit 60 Eth</p>
                </div>
                <div className="p-5 text-xl font-semibold  text-white text-center">
                  <p>Confirm transaction in your wallet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
