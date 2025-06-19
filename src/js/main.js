const mobileBtn = document.getElementById("mobileBtn");
const closeMobileBtn = document.getElementById("closeMobileBtn");
const mobileDialog = document.getElementById("mobileDialog");

mobileBtn.addEventListener("click", () => {
    mobileDialog.show();
    closeMobileBtn.style.display = 'flex';
    mobileBtn.style.display = 'none';
})
closeMobileBtn.addEventListener("click", () => {
    mobileDialog.close();
    mobileBtn.style.display = '';
    closeMobileBtn.style.display = '';
})


