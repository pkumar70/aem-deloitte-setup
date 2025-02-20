export default function decorate(block) {
    if (!block) return;
  
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = 'Click Me';
    button.classList.add('hero-button');
  
    block.appendChild(button);
  }