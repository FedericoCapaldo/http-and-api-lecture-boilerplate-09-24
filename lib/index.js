// TODO: Fetch an activity with the Bored API - Let's pseudocode!
const url = "https://bored.api.lewagon.com/api/activity/";

const button = document.querySelector(".btn-warning")

button.addEventListener('click', (event) => {
  const options = ["Read a book!", "Do your flashcards!", "Go for a walk!"]
  const randomNumber = Math.floor(Math.random() * 3)
  const chosenRandomActivity = options[randomNumber]
  // Callback
  event.currentTarget.innerText = options[randomNumber];
  event.currentTarget.setAttribute("disabled", "");
})
