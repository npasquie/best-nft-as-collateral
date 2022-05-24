import DashcardLg from "./borrow/DashcardLg";
import DashCardSm from "./borrow/DashCardSm";
import { useState } from "react";

const DashCard = ({ borrowed }) => {
  const [modalOn, setmodalOn] = useState(false);
  const [modalOn2, setmodalOn2] = useState(false);

  return (
    <>
      {borrowed.map((item) => {
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
          <DashcardLg
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
          />
        );
      })}
      {borrowed.map((item) => {
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
          <DashCardSm
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
          />
        );
      })}
    </>
  );
};

export default DashCard;
