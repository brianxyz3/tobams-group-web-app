
const Features = () => {
    return (
        <section className="mt-10 w-11/12 mx-auto">
            <div className="w-1/3 p-6 border border-[#262840] rounded-2xl">
                <h3 className="text-xl text-white my-10">Check out the hottest Sale offers</h3>
                <div className={`w-[16rem] mx-auto flex flex-col justify-between`}>
                    <div className="w-full">
                        <img src="../src/assets/featuresImage1.png" alt="" className="w-full h-[20rem] rounded-3xl" />
                    </div>
                    <div className="flex justify-between my-5">
                        <p className="w-2/3 font-bold text-white">Fames habitasse risus ultricies tortor sit</p>
                        <div>
                            <p className="text-[#514CFF] bg-[#514CFF26] p-1">2.35 ETH</p>
                        </div>
                    </div>
                    <p className="pb-3 text-white">22:59</p>
                    <p className="border-t border-[#262840] text-[#7780A1] pt-2">101 people are bidding</p>
                </div>
            </div>
        </section>
    )
}

export default Features;