document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll("details");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(e=>{e!==t&&(e.open=!1)})})});
