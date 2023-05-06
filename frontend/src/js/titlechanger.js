export default function titlechanger(title, subtitle = false){
    const separator = (subtitle) ? ` • ${subtitle}` : "";
    document.querySelector("title").textContent = title + separator;
}