const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="../src/assets/sygnet.svg" alt="" />
                <span>NFT Market</span>
            </div>
            <ul>
                <li>Auctions</li>
                <li>Roadmap</li>
                <li>Discover</li>
                <li>Community</li>
            </ul>
            <div>
                <button className="contact_btn">Contact</button>
                <button className="profile_btn">My account</button>
            </div>
        </nav>
    )
}

export default Navbar;