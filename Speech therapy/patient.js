document.addEventListener('DOMContentLoaded', () => {
    // Handle Message Form Submission
    document.getElementById('messageForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve form values
        const messageRecipient = document.getElementById('messageRecipient').value;
        const messageContent = document.getElementById('messageContent').value;

        // Display or send the message (for demo purposes, we'll log it)
        console.log('Message Sent:', {
            recipient: messageRecipient,
            content: messageContent
        });

        // Optionally, append the message to a messages section
        // const messageSection = document.getElementById('communicationLog');
        // const newMessage = document.createElement('div');
        // newMessage.innerHTML = `<strong>To ${messageRecipient}:</strong><p>${messageContent}</p>`;
        // messageSection.appendChild(newMessage);

        // Reset the form
        document.getElementById('messageForm').reset();
    });

    // Handle Feedback Form Submission
    document.getElementById('feedbackForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve form values
        const feedbackSessionDate = document.getElementById('feedbackSessionDate').value;
        const feedbackRating = document.getElementById('feedbackRating').value;
        const feedbackComments = document.getElementById('feedbackComments').value;

        // Create a new row for the session history table
        const sessionHistoryTableBody = document.getElementById('sessionHistory').querySelector('tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${feedbackSessionDate}</td>
            <td>Feedback on session</td> <!-- Placeholder for Session Details -->
            <td>${feedbackRating}: ${feedbackComments}</td>
        `;
        sessionHistoryTableBody.appendChild(newRow);

        // Optionally, you can log the feedback or process it further
        console.log('Feedback Submitted:', {
            feedbackSessionDate,
            feedbackRating,
            feedbackComments
        });

        // Reset the form
        document.getElementById('feedbackForm').reset();
    });

    // Example of dynamically adding therapy progress (this should be dynamic based on real data)
    const therapyProgressDiv = document.getElementById('therapyProgress');
    therapyProgressDiv.innerHTML = `
        <p><strong>Current Goal:</strong> Improve speech clarity.</p>
        <p><strong>Next Session:</strong> September 15, 2024</p>
        <p><strong>Progress:</strong> 60% of goals achieved.</p>
    `;
});
