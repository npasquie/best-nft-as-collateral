import PoolCard from "./PoolCard";
import loan from "../../public/vectordesign1.svg";
import borrow from "../../public/vectordesign2.svg";
import NftImage from "../../public/images/image2.svg";

const Pool = ({ setModalUp, myLoader, marketData, setBorrModalUp }) => {
  return (
    <div className="container m-auto">
      <div className=" flex-columns m-auto lg:flex w-full  lg:justify-between">
        {marketData.map((item) => {
          const { id, name, image, alt, liquity, wpy, loanDuration, LTV } =
            item;
          return (
            <PoolCard
              setModalUp={setModalUp}
              myLoader={myLoader}
              key={id}
              name={name}
              image={image}
              alt={alt}
              liquity={liquity}
              wpy={wpy}
              loanDuration={loanDuration}
              LTV={LTV}
              setBorrModalUp={setBorrModalUp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pool;
