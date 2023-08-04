//* Selector Variables
const alertButton = document.getElementById("alert");
const logButton = document.getElementById("log");
const deleteButtons = document.getElementsByClassName("delete_btn");

//* Callback Functions
const alertMe = () => {
  alert("button clicked");
};
const consoleLogMe = () => {
  console.log("button clicked");
};
const handleDelete = (event) => {
  const button = event.target;
  const parentParagraph = button.parentNode;
  parentParagraph.remove();
};

//* Event Listeners
alertButton.addEventListener("click", alertMe);
logButton.addEventListener("click", consoleLogMe);
for (const button of deleteButtons) {
  button.addEventListener("click", handleDelete);
}

/*
! Different solution that was used previously
* Converts deleteButtons into an array
 const deleteButtonsArray = Array.from(deleteButtons);

* Add event listener to each delete button
 deleteButtonsArray.forEach((button) => {
   button.addEventListener("click", handleDelete);
 });

 */
