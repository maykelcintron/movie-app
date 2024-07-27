import movie from "/movie.png" 
import arrowLeft from "/arrow-left.svg" 
import arrowRight from "/arrow-right.svg" 

function Slider(){
    return (
        <div className="mt-24 relative md:mt-20">
            <h3 className="pl-20 text-white font-Fjalla text-lg pb-3">Estrenos</h3>
                <img className="w-5 absolute top-[50%] left-5 cursor-pointer" src={arrowLeft} alt="" />
            <div className="grid grid-cols-8 pl-20 pr-20 gap-5">
                    <div>
                        <img className="rounded-lg cursor-pointer w-28" src={movie} alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg cursor-pointer w-28" src={movie} alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg cursor-pointer w-28" src={movie} alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg cursor-pointer w-28" src={movie} alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg cursor-pointer w-28" src={movie} alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg cursor-pointer w-28" src={movie} alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg cursor-pointer w-28" src={movie} alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg cursor-pointer w-28" src={movie} alt="" />
                    </div>
            </div>
                <img className="w-5 absolute top-[50%] right-5 cursor-pointer" src={arrowRight} alt="" />
        </div>
    );
}

export default Slider