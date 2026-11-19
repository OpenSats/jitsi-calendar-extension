const serverInput = document.querySelector('#server');
const status = document.querySelector('#status');

readServer(url => { serverInput.value = url; });

function saveServer(value) {
    let url;
    try {
        url = normalizeServer(value);
    } catch {
        serverInput.setCustomValidity('Enter an HTTPS server URL without credentials, a query, or a fragment.');
        serverInput.reportValidity();
        return;
    }
    chrome.storage.local.set({ serverUrl: url, ['knownServer:' + url]: true }, () => {
        if (chrome.runtime.lastError) {
            status.textContent = chrome.runtime.lastError.message;
            return;
        }
        serverInput.value = url;
        status.textContent = 'Saved.';
    });
}

serverInput.addEventListener('input', () => {
    serverInput.setCustomValidity('');
    status.textContent = '';
});
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    saveServer(serverInput.value);
});
document.querySelector('#reset').addEventListener('click', () => {
    serverInput.setCustomValidity('');
    saveServer(DEFAULT_SERVER);
});
