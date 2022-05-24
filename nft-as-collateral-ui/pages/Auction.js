import screenShot from "../public/Screenshot 2022-05-24 162248.png";

import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const Auction = () => {
  return (
    <div
      className="div"
      style={{
        backgroundImage: `url(${screenShot})`,
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        src={screenShot}
        alt=""
        layout="fill"
        objectFit="cover"
        loader={myLoader}
      />
    </div>
  );
};

export default Auction;
