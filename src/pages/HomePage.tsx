import { SectionWrapper } from "../components/hoc";
import Flow from "../components/HomeFlow/Flow";
import SectionContainer from "../components/SectionContainer";

const HomePage = () => {
    return (
        <>
            <section className="flex flex-col lg:flex-row items-center min-h-[550px] h-screen lg:h-[50vh] pt-16 lg:pt-1">
                <div className="lg:flex-1 grow-0">
                    <p className="text-4xl lg:text-7xl  font-bold">
                        Transform your ideas into structured brilliance.
                    </p>

                    <p className="lg:text-xl text-l mt-5 pr-8">
                        Quickest, Easiest way for teams to capture, organize,
                        and map out their ideas in a structured way.
                    </p>

                    <button className="p-3 mt-6 border-2 rounded-md outline outline-neutral-800 font-bold bg-purple-300 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out">
                        Get Started - it's free
                    </button>
                </div>
                <div className="border rounded-md w-full h-full mt-14 flex-1 bg-purple-100 overflow-hidden">
                    <Flow />
                </div>
            </section>

            <SectionContainer marginTop="lg:mt-10 mt-16 ">
                <div className="lg:ml-10 flex-1 self-center order-1 lg:order-2">
                    <p className="lg:text-5xl text-4xl">
                        Simple and Easy To Use
                    </p>

                    <p className="text-l lg:text-xl mt-5 pr-8">
                        By prioritizing simplicity and user-friendliness, easily
                        customize your mind map for a professional look
                    </p>
                </div>
                <div className="border rounded-md w-full flex-1 overflow-hidden order-2 lg:order-1">
                    <video loop muted autoPlay>
                        <source
                            src="videos/customize_node.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </SectionContainer>

            <SectionContainer>
                <div className="ml-5 flex-1 self-center">
                    <p className="lg:text-5xl text-4xl">
                        Create logical flow and clarity
                    </p>

                    <p className="text-l lg:text-xl mt-5 pr-8 ">
                        Streamline your creativity and enhance productivity with
                        our user-friendly node arranging features.
                    </p>
                </div>
                <div className="border rounded-md w-full flex-1 order-1 overflow-hidden">
                    <img
                        src="images/arrange_node.png"
                        className="object-cover"
                    />
                </div>
            </SectionContainer>

            <SectionContainer>
                <div className="lg:ml-10 flex-1 self-center order-1 lg:order-2">
                    <p className="lg:text-5xl text-4xl">
                        Effortless access and download
                    </p>

                    <p className="lg:text-xl text-l mt-5">
                        Seamlessly integrate your creative ideas into your
                        workflow with the ability to download and access your
                        mind maps with just a few clicks
                    </p>
                </div>
                <div className="rounded-md w-full flex-1 overflow-hidden order-2 lg:order-1">
                    <img
                        src="images/download_mindmap.png"
                        className="object-cover"
                    />
                </div>
            </SectionContainer>
        </>
    );
};

export default SectionWrapper(HomePage);
