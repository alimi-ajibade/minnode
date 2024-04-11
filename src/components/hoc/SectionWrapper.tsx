import { JSXElementConstructor } from "react";

const SectionWrapper = (Component: JSXElementConstructor<any>) =>
    function HOC() {
        return (
            <section className={`max-w-7xl mx-auto relative z-0 px-5`}>
                <Component />
            </section>
        );
    };
export default SectionWrapper;
