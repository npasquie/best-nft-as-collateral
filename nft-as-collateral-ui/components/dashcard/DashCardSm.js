import Image from "next/image";

const myLoader = ({ src,width,quality }) => {
  return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`};
const DashCardSm = ({id,name,src,totalDeposit,totalBorrowed,countdown,interest}) => {

    return (
    <div className="flex  md:hidden flex-col  lg:w-1/3  rounded-lg shadow-lg m-7 p-10 bg-blue-600 ">
    <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      {/* <Image className="rounded-t-lg object-fill"  src={src} layout="responsive" width={800} height={650}  alt={name} loader={myLoader}/> */}
    </a>
    <div className="p-6">
       <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5> 
       <p>Total borrowed: <span>{totalBorrowed}</span></p>
       <p>Countdown: <span>{countdown}</span></p>
       <p>Interest: <span>{interest}</span></p>
             <button type="button" className=" inline-block w-full mt-5 px-6 py-2.5 bg-yellow-100 text-blue font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Repay</button>
    </div>
  </div>
    )
}

export default DashCardSm;