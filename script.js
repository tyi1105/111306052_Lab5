document.getElementById('submitButton').addEventListener('click', function () {
    const mathGrade = parseFloat(document.getElementById('mathGrade').value);
    const englishGrade = parseFloat(document.getElementById('englishGrade').value);

    // Validate inputs
    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid grades for Math and English.');
        return;
    }

    if (mathGrade < 0 || mathGrade > 100 || englishGrade < 0 || englishGrade > 100) {
        alert('Grades must be between 0 and 100.');
        return;
    }

    const tableBody = document.querySelector('#gradesTable tbody');
    const rowCount = tableBody.rows.length + 1;
    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    // Add a new row
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;

    // Update averages
    updateAverages();

    // Clear input fields
    document.getElementById('mathGrade').value = '';
    document.getElementById('englishGrade').value = '';
});

function updateAverages() {
    const tableBody = document.querySelector('#gradesTable tbody');
    const rows = tableBody.rows;

    let totalMath = 0, totalEnglish = 0, totalOverall = 0;

    for (let i = 0; i < rows.length; i++) {
        totalMath += parseFloat(rows[i].cells[1].textContent);
        totalEnglish += parseFloat(rows[i].cells[2].textContent);
        totalOverall += parseFloat(rows[i].cells[3].textContent);
    }

    const rowCount = rows.length;
    const mathColumnAvg = (totalMath / rowCount).toFixed(2);
    const englishColumnAvg = (totalEnglish / rowCount).toFixed(2);
    const overallAvg = (totalOverall / rowCount).toFixed(2);

    document.getElementById('mathColumnAvg').textContent = mathColumnAvg;
    document.getElementById('englishColumnAvg').textContent = englishColumnAvg;
    document.getElementById('overallAvg').textContent = overallAvg;
}