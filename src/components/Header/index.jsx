import Navbar from "../../components/Navbar"
import Slider from "../../components/Slider"
import PlayIcon from "/play.svg"
import InformationIcon from "/information.svg"
import FavoriteIcon from "/favorite.svg"

function Header(){
    return(
        <header className="w-full pb-10 bg-hero-pattern bg-no-repeat bg-center bg-cover">
            <Navbar/>
            <div className="w-[520px] pl-20 mt-20">
                <h1 className="text-[5rem] text-white uppercase font-Fjalla font-medium">
                    Solo Leveling
                </h1>
                <p className="text-white font-normal text-justify pr-2 font-Montserrat text-md"
                >
                    Lo que no te mata te hace más fuerte, pero en el caso de Sung Jinwoo, lo que lo mató lo hizo más fuerte. Después de ser brutalmente asesinado por monstruos en una mazmorra de alto rango, Jinwoo regresó con el Sistema.
                </p>
                    <div className="flex gap-5 mt-8 w-full">
                        <button className="button">
                            <img src={PlayIcon} alt="" />
                            Reproducir
                        </button>
                        <button className="button">
                            <img src={InformationIcon} alt="" />
                            Más Información
                        </button>
                    </div>
                        <button className="button w-[100%] justify-center mt-3">
                            <img src={FavoriteIcon} alt="" />
                            Añadir a Favoritos
                        </button>
            </div>
            <Slider />
        </header>
    )
}

export default Header
