import { ImCross } from "react-icons/im";
import imgSrc from "../../../public/images/image2.svg";
import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Repay = ({ modalOn2, setmodalOn2, modalOn, setmodalOn }) => {
  return (
    <div
      className="modal fade absolute inset-x-0 -top-4  flex w-full justify-center items-center h-auto outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog d-flex content-center rounded-4xl items-center w-3/4 relative  pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-blue-800 bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4  rounded-xl">
            <h5 className="text-3xl font-medium leading-normal text-white mx-2">
              Borrowed
            </h5>
            <button
              type="button"
              className="btn-close box-content w-5 h-5 p-1 text-2xl text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <ImCross />
            </button>
          </div>
          <div className="modal-body bg-blue-600 m-3 rounded-2xl relative p-4">
            <div className="container flex bg-blue-600 rounded-xl  items-center justify-between p-5">
              <div className="inline-flex items-center p-5 rounded flex-wrap">
                <div className="p-5 text-white rounded-2xl overflow-hidden">
                  <Image
                    className="rounded-lg object-cover"
                    src={imgSrc}
                    layout="fixed"
                    width={150}
                    height={150}
                    alt="nft"
                    loader={myLoader}
                  />
                </div>
                <div className="p-5 text-white">
                  <p>
                    <span>name : #</span>id
                  </p>
                </div>

                <div className="p-5 text-white">
                  <p>
                    Countdown: <span>countdown</span>
                  </p>
                </div>
                <div className="p-5 text-white">
                  <p>
                    To refund: <span>interest$</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap content-center items-center justify-end p-5  ">
            <button
              onClick={() => {
                setmodalOn2(!modalOn2);
                setmodalOn(!modalOn);
                setTimeout(() => {
                  setmodalOn2(false);
                }, 2000);
              }}
              type="button"
              className="px-3
                        py-2.5
                        bg-purple-600
                        text-blue
                        font-large
                        text-md
                        w-5/6
                        bg-yellow-200
                        leading-tight
                        uppercase
                        rounded-xl
                        shadow-md
                        m-auto
                        hover:bg-purple-700 hover:shadow-lg
                        focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-purple-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out"
              data-bs-dismiss="modal"
            >
              Repay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repay;
