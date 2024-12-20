// script.js

// Function to add a row to a table
function addRow(tableId, data) {
    const table = document.getElementById(tableId);
    const row = table.insertRow();
    data.forEach(cellData => {
        const cell = row.insertCell();
        cell.textContent = cellData;
    });
}

// Handle therapy plan form submission
document.getElementById('therapyPlanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const therapyPlan = document.getElementById('therapyPlan').value;
    
    // Add to patient list as a new row
    addRow('patientList', [patientName, 'N/A', 'Planning']);
    
    // Reset the form
    this.reset();
    
    // Show a confirmation message
    alert('Therapy plan created for ' + patientName);
});

// Handle upcoming session form submission
document.getElementById('upcomingSessionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionTime = document.getElementById('sessionTime').value;
    const sessionType = document.getElementById('sessionType').value;
    
    // Add to upcoming sessions table as a new row
    addRow('upcomingSessions', [sessionDate, sessionTime, sessionType]);
    
    // Reset the form
    this.reset();
    
    // Show a confirmation message
    alert('Upcoming session added on ' + sessionDate + ' at ' + sessionTime);
});

// Handle progress tracking form submission
document.getElementById('progressTrackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('progressPatientName').value;
    const sessionsCompleted = document.getElementById('sessionsCompleted').value;
    const progress = document.getElementById('progress').value;
    
    // Add to progress tracking table as a new row
    addRow('progressTracking', [patientName, sessionsCompleted, progress]);
    
    // Reset the form
    this.reset();
    
    // Show a confirmation message
    alert('Progress updated for ' + patientName);
});

// Handle file upload form submission
document.getElementById('fileUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // For demo purposes, just show an alert
    alert('File uploaded successfully');
    
    // Reset the form
    this.reset();
});

// Example of adding static alerts and resources
document.getElementById('alerts').innerHTML = '<p>Reminder: Review pending approvals!</p>';
document.getElementById('resources').innerHTML = '<ul><li><a href="#">Therapy Guidelines</a></li><li><a href="#">Patient Engagement Strategies</a></li></ul>';
