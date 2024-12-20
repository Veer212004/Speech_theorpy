document.addEventListener('DOMContentLoaded', () => {
    // Handle Case Evaluation Form Submission
    document.getElementById('caseEvaluationForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve form values
        const therapistName = document.getElementById('caseTherapistName').value;
        const caseRating = document.getElementById('caseRating').value;
        const caseComments = document.getElementById('caseComments').value;

        // Create a new row for the performance reports table
        const performanceTableBody = document.getElementById('performanceReports').querySelector('tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${therapistName}</td>
            <td>-</td> <!-- Placeholder for Session Frequency -->
            <td>${caseRating}</td>
        `;
        performanceTableBody.appendChild(newRow);

        // Optionally, you can log the feedback or process it further
        console.log('Case Evaluation Submitted:', {
            therapistName,
            caseRating,
            caseComments
        });

        // Reset the form
        document.getElementById('caseEvaluationForm').reset();
    });

    // Handle Feedback Form Submission
    document.getElementById('feedbackForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve form values
        const feedbackTherapistName = document.getElementById('feedbackTherapistName').value;
        const feedbackMessage = document.getElementById('feedbackMessage').value;

        // Create a new notification for therapy plans review
        const therapyPlanReviewDiv = document.getElementById('therapyPlanReview');
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        feedbackItem.innerHTML = `
            <h4>Feedback for ${feedbackTherapistName}</h4>
            <p>${feedbackMessage}</p>
        `;
        therapyPlanReviewDiv.appendChild(feedbackItem);

        // Optionally, you can log the feedback or process it further
        console.log('Feedback Submitted:', {
            feedbackTherapistName,
            feedbackMessage
        });

        // Reset the form
        document.getElementById('feedbackForm').reset();
    });
});
