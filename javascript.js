const aboutBtn = document.querySelector(".aboutBtn")

function alertBtn(value) {
    aboutBtn.href = "#about"
}

const sidebar = document.querySelector(".bi-list")

function sidebarBtn(value) {
    sidebar.display = "block";
}

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
