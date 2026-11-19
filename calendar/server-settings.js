const DEFAULT_SERVER = 'https://meet.jit.si/';

function normalizeServer(value) {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || url.username || url.password
            || url.href.includes('?') || url.href.includes('#')) {
        throw new Error('Enter an HTTPS server URL without credentials, a query, or a fragment.');
    }
    return url.href.replace(/\/*$/, '/');
}

function readServer(callback) {
    chrome.storage.local.get(null, (settings = {}) => {
        let url = DEFAULT_SERVER;
        try {
            url = normalizeServer(settings.serverUrl || DEFAULT_SERVER);
        } catch {
            // An invalid saved value falls back to the public instance.
        }
        const knownServers = new Set([DEFAULT_SERVER, url]);
        for (const key of Object.keys(settings)) {
            if (key.startsWith('knownServer:')) {
                knownServers.add(key.slice('knownServer:'.length));
            }
        }
        callback(url, knownServers);
    });
}
