// content.js
console.log("Content script running");

// Function with partial logic
function calculateGradeTotal() {
    let gradesTable = document.querySelector('table');
    if (!gradesTable) {
        console.log("Grades table not found");
        return;
    }
    console.log("Grades table found");

    // Part 2: Add more logic here, testing each part
    let totalWeightAchieved = 0;
    let totalMaxWeight = 0;

    gradesTable.querySelectorAll('tr').forEach((row, index) => {
        if (index === 0) return;

        let weightCell = row.cells[2];
        if (weightCell) {
            let weights = weightCell.textContent.split('/');
            if (weights.length === 2) {
                let weightAchieved = parseFloat(weights[0].trim());
                let maxWeight = parseFloat(weights[1].trim());
                if (!isNaN(weightAchieved) && !isNaN(maxWeight)) {
                    totalWeightAchieved += weightAchieved;
                    totalMaxWeight += maxWeight;
                }
            }
        }
    });

    let totalPercentage = totalMaxWeight ? (totalWeightAchieved / totalMaxWeight) * 100 : 0;

    let newRow = gradesTable.insertRow();
    let newCell = newRow.insertCell();
    newCell.colSpan = 5;
    newCell.textContent = `Total Percentage: ${totalPercentage.toFixed(2)}%`;
}

// Execute the function
calculateGradeTotal();
