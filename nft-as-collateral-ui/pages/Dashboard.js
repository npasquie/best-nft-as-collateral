import DashCard from "../components/dashcard";
import LendDashCard from "../components/dashcard/lend";
import imgSrc from "../public/images/image2.svg";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { contractAddress, polypusAbi } from "../constants";
import { useState } from "react";

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

  const { account } = useMoralis();

  const [valueToLoan, setValueToLoan] = useState(0);

  const { runContractFunction } = useWeb3Contract({
    abi: polypusAbi,
    contractAddress: contractAddress,
    functionName: "supply",
    params: {
      account: account,
      valueToLoan: valueToLoan,
    },
  });
  console.log(runContractFunction);

  return (
    <div className="section">
      <div className="container p-5">
        <DashCard
          borrowed={borrowed}
          polypusAbi={polypusAbi}
          contractAddress={contractAddress}
          runContractFunction={runContractFunction}
        />
      </div>
      <div className="container p-5">
        <LendDashCard
          lent={lent}
          polypusAbi={polypusAbi}
          contractAddress={contractAddress}
          runContractFunction={runContractFunction}
          valueToLoan={valueToLoan}
        />
      </div>
    </div>
  );
};

export default Dashboard;
