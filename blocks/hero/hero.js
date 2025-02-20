export default function decorate(block) {
    /* Convert to div structure */
    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero-container');

    [...block.children].forEach((row) => {
        const div = document.createElement('div');
        div.classList.add('hero-content');

        while (row.firstElementChild) div.append(row.firstElementChild);

        // Add button dynamically
        const button = document.createElement('a');
        button.href = '#'; // Set your desired link here
        button.textContent = 'Learn More'; // Button text
        button.classList.add('hero-button');

        div.append(button);
        heroContainer.append(div);
    });

    // Clear block and append new structure
    block.textContent = '';
    block.append(heroContainer);
}