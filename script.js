document.getElementById("toggle-mode").onclick=()=>document.body.classList.toggle("dark");

// document.addEventListener("DOMContentLoaded", () => {
//     const detailsElements = document.querySelectorAll("details");

//     detailsElements.forEach(details => {
//         details.addEventListener("toggle", () => {
//             if (details.open) {
//                 detailsElements.forEach(otherDetails => {
//                     if (otherDetails !== details) {
//                         otherDetails.open = false;
//                     }
//                 });
//             }
//         });
//     });
// });