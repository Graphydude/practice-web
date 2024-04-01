const aboutBtn = document.querySelector(".aboutBtn")
const sidebar = document.querySelector(".back-sidebar")
const closesidebar = document.querySelector(".back-sidebar")
const dropdown = document.querySelector(".back-side-drop-down")
const deepdropdown = document.querySelector(".back-deep-side-drop-down")

const about = () => {
    aboutBtn.href = "#about"
}

const sidebarBtn = () => {
    sidebar.style.display = "block";
}

const closesidebarBtn = () => {
    closesidebar.style.display = "none"
}

const dropdownBtn = () => {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block"
    } else {
        dropdown.style.display = "none"
    }
}

const deepdropdownBtn = () => {
    if (deepdropdown.style.display === "none") {
        deepdropdown.style.display = "block"
    } else {
        deepdropdown.style.display = "none"
    }
}


// let value = "done,n"

// console.log(value.includes("d"));
// console.log(value.indexOf("o"));
// console.log(value.lastIndexOf(","));
// console.log(value.replace("n",'o'));
// console.log(value.endsWith(",n"))
