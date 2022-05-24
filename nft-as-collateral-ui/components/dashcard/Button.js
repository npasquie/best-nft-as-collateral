const Button = ({ modalOn, setmodalOn, modalOn2, setmodalOn2 }) => {
  return (
    <button
      onClick={() => {
        setmodalOn(!modalOn);
        // setmodalOn2(!modalOn2)
        // setTimeout(() => {
        //     setmodalOn(false);
        // }, 3000);
      }}
      type="button"
      className="inline-block px-6 py-2.5 mx-5 text-xl font-semibold text-blue-900 rounded leading-tight bg-yellow-100"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Deposit
    </button>
  );
};

export default Button;
