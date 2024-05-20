import template from "../assets/templates";
import { PartialMindmap } from "./Mindmap";

const mindmapTemplates: {
    [index: string]: { image: string; mindmap: PartialMindmap };
} = {
    spidergram: {
        image: template.spidergram,
        mindmap: {
            filename: "Spider Diagram",
            nodes: [
                {
                    id: "root",
                    type: "mindmap",
                    data: {
                        label: "",
                        backgroundColor: "E9EBEA",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 16,
                        y: -13.5,
                    },
                },
                {
                    id: "qIUZ_AvpywrYwat8P8yP5",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#ff7f4d",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: -284,
                        y: -80.5,
                    },
                },
                {
                    id: "Sgq-cMiTv18cfWSXOMR5w",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#ff7f4d",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: -292,
                        y: 3.5,
                    },
                },
                {
                    id: "SzbljnIPmQYPRfJelCiAn",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#ff7f4d",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: -299,
                        y: 107,
                    },
                },
                {
                    id: "egcn5grbzivA_zIkKpRgC",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#ff7f4d",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: -291,
                        y: 182.5,
                    },
                },
                {
                    id: "x05j0NOE5TAeGgBJaNYJt",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#ff7f4d",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: -271,
                        y: -169.5,
                    },
                },
                {
                    id: "3a2S_gIX7dOtBAVGautHN",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#00cc33",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 317,
                        y: -164.5,
                    },
                },
                {
                    id: "0dXzpRDNCW4qz-5y66hAE",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#00cc33",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 315,
                        y: -75,
                    },
                },
                {
                    id: "F8a-ew_TwfhalO7ApAsss",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#00cc33",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 320.5,
                        y: -7,
                    },
                },
                {
                    id: "IBiPMdYBbuyQ6xcyRCR6d",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#00cc33",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 318,
                        y: 85.5,
                    },
                },
                {
                    id: "nYfvQMeN1ULY39gkHcvL6",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#00cc33",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 321.5,
                        y: 173,
                    },
                },
            ],
            edges: [
                {
                    id: "reactflow__edge-x05j0NOE5TAeGgBJaNYJtsourceR-roottargetL",
                    source: "x05j0NOE5TAeGgBJaNYJt",
                    target: "root",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-qIUZ_AvpywrYwat8P8yP5sourceR-roottargetL",
                    source: "qIUZ_AvpywrYwat8P8yP5",
                    target: "root",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-Sgq-cMiTv18cfWSXOMR5wsourceR-roottargetL",
                    source: "Sgq-cMiTv18cfWSXOMR5w",
                    target: "root",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-SzbljnIPmQYPRfJelCiAnsourceR-roottargetL",
                    source: "SzbljnIPmQYPRfJelCiAn",
                    target: "root",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-egcn5grbzivA_zIkKpRgCsourceR-roottargetL",
                    source: "egcn5grbzivA_zIkKpRgC",
                    target: "root",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-3a2S_gIX7dOtBAVGautHNtargetL",
                    source: "root",
                    target: "3a2S_gIX7dOtBAVGautHN",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-0dXzpRDNCW4qz-5y66hAEtargetL",
                    source: "root",
                    target: "0dXzpRDNCW4qz-5y66hAE",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-F8a-ew_TwfhalO7ApAssstargetL",
                    source: "root",
                    target: "F8a-ew_TwfhalO7ApAsss",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-IBiPMdYBbuyQ6xcyRCR6dtargetL",
                    source: "root",
                    target: "IBiPMdYBbuyQ6xcyRCR6d",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-nYfvQMeN1ULY39gkHcvL6targetL",
                    source: "root",
                    target: "nYfvQMeN1ULY39gkHcvL6",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
            ],
        },
    },

    hierachy: {
        image: template.hierachy,
        mindmap: {
            filename: "Hierachy",
            nodes: [
                {
                    id: "root",
                    type: "mindmap",
                    data: {
                        label: "",
                        backgroundColor: "#fccb00",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: -314.7421417284676,
                        y: 40,
                    },
                },
                {
                    id: "eGVKNv-xBCu81izdjXHev",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#00cc33",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: -15.5,
                        y: -61.5,
                    },
                },
                {
                    id: "xPATgjX8GeyP38G2k3EkO",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#66a9ff",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: -21,
                        y: 121.36787407298675,
                    },
                },
                {
                    id: "Jd2OIKG-9ox8pyBGiIXq9",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#00cc33",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 248.22003160290865,
                        y: -134.54714962919473,
                    },
                },
                {
                    id: "SJYjS7nkYyntobcg_zC87",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#00cc33",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 257.9419229312137,
                        y: -15.373198002800345,
                    },
                },
                {
                    id: "A_AxolEBJGc6HJZszRvtT",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#3399ff",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 248.82897775168254,
                        y: 82.37187310374411,
                    },
                },
                {
                    id: "KOkDI6om1Vto8-cA84nKL",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#3399ff",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 251.8417649166705,
                        y: 205.8841254423919,
                    },
                },
            ],
            edges: [
                {
                    id: "reactflow__edge-rootsourceR-eGVKNv-xBCu81izdjXHevtargetL",
                    source: "root",
                    target: "eGVKNv-xBCu81izdjXHev",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-xPATgjX8GeyP38G2k3EkOtargetL",
                    source: "root",
                    target: "xPATgjX8GeyP38G2k3EkO",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-xPATgjX8GeyP38G2k3EkOsourceR-A_AxolEBJGc6HJZszRvtTtargetL",
                    source: "xPATgjX8GeyP38G2k3EkO",
                    target: "A_AxolEBJGc6HJZszRvtT",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-xPATgjX8GeyP38G2k3EkOsourceR-KOkDI6om1Vto8-cA84nKLtargetL",
                    source: "xPATgjX8GeyP38G2k3EkO",
                    target: "KOkDI6om1Vto8-cA84nKL",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-eGVKNv-xBCu81izdjXHevsourceR-Jd2OIKG-9ox8pyBGiIXq9targetL",
                    source: "eGVKNv-xBCu81izdjXHev",
                    target: "Jd2OIKG-9ox8pyBGiIXq9",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-eGVKNv-xBCu81izdjXHevsourceR-SJYjS7nkYyntobcg_zC87targetL",
                    source: "eGVKNv-xBCu81izdjXHev",
                    target: "SJYjS7nkYyntobcg_zC87",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
            ],
        },
    },

    sankey: {
        image: template.sankay,
        mindmap: {
            filename: "Radial",
            nodes: [
                {
                    id: "root",
                    type: "mindmap",
                    data: {
                        label: "",
                        backgroundColor: "E9EBEA",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 66,
                        y: 384,
                    },
                },
                {
                    id: "W2m1AxMcRcJAiGUKR_3mJ",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#ff7f4d",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 343.5,
                        y: 203.5,
                    },
                },
                {
                    id: "mZdVCEuIppcEB_UuAvayl",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#fccb00",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 342.5,
                        y: 293.5,
                    },
                },
                {
                    id: "mJuhwqZ0hG-GW8yFqZtaM",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#33a3bb",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 342.5,
                        y: 384.5,
                    },
                },
                {
                    id: "_YPrXWN-QBD-Oczowlsy7",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#66a9ff",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 342.5,
                        y: 475,
                    },
                },
                {
                    id: "q1Sz213AS4Dy-dI26bjkr",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#3399ff",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 342.5,
                        y: 566.5,
                    },
                },
            ],
            edges: [
                {
                    id: "reactflow__edge-rootsourceR-W2m1AxMcRcJAiGUKR_3mJtargetL",
                    source: "root",
                    target: "W2m1AxMcRcJAiGUKR_3mJ",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-mZdVCEuIppcEB_UuAvayltargetL",
                    source: "root",
                    target: "mZdVCEuIppcEB_UuAvayl",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-mJuhwqZ0hG-GW8yFqZtaMtargetL",
                    source: "root",
                    target: "mJuhwqZ0hG-GW8yFqZtaM",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-_YPrXWN-QBD-Oczowlsy7targetL",
                    source: "root",
                    target: "_YPrXWN-QBD-Oczowlsy7",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-rootsourceR-q1Sz213AS4Dy-dI26bjkrtargetL",
                    source: "root",
                    target: "q1Sz213AS4Dy-dI26bjkr",
                    sourceHandle: "sourceR",
                    targetHandle: "targetL",
                    type: "custom-edge",
                },
            ],
        },
    },

    process: {
        image: template.process,
        mindmap: {
            filename: "Process",
            nodes: [
                {
                    id: "mn8uGA95U2-coPJBQ_qzV",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#66a9ff",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 2014.25,
                        y: 294,
                    },
                },
                {
                    id: "U5Bfd-G3CzHkwds-XfFdE",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#fccb00",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 1812.5,
                        y: 202.5,
                    },
                },
                {
                    id: "ci6EwonvlPerwd1zxWMd_",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#33a3bb",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 1633.75,
                        y: 293.5,
                    },
                },
                {
                    id: "0yCIKYlzc6k2pOUh49OhE",
                    type: "mindmap",
                    data: {
                        label: "",
                        note: "",
                        backgroundColor: "#66a9ff",
                    },
                    height: 41,
                    width: 195,
                    position: {
                        x: 1812.5,
                        y: 384.5,
                    },
                },
            ],
            edges: [
                {
                    id: "reactflow__edge-U5Bfd-G3CzHkwds-XfFdEsourceB-ci6EwonvlPerwd1zxWMd_targetT",
                    source: "U5Bfd-G3CzHkwds-XfFdE",
                    target: "ci6EwonvlPerwd1zxWMd_",
                    sourceHandle: "sourceB",
                    targetHandle: "targetT",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-ci6EwonvlPerwd1zxWMd_sourceB-0yCIKYlzc6k2pOUh49OhEtargetT",
                    source: "ci6EwonvlPerwd1zxWMd_",
                    target: "0yCIKYlzc6k2pOUh49OhE",
                    sourceHandle: "sourceB",
                    targetHandle: "targetT",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-mn8uGA95U2-coPJBQ_qzVsourceB-0yCIKYlzc6k2pOUh49OhEtargetT",
                    source: "mn8uGA95U2-coPJBQ_qzV",
                    target: "0yCIKYlzc6k2pOUh49OhE",
                    sourceHandle: "sourceB",
                    targetHandle: "targetT",
                    type: "custom-edge",
                },
                {
                    id: "reactflow__edge-U5Bfd-G3CzHkwds-XfFdEsourceB-mn8uGA95U2-coPJBQ_qzVtargetT",
                    source: "U5Bfd-G3CzHkwds-XfFdE",
                    target: "mn8uGA95U2-coPJBQ_qzV",
                    sourceHandle: "sourceB",
                    targetHandle: "targetT",
                    type: "custom-edge",
                },
            ],
        },
    },
};

export default mindmapTemplates;
