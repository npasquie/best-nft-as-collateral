import DashCard from "../components/dashcard";
import LendDashCard from "../components/dashcard/lend";
import imgSrc from "../public/images/image2.svg";

export const dashCardData = {
    "borrowed": [

        {
            "id": "1231",
            "name": "Bored Ape",
            "src": imgSrc,
            "totalBorrowed": "23000$",
            "countdown": "",
            "interest": "2000$",
        }
    ],
    "lent": [

        {
            "id": "1231",
            "name": "Bored Ape",
            "src": imgSrc,
            "totalDeposit": "23000$",
            "countdown": "",
            "interest": "25000$",
            "withdraw": "5000$",
        }
    ],
}


const Dashbord = () => {
    const { borrowed, lent } = dashCardData;
    return (
        <div className="section">
            <div className="container p-5">
                <DashCard borrowed={borrowed} />
            </div>
            <div className="container p-5">
                <LendDashCard lent={lent} />
            </div>
        </div>



    )
}

export default Dashbord;