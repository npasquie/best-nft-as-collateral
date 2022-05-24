import Image from "next/image";

const PoolCard = ({
  myLoader,
  name,
  image,
  alt,
  liquity,
  wpy,
  loanDuration,
  LTV,
}) => {
  return (
    <div className="flex flex-col  lg:w-3/5  rounded-lg shadow-lg m-4 p-3 bg-blue-700 ">
      <div className="container p-3">
        <h5 className="text-white text-xl font-medium m-2">{name}</h5>
      </div>
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image
          className="rounded-lg"
          src={image}
          layout="responsive"
          width={800}
          height={650}
          alt={alt}
          loader={myLoader}
        />
      </a>
      <div className="flex flex-col p-3 justify-start content-between">
        <div className="flex content-between">
          <div className="container w-full">
            <span class="text-xs inline-block m-2 m-w-1/3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
              {liquity}
            </span>
            {"  "}
          </div>
          <div className="container  inline-block w-1/3">
            <h4 className="text-white my-2">Liquidity</h4>
          </div>
        </div>
        <div className="flex content-between">
          <div className="container w-full">
            <span class="text-xs inline-block m-2 m-w-1/3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
              {wpy}
            </span>
            {"  "}
          </div>
          <div className="container inline-block w-1/3">
            <h4 className="text-white my-2">WPY</h4>
          </div>
        </div>
        <div className="flex content-between">
          <div className="container w-full">
            <span class="text-xs inline-block m-2 m-w-1/3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
              {loanDuration}
            </span>
            {"  "}
          </div>
          <div className="container  inline-block  w-1/3">
            <h4 className="text-white my-2">Loan duration</h4>
          </div>
        </div>
        <div className="flex content-between">
          <div className="container w-full">
            <span class="text-xs inline-block m-2 m-w-1/3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
              {LTV}
            </span>
            {"  "}
          </div>
          <div className="container  inline-block  w-1/3">
            <h4 className="text-white my-2">LTV</h4>
          </div>
        </div>
      </div>
      <div className="p-6 md:w-auto lg:w-50 flex flex-row content-center justify-center">
        {/* <h5 className="text-gray-900 text-xl font-medium mb-2"></h5> */}
        <button
          type="button"
          className=" m-4 inline-block w-full px-6 py-2.5 bg-yellow-100 text-blue font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Supply
        </button>
        <button
          type="button"
          className=" m-4 inline-block w-full px-6 py-2.5 bg-yellow-100 text-blue font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Borrow
        </button>
      </div>
    </div>
  );
};

export default PoolCard;
