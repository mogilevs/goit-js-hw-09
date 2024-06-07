const formData = { email: "", message: "" }
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
if (localStorage.getItem(localStorageKey)) {
    const parsedData = JSON.parse(localStorage.getItem(localStorageKey));
    form.elements.email.value = parsedData.email;
    formData.email = parsedData.email;
    form.elements.message.value = parsedData.message;
    formData.message = parsedData.message;
}

form.addEventListener("input", (evt) => {
    if (evt.target.name === "email") {
        formData.email = evt.target.value.trim();
    } else if (evt.target.name === "message") {
      formData.message = evt.target.value.trim();
    }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
if (formData.email == 0 || formData.message == 0) {
    alert("Fill please all fields")
} else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
}
});