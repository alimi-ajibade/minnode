import { SectionWrapper } from "../components/hoc";
import Flow from "../components/HomeFlow/Flow";
import { useNavigate } from "react-router-dom";
import imageFiles from "../assets/homepage";
import HomepageSection from "../components/HomepageSection";
import homeSections from "../entities/HomepageSection";
import tipsAndTricks from "../entities/TipsTricks";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="flex flex-col lg:flex-row items-center h-[700px] mt-10">
                <div className="lg:flex-1 grow-0 text-gray-800">
                    <h1 className="text-4xl lg:text-7xl font-bold">
                        Transform your ideas into structured brilliance.
                    </h1>

                    <p className="lg:text-xl text-l text-gray-800 mt-3 pr-8">
                        Quickest, Easiest way for teams to capture, organize,
                        and map out their ideas in a structured way.
                    </p>

                    <button
                        className="p-3 mt-6 border-2 rounded-md outline outline-neutral-500 font-bold bg-purple-300 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out"
                        onClick={() => navigate("/sign-up")}>
                        Get Started - it's free
                    </button>
                </div>
                <div className="flex-1 rounded-2xl w-full h-full bg-purple-100 mt-10">
                    <Flow />
                </div>
            </section>

            <section className="flex lg:flex-row flex-col gap-3 items-center justify-center lg:max-h-[500px] mt-20">
                <div className="flex-1 self-center lg:order-last lg:ml-5">
                    <h2 className="lg:text-4xl text-xl font-semibold text-gray-700">
                        Effortless AI-Powered Mind Map Creation
                    </h2>

                    <p className="lg:text-xl text-basis text-gray-500 mt-3 pr-8">
                        Utilize our AI tool to effortlessly generate mind maps.
                        With a focus on simplicity and user-friendliness, you
                        can easily customize your mind map to achieve a
                        professional look.
                    </p>
                </div>
                <div className="rounded-xl w-full flex-1 overflow-hidden">
                    <video loop muted autoPlay>
                        <source src={imageFiles.ai_search} type="video/mp4" />
                    </video>
                </div>
            </section>

            {homeSections.map((h, index) => {
                return (
                    <HomepageSection
                        sectionHeader={h.sectionHeader}
                        sectionDetail={h.sectionDetail}
                        sectionImage={h.sectionImage}
                        flexOrder={index % 2 !== 0 ? "reversed" : "normal"}
                        key={index}
                    />
                );
            })}

            <div className="w-full mt-20 mb-10">
                <h2 className="text-4xl text-center font-bold text-gray-800">
                    Tips and Tricks
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-stretch gap-4 mt-5">
                    {tipsAndTricks.map((t, index) => {
                        return (
                            <div
                                className="min-w-72 min-h-72 rounded-xl p-5 bg-gray-100"
                                key={index}>
                                {t.icon}
                                <h3 className="mt-5 font-bold text-lg">
                                    {t.header}
                                </h3>
                                <p className="mt-2 text-gray-600">{t.detail}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(HomePage);
