export default function downloadImage(dataUrl: string) {
    const a = document.createElement("a");

    a.setAttribute("download", "simple_mind_map.png");
    a.setAttribute("href", dataUrl);
    a.click();
}
