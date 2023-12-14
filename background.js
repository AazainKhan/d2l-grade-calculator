// Message listener for receiving messages from content scripts
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "calculate_grade") {
        // If calculateTotalGrade is asynchronous, you can use a Promise
        calculateTotalGrade().then(totalGrade => {
            // Send the total grade back to the content script
            sendResponse({ totalGrade });
        });

        // Return true to indicate you wish to send a response asynchronously
        return true;
    }
});

// Example function for calculating the total grade (you should implement your logic here)
function calculateTotalGrade() {
    // Implement your grade calculation logic here
    // Replace this with your actual calculation
    const totalGrade = 85.5; // Example total grade
    return Promise.resolve(totalGrade); // Return a Promise that resolves with the total grade
}