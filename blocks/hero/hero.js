export default function decorate(block) {
    const button = document.createElement('a');
    button.href = '#'; // Set your desired link here
    button.textContent = 'Click Me'; // Button text
    button.classList.add('hero-button');

    // Append the button to the Hero block
    block.appendChild(button);
}