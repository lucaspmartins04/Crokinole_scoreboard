// Get all the match score inputs
const scoreInputs = document.querySelectorAll(".score");

// Add event listeners to update the bracket when scores change
scoreInputs.forEach(input => {
  input.addEventListener("input", updateBracket);
});

// Function to update the bracket based on user input
function updateBracket() {
  // Perform the necessary updates to the bracket based on the new scores
  // For simplicity, let's just log the scores for now
  scoreInputs.forEach(input => {
    const match = input.parentElement;
    const teamA = match.querySelector(".team:first-child").textContent;
    const teamB = match.querySelector(".team:last-child").textContent;
    const scoreA = parseInt(input.value);
    const scoreB = parseInt(match.querySelector(".score:not([value='" + scoreA + "'])").value);

    console.log(`${teamA} ${scoreA} - ${scoreB} ${teamB}`);
  });
}
