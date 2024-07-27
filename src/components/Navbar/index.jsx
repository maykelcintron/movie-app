import Logo from "/regnum-iso.svg"
import SearchIcon from "/search.svg"
import CircleIcon from "/circle.svg"
import DownloadIcon from "/download.svg"
import LikeIcon from "/like.svg"
import UserIcon from "/user.png"

function Navbar(){
    return (
        <nav className="flex justify-between items-center p-8">
            <div>
                <a href="">
                    <img className="pr-[48px]" src={Logo} alt="" />
                </a>
            </div>
            <ul className="flex gap-4 ml-10">
                <li>
                    <a className="font-Montserrat font-semibold text-gray-400 hover:text-blue-700" href="">General</a>
                </li>
                <li>
                    <a className="font-Montserrat font-semibold text-gray-400 hover:text-blue-700" href="">Peliculas</a>
                </li>
                <li>
                    <a className="font-Montserrat font-semibold text-gray-400 hover:text-blue-700" href="">Series</a>
                </li>
                <li>
                    <a className="font-Montserrat font-semibold text-gray-400 hover:text-blue-700" href="">Anime</a>
                </li>
            </ul>
            <ul className="flex gap-3 items-center w-60 mr-20">    
                <form className="relative">
                    <input className="border-2 border-gray-400 bg-transparent rounded-full px-2 py-1 w-48 text-sm outline-none" type="search" placeholder="¿Qué deseas ver?"/>
                    <img src={SearchIcon} className='absolute top-0 right-0 m-2 mr-3 cursor-pointer'></img>
                </form>
                <div className="flex items-center gap-2">
                    <img className="w-[28px] h-[28px] cursor-pointer" src={CircleIcon} alt="" />
                    <img className="w-[28px] h-[28px] cursor-pointer" src={DownloadIcon} alt="" />
                    <img className="w-[28px] h-[28px] cursor-pointer" src={LikeIcon} alt="" />
                    <img className="w-8 h-8 cursor-pointer object-cover" src={UserIcon} alt="" />
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;