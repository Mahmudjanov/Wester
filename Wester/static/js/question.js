// Update progress tracker
function updateProgressTracker(current, total) {
    document.getElementById('current-question').textContent = current;
    document.getElementById('total-questions').textContent = total;
}

// Enable selection mechanism
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        const parent = option.parentElement;
        // Remove "selected" class and reset "+" for all options in the group
        parent.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('.action').textContent = '+';
        });

        // Add "selected" class and change "+" to "x" for the clicked option
        option.classList.add('selected');
        option.querySelector('.action').textContent = 'x';

        // Enable the "Next" button
        const nextButton = parent.nextElementSibling.querySelector('.next-btn');
        nextButton.disabled = false;
    });
});

// Navigate to the next question
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', () => {
        const currentQuestion = document.querySelector('.question:not(.hidden)');
        const nextQuestionId = button.getAttribute('data-next');
        if (nextQuestionId) {
            currentQuestion.classList.add('hidden'); // Hide current question
            const nextQuestion = document.getElementById(nextQuestionId);
            nextQuestion.classList.remove('hidden'); // Show next question

            // Update progress tracker
            const currentIndex = Array.from(document.querySelectorAll('.question')).indexOf(nextQuestion) + 1;
            const totalQuestions = document.querySelectorAll('.question').length;
            updateProgressTracker(currentIndex, totalQuestions);
        }
    });
});

// Navigate to the previous question
document.querySelectorAll('.prev-btn').forEach(button => {
    button.addEventListener('click', () => {
        const currentQuestion = document.querySelector('.question:not(.hidden)');
        const prevQuestionId = button.getAttribute('data-prev');
        if (prevQuestionId) {
            currentQuestion.classList.add('hidden'); // Hide current question
            const prevQuestion = document.getElementById(prevQuestionId);
            prevQuestion.classList.remove('hidden'); // Show previous question

            // Update progress tracker
            const currentIndex = Array.from(document.querySelectorAll('.question')).indexOf(prevQuestion) + 1;
            const totalQuestions = document.querySelectorAll('.question').length;
            updateProgressTracker(currentIndex, totalQuestions);
        }
    });
});

// Initialize progress tracker
updateProgressTracker(1, document.querySelectorAll('.question').length);