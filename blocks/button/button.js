export default function decorate(block) {
    if (!block) return;
  
    const button = document.createElement('a');
    button.href = '#'; // Set your desired link
    button.textContent = 'Click Me'; // Button text
    button.classList.add('hero-button');
  
    block.appendChild(button);
  }