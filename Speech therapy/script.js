// Handle Patient Registration form submission
document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
    let patientName = document.getElementById("patientName").value;
    let therapistName = document.getElementById("therapistName").value;

    // Send data to the backend via POST request
    fetch('/registerPatient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ patientName: patientName, therapistName: therapistName })
    })
    .then(response => response.json()) // Assuming the backend sends JSON response
    .then(data => {
        if (data.success) {
            alert("Patient registered and therapist assigned!");
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error during registration:", error);
        alert("Failed to register patient. Please try again.");
    });
});

// Handle Therapy Plan form submission
document.getElementById("therapyPlanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let patientName = document.getElementById("patientName").value;
    let therapyPlan = document.getElementById("therapyPlan").value;

    // Send data to backend
    fetch('/submitTherapyPlan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ patientName: patientName, therapyPlan: therapyPlan })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Therapy plan submitted!");
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error during therapy plan submission:", error);
        alert("Failed to submit therapy plan. Please try again.");
    });
});

// Similar changes can be made for other forms:

// Handle Plan Approval form submission
document.getElementById("planApprovalForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let planId = document.getElementById("planId").value;
    let approvalStatus = document.getElementById("approvalStatus").value;
    let feedback = document.getElementById("feedback").value;

    // Send data to backend
    fetch('/approvePlan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ planId: planId, approvalStatus: approvalStatus, feedback: feedback })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Plan approval submitted!");
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error during plan approval submission:", error);
        alert("Failed to submit plan approval. Please try again.");
    });
});

// Handle Track Session Progress form submission
document.getElementById("trackSessionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let sessionId = document.getElementById("sessionId").value;
    let progressDetails = document.getElementById("progressDetails").value;

    // Send data to backend
    fetch('/trackProgress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionId: sessionId, progressDetails: progressDetails })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Session progress tracked!");
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error tracking session progress:", error);
        alert("Failed to track session progress. Please try again.");
    });
});

// Handle other forms similarly (Progress Report, Supervisor Feedback, etc.)
