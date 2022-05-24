import PoolCard from "./PoolCard";
import loan from "../../public/vectordesign1.svg";
import borrow from "../../public/vectordesign2.svg";
import NftImage from "../../public/images/image2.svg";

const Pool = ({ myLoader, marketData }) => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-white text-6xl m-4">Welcome</h1>
      </div>
      <div className=" flex-columns m-auto lg:flex w-full   lg:justify-between">
        {marketData.map((item) => {
          const { id, name, image, alt, liquity, wpy, loanDuration, LTV } =
            item;
          return (
            <PoolCard
              myLoader={myLoader}
              key={id}
              name={name}
              image={image}
              alt={alt}
              liquity={liquity}
              wpy={wpy}
              loanDuration={loanDuration}
              LTV={LTV}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pool;
