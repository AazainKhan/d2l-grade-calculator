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

    // Find the header row to determine the column index for "Weight Achieved"
    let headerRow = gradesTable.querySelector('tr');
    let weightAchievedColumnIndex = -1;

    if (headerRow) {
        Array.from(headerRow.cells).forEach((cell, index) => {
            if (cell.textContent.includes("Weight Achieved")) {
                weightAchievedColumnIndex = index;
            }
        });
    }

    if (weightAchievedColumnIndex !== -1) {
        // Insert a new row with the total percentage under the "Weight Achieved" column
        let newRow = gradesTable.insertRow();
        
        // Create the first cell with "Total grade" text
        let totalGradeCell = newRow.insertCell();
        totalGradeCell.innerHTML = "<b>Total grade</b>";

        // Create empty cells to align with the header structure
        for (let i = 1; i < weightAchievedColumnIndex; i++) {
            newRow.insertCell();
        }

        // Create a cell for the total percentage value
        let percentageCell = newRow.insertCell();
        percentageCell.innerHTML = `<b>${totalPercentage.toFixed(2)}%</b>`;
        percentageCell.style.textAlign = "right"; // Align to the right

        // Create a cell for empty space to align with the remaining columns
        newRow.insertCell();

        // Fill the remaining cells to match the header structure
        let remainingColumns = headerRow.cells.length - weightAchievedColumnIndex - 2;
        for (let i = 0; i < remainingColumns; i++) {
            newRow.insertCell();
        }
    }
}

// Execute the function
calculateGradeTotal();
