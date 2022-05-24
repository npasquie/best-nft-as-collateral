import LendCardLg from "./LendCardLg";
import LendCardSm from "./LendCardSm";
import { useState } from "react";

const LendDashCard = ({ lent, polypusAbi, contractAddress, valueToLoan }) => {
  const [modalOn, setmodalOn] = useState(false);
  const [modalOn2, setmodalOn2] = useState(false);

  return (
    <>
      {lent.map((item) => {
        const {
          id,
          name,
          src,
          totalDeposit,
          totalBorrowed,
          countdown,
          interest,
        } = item;
        console.log(src);
        return (
          <LendCardLg
            key={id}
            id={id}
            name={name}
            src={src}
            totalDeposit={totalDeposit}
            totalBorrowed={totalBorrowed}
            countdown={countdown}
            interest={interest}
            modalOn={modalOn}
            setmodalOn={setmodalOn}
            modalOn2={modalOn2}
            setmodalOn2={setmodalOn2}
            polypusAbi={polypusAbi}
            valueToLoan={valueToLoan}
            contractAddress={contractAddress}
          />
        );
      })}
      {lent.map((item) => {
        const {
          id,
          name,
          src,
          totalDeposit,
          totalBorrowed,
          countdown,
          interest,
        } = item;
        return (
          <LendCardSm
            key={id}
            id={id}
            name={name}
            src={src}
            totalDeposit={totalDeposit}
            totalBorrowed={totalBorrowed}
            countdown={countdown}
            interest={interest}
            modalOn={modalOn}
            setmodalOn={setmodalOn}
            modalOn2={modalOn2}
            setmodalOn2={setmodalOn2}
            polypusAbi={polypusAbi}
            valueToLoan={valueToLoan}
            contractAddress={contractAddress}
          />
        );
      })}
    </>
  );
};

export default LendDashCard;
