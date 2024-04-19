import HandleElementCustom from "../entities/HandleElementCustom";

const removeHandles = () => {
    const handles = Array.from(
        document.querySelectorAll(".react-flow__handle")
    ) as HandleElementCustom[];

    handles.forEach((handle) => {
        handle.style!.opacity = 0;
    });
};

export default removeHandles;
