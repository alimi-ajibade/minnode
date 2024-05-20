import { SectionWrapper } from "../components/hoc";
import Flow from "../components/HomeFlow/Flow";
import { useNavigate } from "react-router-dom";
import imageFiles from "../assets/homepage";
import HomepageSection from "../components/HomepageSection";
import homeSections from "../entities/HomepageSection";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <section className="max-w-screen-2xl mx-auto relative flex flex-col lg:flex-row items-center min-h-[700px] h-full lg:h-[50vh] mt-10">
                    <div className="lg:flex-1 grow-0">
                        <p className="text-4xl lg:text-7xl  font-bold">
                            Transform your ideas into structured brilliance.
                        </p>

                        <p className="lg:text-xl text-l mt-5 pr-8">
                            Quickest, Easiest way for teams to capture,
                            organize, and map out their ideas in a structured
                            way.
                        </p>

                        <button
                            className="p-3 mt-6 border-2 rounded-md outline outline-neutral-800 font-bold bg-purple-300 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out"
                            onClick={() => navigate("/sign-up")}>
                            Get Started - it's free
                        </button>
                    </div>
                    <div className="border rounded-md w-full h-full flex-1 mt-10 bg-purple-100 overflow-hidden">
                        <Flow />
                    </div>
                </section>

                <section className="flex lg:flex-row flex-col items-center min-h-[500px] mt-20 mb-14">
                    <div className="flex-1 self-center">
                        <p className="lg:text-5xl text-4xl">
                            Effortless AI-Powered Mind Map Creation
                        </p>

                        <p className="text-l lg:text-xl mt-5 pr-8">
                            Utilize our AI tool to effortlessly generate mind
                            maps. With a focus on simplicity and
                            user-friendliness, you can easily customize your
                            mind map to achieve a professional look.
                        </p>
                    </div>
                    <div className="border rounded-3xl w-full flex-1 overflow-hidden">
                        <video loop muted autoPlay>
                            <source
                                src={imageFiles.ai_search}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </section>

                {homeSections.map((h, index) => {
                    return (
                        <HomepageSection
                            sectionHeader={h.sectionHeader}
                            sectionDetail={h.sectionDetail}
                            sectionImage={h.sectionImage}
                            flexOrder={index}
                        />
                    );
                })}
            </div>
            <div className="w-full bg-blue-500"></div>
        </>
    );
};

export default SectionWrapper(HomePage);
