document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // Get the current tab's URL
        var currentTabUrl = tabs[0].url;
        // Check if the URL contains both 'd2l' and 'grades'
        if (currentTabUrl.includes('d2l') && currentTabUrl.includes('grades')) {
            document.getElementById('status').textContent = 'Active';
            document.getElementById('status').style.color = 'green';
        } else {
            document.getElementById('status').textContent = 'Not Active';
            document.getElementById('status').style.color = 'red';
        }
    });
});
