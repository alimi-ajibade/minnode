import { JSXElementConstructor } from "react";

const SectionWrapper = (Component: JSXElementConstructor<any>) =>
    function HOC() {
        return (
            <section className={`max-w-screen-xl mx-auto relative`}>
                <Component />
            </section>
        );
    };
export default SectionWrapper;
