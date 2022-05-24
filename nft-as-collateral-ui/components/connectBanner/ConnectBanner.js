const ConnectBanner = () => {
  return (
    <div className="container flex-col mt-10 max-w-lg  rounded-md bg-blue-800">
      <div className="p-5">
        <p className="text-3xl text-center p-5 font-normal text-white">
          Connect your wallet to access platform
        </p>
        <div className="text-center p-1 flex justify-center">
          {/* <ConnectButton /> */}
        </div>
      </div>
    </div>
  );
};

export default ConnectBanner;
