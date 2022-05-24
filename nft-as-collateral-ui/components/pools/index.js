import PoolCard from "./PoolCard";
import loan from "../../public/vectordesign1.svg";
import borrow from "../../public/vectordesign2.svg";
import NftImage from "../../public/images/image2.svg"

export const cardData = [
  {
    id: "borrow",
    name: "borrow",
    src: borrow,
    alt:'borrow'
  },
  {
    id: "loan",
    name:"loan",
    src: NftImage,
    alt:"loan"
  },
];

const Pool = ({ myLoader }) => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-white text-6xl m-4">Welcome</h1>
      </div>
      <div className=" flex-columns m-auto lg:flex w-full   lg:justify-between">

        
        {cardData.map((item) => {
          const {id, name, src, alt} = item
          return (
            <PoolCard
            myLoader={myLoader}
            key={id}
            name={name}
            src={src}
            alt={alt}
            />
            )
          })}
          </div>
      </div>
    
  );
};

export default Pool;
