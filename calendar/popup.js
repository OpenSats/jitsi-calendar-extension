const createLink = document.querySelector('#create');
const createUrl = new URL(createLink.href);
createUrl.searchParams.set('extid', chrome.runtime.id);
createLink.href = createUrl.href;

document.querySelector('#settings').addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
});
