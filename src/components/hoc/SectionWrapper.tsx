import { JSXElementConstructor } from "react";

const SectionWrapper = (Component: JSXElementConstructor<any>) =>
    function HOC() {
        return (
            <section className={`max-w-screen-2xl mx-auto relative`}>
                <Component />
            </section>
        );
    };
export default SectionWrapper;
