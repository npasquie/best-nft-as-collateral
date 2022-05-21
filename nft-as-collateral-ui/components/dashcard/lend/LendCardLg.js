import Image from "next/image";


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
};

const LendCardLg = ({
    id,
    name,
    src,
    totalDeposit,
    totalBorrowed,
    countdown,
    interest,
}) => {
    return (
        <div className="container hidden xl:block w-auto xl:max-w-1/2 m-5 p-5 mx-auto rounded-xl bg-blue-700">
            <div className="flex flex-start p-5">
                <h3 className="text-3xl text-white text-center">Lent</h3>
            </div>
            <div className="container flex bg-blue-600 rounded-xl  items-center justify-between p-5">
                <div className="inline-flex items-center  flex-wrap">
                    <div className="p-5 text-white rounded-2xl overflow-hidden">
                        <Image
                            className="rounded-lg object-cover"
                            src={src}
                            layout="fixed"
                            width={150}
                            height={150}
                            alt={name}
                            loader={myLoader}
                        />
                    </div>
                    <div className="p-5 text-white">
                        <p>
                            <span>{name}{' '}:{' '}#</span>{id}
                        </p>
                    </div>
                    <div className="p-5 text-white">
                        <p>
                            Total borrowed: <span>{totalBorrowed}$</span>
                        </p>
                    </div>
                    <div className="p-5 text-white">
                        <p>
                            Total borrowed: <span>{totalBorrowed}$</span>
                        </p>
                    </div>
                    <div className="p-5 text-white">
                        <p>
                            Countdown: <span>{countdown}</span>
                        </p>
                    </div>
                    <div className="p-5 text-white">
                        <p>
                            Interest: <span>{interest}$</span>
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    className="inline-block px-6 py-2.5 mx-5 text-xl font-semibold text-blue-900 rounded leading-tight bg-yellow-100"
                >
                    Repay
                </button>
            </div>
        </div>
    );
};

export default LendCardLg;
