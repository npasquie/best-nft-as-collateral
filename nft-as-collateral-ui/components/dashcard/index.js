import DashcardLg from "./borrow/DashcardLg";
import DashCardSm from "./borrow/DashCardSm";
import { useState } from "react";

const DashCard = ({ borrowed }) => {
  const [modalOn, setmodalOn] = useState(false);
  const [modalOn2, setmodalOn2] = useState(false);

  return (
    <>
      <DashcardLg
        src={borrowed[0].src}
        modalOn={modalOn}
        setmodalOn={setmodalOn}
        modalOn2={modalOn2}
        setmodalOn2={setmodalOn2}
      />
    </>
  );
};

export default DashCard;
