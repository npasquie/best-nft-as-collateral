import LendCardLg from "./LendCardLg";
import LendCardSm from "./LendCardSm";
const LendDashCard = ({ lent, polypusAbi, contractAddress, valueToLoan }) => {
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
          />
        );
      })}
    </>
  );
};

export default LendDashCard;
