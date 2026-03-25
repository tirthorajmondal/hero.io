import { Link } from "react-router-dom";
import appStore from "../../assets/appStore.png"
import heroImg from "../../assets/hero.png"
import playStore from "../../assets/playStore.png"
import States from "../States/States";

const Hero = () => {
    return (
        <section className="bg-white pt-20">
            <div className=" mx-auto px-6">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                        We Build <span className="bg-linear-to-br from-purple-500 to-indigo-500  text-transparent" style={{ backgroundClip: 'text' }}>Productive</span> Apps
                    </h1>
                    <p className="text-lg text-black/70 w-full md:w-2/3 mx-auto mb-8">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    {/* links */}
                    <div className="flex gap-4 justify-center mb-16">
                        <Link
                            to="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 hover:bg-black/28 transition-all duration-300 shadow-md flex items-center gap-3 "
                        >
                            <img className="w-8 h-8 transition-transform " src={playStore} alt="playStore" />
                            <span>Google Play</span>
                        </Link>
                        <Link
                            to="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-black/25 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md flex items-center gap-3 "
                        >
                            <img className="w-8 h-8 transition-transform " src={appStore} alt="" />
                            <span>App Store</span>
                        </Link>
                    </div>
                    <div className="lg:w-[70vw] mx-auto">
                        <img src={heroImg} alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>
            <States />
        </section>
    );
};

export default Hero;