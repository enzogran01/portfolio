let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("themeSwitch");

function enableDarkMode () {
    document.body.classList.add('darkmode');
    localStorage.setItem("darkmode", "active");
}
function disableDarkMode () {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}

if (darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
    darkmode != "active" ? enableDarkMode() : disableDarkMode();
    darkmode = localStorage.getItem("darkmode");
})
