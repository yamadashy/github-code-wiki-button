export default defineContentScript({
  matches: ['https://github.com/*'],
  runAt: 'document_start',
  allFrames: true,

  main() {
    // Inject CSS
    const injectCSS = () => {
      const style = document.createElement('style');
      style.textContent = `
        .codewiki-button.btn-sm.btn.BtnGroup-item {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          padding: 3px 12px;
          gap: 8px;
        }

        .codewiki-button .octicon {
          display: inline-flex;
          align-items: center;
        }

        .codewiki-button .octicon img {
          display: block;
          vertical-align: text-bottom;
        }
      `;
      document.head.appendChild(style);
    };

    // Inject CSS when document.head is available
    if (document.head) {
      injectCSS();
    } else {
      // Wait for document.head to be available
      const observer = new MutationObserver(() => {
        if (document.head) {
          observer.disconnect();
          injectCSS();
        }
      });
      observer.observe(document.documentElement, { childList: true });
    }

    // Function to add Code Wiki button
    function addCodeWikiButton(): void {
      // If button already exists, do nothing
      if (document.querySelector('.codewiki-button')) {
        return;
      }

      // Get repository main navigation element
      const navActions = document.querySelector<HTMLUListElement>('ul.pagehead-actions');
      if (!navActions) {
        return;
      }

      // Get repository information from current URL
      const pathMatch = window.location.pathname.match(/^\/([^/]+)\/([^/]+)/);
      if (!pathMatch) {
        return;
      }

      const [, owner, repo] = pathMatch;

      // Create Code Wiki button container
      const container = document.createElement('li');
      container.className = 'codewiki-container';

      // Create BtnGroup container
      const btnGroup = document.createElement('div');
      btnGroup.setAttribute('data-view-component', 'true');
      btnGroup.className = 'BtnGroup';

      // Create button
      const button = document.createElement('a');
      button.className = 'btn-sm btn BtnGroup-item codewiki-button';
      button.href = `https://codewiki.google/github.com/${owner}/${repo}`;
      button.target = '_blank';
      button.rel = 'noopener noreferrer';
      button.setAttribute('data-view-component', 'true');

      // Add icon
      const icon = document.createElement('span');
      icon.className = 'octicon';
      icon.innerHTML = `
    <img src="${browser.runtime.getURL('/images/icon-64.png')}" width="16" height="16" alt="Code Wiki">
  `;

      // Add text
      const text = document.createTextNode('Code Wiki');
      button.appendChild(icon);
      button.appendChild(text);
      btnGroup.appendChild(button);
      container.appendChild(btnGroup);

      // Add to navigation
      navActions.insertBefore(container, navActions.firstChild);
    }

    // Execute immediately and on DOMContentLoaded
    addCodeWikiButton();
    document.addEventListener('DOMContentLoaded', () => {
      addCodeWikiButton();

      // Handle GitHub SPA navigation
      let lastUrl = location.href;
      let isProcessing = false;

      const observer = new MutationObserver((mutations: MutationRecord[]) => {
        if (isProcessing) return;
        isProcessing = true;

        const url = location.href;
        if (url !== lastUrl) {
          lastUrl = url;
          setTimeout(() => {
            addCodeWikiButton();
            isProcessing = false;
          }, 500);
          return;
        }

        // Monitor navigation element addition (only if button doesn't exist)
        const navActions = document.querySelector<HTMLUListElement>('ul.pagehead-actions');
        const codeWikiButton = document.querySelector('.codewiki-button');
        if (navActions && !codeWikiButton) {
          addCodeWikiButton();
        }

        isProcessing = false;
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
      });
    });
  },
});
