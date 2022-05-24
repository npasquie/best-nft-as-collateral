import DashcardLg from "./DashcardLg"
import DashCardSm from "./DashCardSm"




const DashCard = ({ borrowed }) => {


    return (
        <>
            {
                borrowed.map((item) => {
                    const { id, name, src, totalDeposit, totalBorrowed, countdown, interest } = item;
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
                        />
                    )
                })

            }
            {borrowed.map((item) => {
                const { id, name, src, totalDeposit, totalBorrowed, countdown, interest } = item;
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
                    />
                )
            })}
        </>
    )
}

export default DashCard