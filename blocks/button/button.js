export function buttonHero() {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";

    if (onClick) {
        button.addEventListener("click", onClick);
    }

    return button;
}
