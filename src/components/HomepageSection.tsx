interface Props {
    sectionHeader: string;
    sectionDetail: string;
    sectionImage: string;
    flexOrder: "reversed" | "normal";
}

const HomepageSection = ({
    sectionHeader,
    sectionDetail,
    sectionImage,
    flexOrder,
}: Props) => {
    const flex_order = {
        reversed: "lg:order-last lg:ml-5",
        normal: "",
    };

    return (
        <section
            className={`flex lg:flex-row flex-col gap-3 items-center justify-center lg:max-h-[500px] mt-10 lg:mt-10`}>
            <div className={`self-center lg:flex-1 ${flex_order[flexOrder]}`}>
                <h2 className="lg:text-4xl text-xl font-semibold text-gray-700">
                    {sectionHeader}
                </h2>

                <p className="lg:text-xl text-basis text-gray-500 mt-3 pr-8">
                    {sectionDetail}
                </p>
            </div>
            <div className={`lg:flex-1 rounded-xl w-full overflow-hidden`}>
                <img src={sectionImage} className="object-cover" />
            </div>
        </section>
    );
};

export default HomepageSection;
