function calculateGradeTotal() {
    let gradesTable = document.querySelector('table');
    if (!gradesTable) {
        console.log("Grades table not found");
        return;
    }
    console.log("Grades table found");

    let totalWeightAchieved = 0;
    let totalMaxWeight = 0;

    gradesTable.querySelectorAll('tr').forEach((row, index) => {
        if (index === 0) return; // Skip header row

        if (row.classList.contains('d_ggl1')) return;

        let weightCell = row.cells[2];
        if (weightCell && !weightCell.textContent.includes('/')) return; // Skip rows without weights

        let weights = weightCell.textContent.split('/');
        if (weights.length === 2) {
            let weightAchieved = parseFloat(weights[0].trim());
            let maxWeight = parseFloat(weights[1].trim());
            if (!isNaN(weightAchieved) && !isNaN(maxWeight)) {
                totalWeightAchieved += weightAchieved;
                totalMaxWeight += maxWeight;
            }
        }
    });

    let totalPercentage = totalMaxWeight ? (totalWeightAchieved / totalMaxWeight) * 100 : 0;

    // Insert the calculated total into the table
    let newRow = gradesTable.insertRow();
    let cell = newRow.insertCell(0);

    // Set the cell's colSpan to match the number of header columns
    let headerColumns = gradesTable.querySelectorAll('th').length;
    cell.colSpan = headerColumns;

    // Align the content to the left
    cell.innerHTML = `<b>Total Grade: ${totalPercentage.toFixed(2)}%</b>`;
    cell.style.textAlign = "left";
}

calculateGradeTotal();
