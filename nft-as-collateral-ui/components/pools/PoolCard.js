import Image from "next/image";


const PoolCard = ({myLoader,name, src,alt,}) => {
    return (
        
  
  <div className="flex flex-col  lg:w-1/3  rounded-lg shadow-lg m-7 p-10 bg-white ">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image className="rounded-t-lg "  src={src}  layout="responsive" width={800} height={650}  alt={alt}loader={myLoader}/>
    </a>
    <div className="p-6">
      {/* <h5 className="text-gray-900 text-xl font-medium mb-2"></h5> */}
      <button type="button" className=" inline-block w-full px-6 py-2.5 bg-yellow-100 text-blue font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{name}</button>
    </div>
  </div>
  


    )
    
}

export default PoolCard;