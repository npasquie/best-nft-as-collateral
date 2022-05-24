import DashCard from "../components/dashcard";
import LendDashCard from "../components/dashcard/lend";
import imgSrc from "../public/images/image2.svg";
import { contractAddress, polypusAbi } from "../constants";
import { useContext, useState } from "react";
import { SupplyContext } from "./_app";

export const dashCardData = {
  borrowed: [
    {
      id: "1231",
      name: "Bored Ape",
      src: imgSrc,
      totalBorrowed: "23000$",
      countdown: "",
      interest: "2000$",
    },
  ],
  lent: [
    {
      id: "1231",
      name: "Bored Ape",
      src: imgSrc,
      totalDeposit: "23000$",
      countdown: "",
      interest: "25000$",
      withdraw: "5000$",
    },
  ],
};

const Dashboard = () => {
  const { borrowed, lent } = dashCardData;

  const [valueToLoan, setValueToLoan] = useState(0);
  const hasSupplied = useContext(SupplyContext);

  console.log(hasSupplied);

  return (
    <div className="section">
      <div className="container p-5">
        <DashCard
          borrowed={borrowed}
          polypusAbi={polypusAbi}
          contractAddress={contractAddress}
        />
      </div>
      <div className="container p-5">
        {hasSupplied.hasSupplied && (
          <LendDashCard
            lent={lent}
            polypusAbi={polypusAbi}
            contractAddress={contractAddress}
            valueToLoan={valueToLoan}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
