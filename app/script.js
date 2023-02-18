const scriptURL =
  "https://script.google.com/macros/s/AKfycbxOCPYG1NPSTZUwLn-N9f3C-M7ala2QTDYn6nqPGSSJCQeT5nJRcMUutDgtx-47oD28Zw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Your message has been sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
