const back = document.getElementById('back')

back.addEventListener('click', () => {
    window.location.href="/index.html";
});

const body = document.getElementById('body');

const darkbtn = document.getElementById('dark');
const lightbtn = document.getElementById('light');
const image = document.getElementById('btnImage')


darkbtn.addEventListener('click', () => {
    document.body.classList.toggle("darkMode");
    image.classList.toggle("fa-cloud-moon");
    image.classList.toggle("fa-cloud-sun")
})
