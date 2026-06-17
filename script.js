function setTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}

setTheme();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    setTheme();
  });

document.body.classList.add(localStorage.getItem("theme"));

let toggle = document.querySelector("#toggleTheme");

toggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});




// const body = document.body;
// const toggle = document.querySelector("#toggleTheme");

// function setTheme(theme) {
//   body.classList.toggle("dark", theme === "dark");
//   body.classList.toggle("light", theme === "light");
//   localStorage.setItem("theme", theme);
// }

// // LocalStorage theme -> System theme
// const savedTheme = localStorage.getItem("theme");
// setTheme(
//   savedTheme ||
//     (window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light")
// );

// // System theme change listener
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (e) => {
//     if (!localStorage.getItem("theme")) {
//       setTheme(e.matches ? "dark" : "light");
//     }
//   });

// // Toggle button
// toggle.addEventListener("click", () => {
//   setTheme(body.classList.contains("dark") ? "light" : "dark");
// });

