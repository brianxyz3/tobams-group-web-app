import "../stylesheets/carousel.css";
import Card from "./Card";

const cardDetails = [
    {
        imgSrc: "../src/assets/listImage1.png",
        description: "Dui accumsan leo vestibulum ornare eu",
        price: "1.11 ETH",
        time: "22:59 min left",
        numOfBids: "101 people are bidding",
    },
    {
        imgSrc: "../src/assets/listImage2.png",
        description: "Senectus adipiscing nascetur accumsan etiam",
        price: "1.63 ETH",
        time: "37:01 min left",
        numOfBids: "12 people are bidding",
    },
    {
        imgSrc: "../src/assets/listImage3.png",
        description: "Mattis at diam lorem nisl nam sed sociis",
        price: "2.11 ETH",
        time: "12:15 min left",
        numOfBids: "19 people are bidding",
    },
    {
        imgSrc: "../src/assets/listImage4.png",
        description: "Vulputate felis purus viverra morbi facilisi eget",
        price: "3.19 ETH",
        time: "2:41 min left",
        numOfBids: "35 people are bidding",
    },
    {
        imgSrc: "../src/assets/listImage5.png",
        description: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "2.55 ETH",
        time: "26:11 min left",
        numOfBids: "14 people are bidding",
    },
]
const Carousel = () => {
    return (
        <><h2 className="text-4xl text-white text-center my-10">Latest live auctions</h2>
            <div className="bg-[#060714] slider" data-animated="true">
                <ul className="slider_inner text-blue-700 font-bold">
                    {
                        cardDetails.map((card, idx) => (
                            <Card key={idx} imgSrc={card.imgSrc} description={card.description} price={card.price} time={card.time} numOfBids={card.numOfBids} />
                        ))
                    }
                    {
                        cardDetails.map((card, idx) => (
                            <Card key={idx} imgSrc={card.imgSrc} description={card.description} price={card.price} time={card.time} numOfBids={card.numOfBids} />
                        ))
                    }

                </ul>
            </div>
        </>
    )
}

export default Carousel;