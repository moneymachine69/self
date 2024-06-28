// dark mode based on time
const time = new Date().getHours();

if (!(time < 20 && time > 8)) {
  sessionStorage.setItem("dm", "on");
  document.body.classList.add("dark-mode");
} else {
  sessionStorage.setItem("dm", "off");
  document.body.classList.remove("dark-mode");
}

// dark mode local storage

if (!localStorage.getItem("dm")) {
    localStorage.setItem("dm", "off");
  } else {
    // check if dark mode is on and then add the dark-mode class
    if (localStorage.getItem("dm") == "on") {
      document.body.classList.add("dark-mode");
    }
}

//button
function toggleDM() {
    if (localStorage.getItem("dm") == "off") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dm", "on");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dm", "off");
    }
  }