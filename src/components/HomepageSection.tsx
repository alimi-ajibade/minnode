interface Props {
    sectionHeader: string;
    sectionDetail: string;
    sectionImage: string;
    flexOrder: number;
}

const HomepageSection = ({
    sectionHeader,
    sectionDetail,
    sectionImage,
    flexOrder,
}: Props) => {
    const order = flexOrder % 2 === 0 ? "order-last" : undefined;
    const marginLeft = order ? "ml-5" : "undefined";

    return (
        <section
            className={`flex lg:flex-row flex-col gap-3 items-center justify-center min-h-[500px]`}>
            <div className={`flex-1 self-center lg:${order} lg:${marginLeft}`}>
                <p className="lg:text-5xl text-4xl">{sectionHeader}</p>

                <p className="text-l lg:text-xl mt-5">{sectionDetail}</p>
            </div>
            <div className={`flex-1 rounded-3xl w-full overflow-hidden`}>
                <img src={sectionImage} className="" />
            </div>
        </section>
    );
};

export default HomepageSection;
