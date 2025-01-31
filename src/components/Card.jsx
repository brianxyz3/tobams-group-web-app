
const Card = ({ width, imgSrc, description, price, time, numOfBids }) => {
    return (
        <div className={`w-[20rem] p-6 mx-auto flex flex-col justify-between border border-[#262840] rounded-3xl`}>
            <div className="w-full">
                <img src={imgSrc} alt="" className="w-full h-[20rem] rounded-3xl" />
            </div>
            <div className="flex justify-between my-5">
                <p className="w-2/3 font-bold text-white">{description}</p>
                <div>
                    <p className="text-[#514CFF] bg-[#514CFF26] p-1">{price}</p>
                </div>
            </div>
            <p className="pb-3 text-white">{time}</p>
            <p className="border-t border-[#262840] text-[#7780A1] pt-2">{numOfBids}</p>
        </div>
    )
}

export default Card;