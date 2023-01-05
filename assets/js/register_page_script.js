let form = document.querySelecter('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  return false;
});

document.getElementById("login_button").onclick = function () {
    location.href = "login_page.html";
};