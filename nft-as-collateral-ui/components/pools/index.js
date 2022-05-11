import PoolCard from "./PoolCard";
import loan from "../../public/vectordesign (5).svg";
import borrow from "../../public/vectordesign (6).svg";

export const cardData = [
  {
    id: "borrow",
    name: "borrow",
    src: borrow,
  },
  {
    id: "lown",
    name: "loan",
    src: loan,
  },
];

const Pool = ({ myLoader }) => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-white text-6xl m-4">Welcome</h1>
      </div>
      <div className=" flex lg:flex-row flex-col  justify-around">
        {cardData.map((item) => {
            return (

                <PoolCard
                  myLoader={myLoader}
                  key={item.id}
                  name={item.name}
                  src={item.src}
                />
            )
})}
      </div>
    </div>
  );
};

export default Pool;
