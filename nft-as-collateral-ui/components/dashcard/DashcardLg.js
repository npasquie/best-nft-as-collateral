import Image from "next/image";
import imgSrc from "../../public/images/image2.svg";

const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};

const DashcardLg = ({
  id,
  name,
  src,
  totalDeposit,
  totalBorrowed,
  countdown,
  interest,
}) => {
  return (
    <div className="container hidden md:block w-auto lg:max-w-1/2 m-5 p-5 mx-auto rounded-xl bg-blue-700">
      <div className="flex flex-start p-5">
        <h3 className="text-3xl text-white text-center">Borrowed</h3>
      </div>
      <Image
        className="rounded-t-lg "
        src={imgSrc}
        layout="responsive"
        width={"1em"}
        height={"1em"}
        alt={name}
        loader={myLoader}
      />
      <div className="container flex bg-blue-600 rounded-xl  items-center justify-between p-5">
        <div className="inline-flex  flex-wrap">
          <div className="p-5 text-white"></div>
          <div className="p-5 text-white">
            <h1>{name}</h1>
          </div>
          <div className="p-5 text-white">
            <p>
              Total borrowed: <span>{totalBorrowed}</span>
            </p>
          </div>
          <div className="p-5 text-white">
            <p>
              Countdown: <span>{countdown}</span>
            </p>
          </div>
          <div className="p-5 text-white">
            <p>
              Interest: <span>{interest}</span>
            </p>
          </div>
        </div>
        <button
          type="button"
          className="inline-block px-6 py-2.5 text-xl font-semibold text-blue-900 rounded leading-tight bg-yellow-100"
        >
          Repay
        </button>
      </div>
    </div>
  );
};

export default DashcardLg;
