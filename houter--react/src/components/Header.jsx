import logo from "../assets/Logo.svg"

function Header() {
    return (
        <div className="flex justify-between items-center mt-10 mx-32">
            <img src={logo} alt="logo" width={115} height={36} />
            <div className="flex gap-6 items-center justify-center">
                <a
                    href="/"
                    className="py-2 px-4 rounded-[32px] border-white/30 font-semibold text-sm leading-[18px] text-white border bg-white/10"
                >
                    About Us
                </a>
                <a
                    href="/"
                    className="py-2 px-4 rounded-[32px] border-white/30 font-semibold text-sm leading-[18px] text-white border bg-white/10"
                >
                    Article
                </a>
                <a
                    href="/"
                    className="py-2 px-4 rounded-[32px] border-white/30 font-semibold text-sm leading-[18px] text-white border bg-white/10"
                >
                    Property
                </a>
                <a
                    href="/"
                    className="py-3 px-6 rounded-[32px] border-white  font-semibold text-sm leading-[18px] text-[#047857] bg-[#D1FAE5] ml-14"
                >
                    Sign Up!
                </a>
            </div>
        </div>
    )
}

export default Header