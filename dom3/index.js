let count = 0;

let textArea = document.querySelector("textarea");
textArea.addEventListener("keypress", function (event) {
  let text = event.key;
  count++;
  document.querySelector("p").innerHTML = "You have pressed " + count;
});
