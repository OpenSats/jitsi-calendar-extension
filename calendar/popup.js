function click(e) {
    chrome.tabs.create({ url: e.target.href + '&extid=' + chrome.runtime.id});

    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#settings').addEventListener('click', () => {
        chrome.runtime.openOptionsPage();
    });
    var anchors = document.querySelectorAll('a');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', click);
    }
});
