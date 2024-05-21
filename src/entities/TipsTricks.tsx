import { FcIdea } from "react-icons/fc";
import icons from "../assets/tipIcons";

const tipsAndTricks = [
    {
        icon: <FcIdea className="size-12" />,
        header: "A Central Idea",
        detail: "Begin your mind map with a central concept or topic in the center of the page. This could be a word, phrase, or image that represents the main theme of your map.",
    },
    {
        icon: <img src={icons.branch} className="size-12" />,
        header: "Use branches",
        detail: "Create branches radiating out from the central idea to represent main categories or subtopics. This helps keep your mind map clear and easy to understand at a glance.",
    },
    {
        icon: <img src={icons.summary} className="size-12" />,
        header: "Keep it concise",
        detail: "Use keywords, short phrases, or images instead of long sentences to convey information. This helps keep your mind map clear and easy to understand at a glance.",
    },
    {
        icon: <img src={icons.hierarchy} className="size-12" />,
        header: "Organize hierarchically",
        detail: "Arrange branches in a hierarchical structure to show relationships between ideas. Use different levels of indentation or branch thickness to indicate the level of importance or hierarchy",
    },
    // {
    //     icon: <FcIdea className="size-12" />,
    //     header: "Use colors and symbols",
    //     detail: "Use colors, icons, and symbols to visually differentiate between branches and highlight key points. This can help improve visual clarity and make your mind map more engaging.",
    // },
    // {
    //     icon: <FcIdea className="size-12" />,
    //     header: "Connect ideas",
    //     detail: "Use lines, arrows, or connectors to show connections and relationships between different parts of your mind map. This helps clarify how ideas are related and how they flow together.",
    // },
    // {
    //     icon: <FcIdea className="size-12" />,
    //     header: "Review and revise: ",
    //     detail: "Regularly review and revise your mind map to refine and improve it over time. Add new ideas, remove unnecessary clutter, and adjust the layout as needed to keep it organized and up to date.",
    // },
    // {
    //     icon: <FcIdea className="size-12" />,
    //     header: "Embrace creativity",
    //     detail: "Don't be afraid to think outside the box and express ideas in unconventional ways. Mind mapping is a creative process, so feel free to experiment with different layouts and colors.",
    // },
];

export default tipsAndTricks;
