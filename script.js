const passwordBox = document.getElementById("input");
const form = document.getElementById("form");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
const alChars = upperCase + lowerCase + number + symbol;

// function createPassword() {
//   let password = "";
//   password += upperCase[Math.floor(Math.random() * upperCase.length)];
//   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//   password += number[Math.floor(Math.random() * number.length)];
//   password += symbol[Math.floor(Math.random() * symbol.length)];

//   while (lenght > password.length) {
//     password += alChars[Math.floor(Math.random() * alChars.length)];
//   }
//   passwordBox.value = password;
// }
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password += alChars[Math.floor(Math.random() * alChars.length)];
  }
  passwordBox.value = password;
});
function copy() {
  passwordBox.select();
  document.execCommand("copy");
}
