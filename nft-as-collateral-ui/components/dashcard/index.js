import DashcardLg from "./DashcardLg"
import DashCardSm from "./DashCardSm"


export const dashCardData = {
   "borrowed" : [

       {
           "id": "1231",
           "name": "Bored Ape",
           "src": "/image2.svg",
           "totalBorrowed": "23 000$",
           "countdown": "",
           "interest":"2000",
        }
    ],
   "lent" : [

       {
           "id": "1231",
           "name": "Bored Ape",
           "src": <nftImage />,
           "totalDeposit": "23 000$",
           "countdown": "",
           "interest":"25000$",
           "withdraw":"5000$",
        }
    ],
}
const DashCard = () => {
    
    console.log(dashCardData)
    const {borrowed, lent} = dashCardData;
    return (
        <>
        {
        borrowed.map((item) => {
            const {id,name,src,totalDeposit,totalBorrowed,countdown,interest} = item;
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
        <DashCardSm />
        </>
    )
}

export default DashCard