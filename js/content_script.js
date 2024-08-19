const showHeader = () => {
    const headerParent = document.querySelector('.c746cc21');
    if(!headerParent) return;
    headerParent.style.display = 'block';
    headerParent.innerHTML = `<div class="c746cc21 list ma0 pa0 tr z-999"><div class="ee9e731a pa3 ph5-ns tl z-999 w-100 flex flex-row justify-between d76ab310" data-test-id="notification-banner"><div style="display: flex;"><p class="ma0" id="notification" role="alert" aria-atomic="true">✔ Copied to clipboard!</p></div><button aria-label="Close notification" class="_545224b8 ma0 f3 fw6">×</button></div></div>`
    const closeButton = headerParent.querySelector('button');
    closeButton.addEventListener('click', () => {
        headerParent.style.display = 'none';
    });
    setTimeout(() => {
        headerParent.style.display = 'none';
    }, 3000);
};

const handleYarnButtonClick = (e) => {
    const parent = e.target.parentElement;
    const code = parent.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        showHeader();
        console.log('Copied to clipboard');
    }).catch((err) => {
        console.log('Failed to copy to clipboard', err);
    });
}

const init = () => {
    const timer = setInterval(() => {
        const npmButton = document.querySelector('.b5be2af6');
        if (!npmButton) return;
        clearInterval(timer);

        const yarnButton = npmButton.cloneNode(true);
        yarnButton.querySelector('code').innerText = yarnButton.querySelector('code').innerText.replace('npm i', 'yarn add');
        yarnButton.querySelector('button').addEventListener('click', handleYarnButtonClick);


        // yarnButton.className = 'd767adf4 lh-copy truncate ph0 mb3 black-80 b5be2af6 f6 flex flex-row';
        // yarnButton.innerHTML = `<svg viewBox="0 0 12.32 9.33" aria-hidden="true"><g><line class="st1" x1="7.6" y1="8.9" x2="7.6" y2="6.9"></line><rect width="1.9" height="1.9"></rect><rect x="1.9" y="1.9" width="1.9" height="1.9"></rect><rect x="3.7" y="3.7" width="1.9" height="1.9"></rect><rect x="1.9" y="5.6" width="1.9" height="1.9"></rect><rect y="7.5" width="1.9" height="1.9"></rect></g></svg><p class="flex-auto truncate db ma0"><code>yarn add <!-- -->react</code><button class="fbd04dd1" type="button" aria-label="Copy install command line"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg></button></p>`;
        // yarnButton.addEventListener('click', handleYarnButtonClick);

        const grandpa = npmButton.parentElement;
        grandpa.insertBefore(yarnButton, npmButton);
    }, 300);
}

init();