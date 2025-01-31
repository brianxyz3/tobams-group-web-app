
const CallToAction = () => {
    return (
        <section className="w-4/6 mx-auto flex items-center justify-between mt-28">
            <div className="text-[#7780A1] w-1/2">
                <div className="w-4/5">
                    <p>OVERLINE</p>
                    <h2 className="text-5xl font-bold text-white mt-3">Sapien ipsum scelerisque convallis fusce</h2>
                    <p className="mt-8">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                    <div className="flex gap-3 mt-10">
                        <button className="profile_btn py-2 px-4 rounded-xl">Get started</button>
                        <button className="border py-2 px-4 rounded-xl border-[#7780A1]">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src="../src/assets/ctaImage.png" alt="" />
            </div>
        </section>
    )
}

export default CallToAction