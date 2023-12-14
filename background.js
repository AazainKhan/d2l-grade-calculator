chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "calculate_grade" && message.grades) {
        let totalGrade = calculateAverageGrade(message.grades);
        sendResponse({ totalGrade });
    }
    return true; // Keep the message channel open for asynchronous response
});

function calculateAverageGrade(grades) {
    if (grades.length === 0) return 0;
    let sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}
