import { buttonHero } from "../button/button";

export default async function decorate(block) {

    const header = document.createElement('div');
    header.id = 'header';

    // Create nav element
    const nav = document.createElement('div');
    nav.id = 'nav';

    // Create logo container
    const logoContainer = document.createElement('div');
    logoContainer.className = 'nav-item logo-container';

    // Create logo element
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.textContent = 'Lilly Medicine';

    // Append logo to logo container
    logoContainer.appendChild(logo);

    // Create icon container
    const iconContainer = document.createElement('div');
    iconContainer.className = 'icon-container';

    // Create search icon container
    const searchIconContainer = document.createElement('div');
    searchIconContainer.className = 'nav-item';

    // Create search icon element
    const searchIcon = document.createElement('div');
    searchIcon.className = 'search-icon';
    searchIcon.textContent = '🔍';

    // Append search icon to search icon container
    searchIconContainer.appendChild(searchIcon);

    // Create globe icon container
    const globeIconContainer = document.createElement('div');
    globeIconContainer.className = 'nav-item';

    // Create globe icon element
    const globeIcon = document.createElement('div');
    globeIcon.className = 'globe-icon';
    globeIcon.textContent = '🌐';

    // Append globe icon to globe icon container
    globeIconContainer.appendChild(globeIcon);

    // Append search and globe icon containers to icon container
    iconContainer.appendChild(searchIconContainer);
    iconContainer.appendChild(globeIconContainer);

    // Append logo container and icon container to nav
    nav.appendChild(logoContainer);
    nav.appendChild(iconContainer);

    // Create content element
    const content = document.createElement('div');
    content.className = 'content';

    // Create headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Headline about online pharmacy service';

    // Create paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'LilyDirect makes it simple to get authentic Lilly medicines directly to you, if prescribed.';

    // Create primary button element
    const primaryButton = document.createElement('button');
    primaryButton.className = 'primary-button';
    primaryButton.textContent = 'Primary →';

    // Append elements to content
    content.appendChild(headline);
    content.appendChild(paragraph);
    content.appendChild(primaryButton);

    // Append nav and content to header
    header.appendChild(nav);
    header.appendChild(content);

    header.appendChild(buttonHero)

    // Append header to body
    document.body.appendChild(header);
}
