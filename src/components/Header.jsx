import "../stylesheets/header.css"
import LogoBanner from "./LogoBanner";
import Navbar from "./Navbar";
const Header = () => {
    return (
        <header>
            <Navbar />
            <section className="relative flex flex-col">
                <div className="hero_div text-sm">
                    <p>NON FUNGIBLE TOKENS</p>
                    <div className="hero_text font-semibold">
                        <h1 className="mb-4">A new NFT <img src="../src/assets/vector1.svg" width="16px" height="50px" alt="" /> </h1>
                        <h1><img src="../src/assets/vector2.svg" width="30px" height="60px" alt="" /> Experience</h1>
                    </div>
                    <p>Discover, collect and sell</p>
                    <LogoBanner />
                </div>
                <div className="flex">
                    <img src="../src/assets/square 01.svg" className="lg:absolute right-20 top-36 size-20" alt="" />
                    <img src="../src/assets/square 02.svg" className="lg:absolute left-10 size-20" alt="" />
                    <img src="../src/assets/square 03.svg" className="lg:absolute right-10 top-72 size-20" alt="" />
                    <img src="../src/assets/square 04.svg" className="lg:absolute left-72 bottom-24 size-20" alt="" />
                    <img src="../src/assets/square 05.svg" className="lg:absolute right-64 bottom-10 size-20" alt="" />
                    <img src="../src/assets/square 06.svg" className="lg:absolute -left-4 bottom-0 size-20" alt="" />
                </div>
            </section>
        </header>
    )
}

export default Header;