import Pool from "../components/pools";
import boredApe from "../public/images/Rectangle_14.svg";
import cryptoPunk from "../public/images/Rectangle_15.svg";
import mutantApe from "../public/images/Rectangle_16.svg";
import doodle from "../public/images/Rectangle_17.svg";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const marketData = [
  {
    id: "boredaped",
    name: "Bored Ape Yatch Club",
    image: boredApe,
    alt: "boredape",
    liquity: "11k ETH",
    wpy: "3% max",
    loanDuration: "2weeks",
    LTV: "2 ETH",
  },
  {
    id: "Crpytopunks",
    name: "Crypto Punk",
    image: cryptoPunk,
    alt: "cryptopunk",
    liquity: "50k ETH",
    wpy: "3% max",
    loanDuration: "2 weeks",
    LTV: "40 ETH",
  },
  {
    id: "Mutantape",
    name: "Mutant Ape Yatch Club",
    image: mutantApe,
    alt: "mutantape",
    liquity: "11k ETH",
    wpy: "3%",
    loanDuration: "2weeks",
    LTV: "2 ETH",
  },
  {
    id: "Doodles",
    name: "Doodles",
    image: doodle,
    alt: "doodle",
    liquity: "300k ETH",
    wpy: "3% max",
    loanDuration: "2 weeks",
    LTV: "4 ETH",
  },
];

const Markets = () => {
  return (
    <div className="section">
      <div className="container bg-blue-600">
        <div className="text-start">
          <h1 className="text-white p-3 text-6xl mx-5">
            {" "}
            Available Collection
          </h1>
        </div>
        <div className="grid grid-row-2 lg:grid-cols-3">
          <div className="container w-full">
            <Pool myLoader={myLoader} marketData={marketData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;
