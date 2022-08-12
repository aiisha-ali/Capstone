const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const emailAddress = document.getElementById("emailAddress");
const message = document.getElementById("message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const aisha = {
    name: name.value,
    emailAddress: emailAddress.value,
    message: message.value,
  };
  axios.post("http://localhost:4000/api/contact", aisha).then((res) => {
    alert(res.data);
  });
});
