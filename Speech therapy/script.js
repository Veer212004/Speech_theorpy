// Handle Patient Registration form submission
document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
    let patientName = document.getElementById("patientName").value;
    let therapistName = document.getElementById("therapistName").value;
    console.log("Patient Registration - Patient Name:", patientName, "Assigned Therapist:", therapistName);
    alert("Patient registered and therapist assigned!");
});

// Handle Therapy Plan form submission
document.getElementById("therapyPlanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let patientName = document.getElementById("patientName").value;
    let therapyPlan = document.getElementById("therapyPlan").value;
    console.log("Therapy Plan Creation - Patient Name:", patientName, "Therapy Plan:", therapyPlan);
    alert("Therapy plan submitted!");
});

// Handle Plan Approval form submission
document.getElementById("planApprovalForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let planId = document.getElementById("planId").value;
    let approvalStatus = document.getElementById("approvalStatus").value;
    let feedback = document.getElementById("feedback").value;
    console.log("Plan Approval - Plan ID:", planId, "Approval Status:", approvalStatus, "Feedback:", feedback);
    alert("Plan approval submitted!");
});

// Handle Track Session Progress form submission
document.getElementById("trackSessionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let sessionId = document.getElementById("sessionId").value;
    let progressDetails = document.getElementById("progressDetails").value;
    console.log("Track Session Progress - Session ID:", sessionId, "Progress Details:", progressDetails);
    alert("Session progress tracked!");
});

// Handle Progress Report form submission
document.getElementById("progressReportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let reportId = document.getElementById("reportId").value;
    let reportDetails = document.getElementById("reportDetails").value;
    console.log("Progress Report - Report ID:", reportId, "Report Details:", reportDetails);
    alert("Progress report submitted!");
});

// Handle Supervisor Feedback form submission
document.getElementById("supervisorFeedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let reportId = document.getElementById("reportId").value;
    let feedback = document.getElementById("feedback").value;
    console.log("Supervisor Feedback - Report ID:", reportId, "Feedback:", feedback);
    alert("Supervisor feedback submitted!");
});

// Handle Discharge/Update Goals form submission
document.getElementById("dischargeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let patientId = document.getElementById("patientId").value;
    let action = document.getElementById("action").value;
    let goalDetails = document.getElementById("goalDetails").value;
    console.log("Discharge/Update Goals - Patient ID:", patientId, "Action:", action, "Goal Details:", goalDetails);
    alert("Action submitted for discharge/update goals!");
});
