/ Define the checkAnswer function
function checkAnswer() {
    // Step 1: Identify the Correct Answer
    var correctAnswer = "4"; // Correct answer to the quiz question

    // Step 2: Retrieve the User’s Answer
    var selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!"); // Alert user if no option is selected
        return;
    }
    var userAnswer = selectedOption.value;

    // Step 3: Compare the User’s Answer with the Correct Answer
    var feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add a click event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);