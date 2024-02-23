const aboutBtn = document.querySelector(".aboutBtn")

function alertBtn(value) {
    aboutBtn.href = "#about"
}

const sidebar = document.querySelector(".back-sidebar")

function sidebarBtn(value) {
    sidebar.style.display = "block";
}

const closesidebar = document.querySelector(".back-sidebar")

function closesidebarBtn(value) {
    closesidebar.style.display = "none"
}

const dropdown = document.querySelector(".back-side-drop-down")

function dropdownBtn(value) {
    dropdown.style.display = "block"
}

const deepdropdown = document.querySelector(".back-deep-side-drop-down")

function deepdropdownBtn(value) {
    deepdropdown.style.display = "block"
}

const numbers = 2;
let table = 10;

for(let i = 1; i <= table; i++) {
    let result = i*numbers;
    console.log(`${table} * ${i} = ${result}`)
}

// prob
// const closedropdown = document.querySelector(".back-side-drop-down")

// function closedropdownBtn(value) {
//     closedropdown.style.display = "none"
// }

// $(document).ready(function(){
//     $(`.bi-list`).click(function(){
//         $(`.sidebar`).addClass(`active`);
//         $(`bi-list`).acc("visibility", "visible");
//     });

//     $(`close-btn`)
// });

// let value = "done,n"

// console.log(value.includes("d"));
// console.log(value.indexOf("o"));
// console.log(value.lastIndexOf(","));
// console.log(value.replace("n",'o'));
// console.log(value.endsWith(",n"))
