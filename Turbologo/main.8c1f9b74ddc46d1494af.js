!function(){"use strict";const e=document.querySelector("body"),t=document.querySelector(".header"),c=document.querySelectorAll(".header__menu-link");document.querySelector(".header__burger").addEventListener("click",(()=>{t.classList.toggle("active"),e.scrollIntoView({behavior:"instant",block:"start"}),e.classList.toggle("locked")})),c.forEach((c=>{c.addEventListener("click",(()=>{t.classList.remove("active"),e.scrollIntoView({behavior:"instant",block:"start"}),e.classList.remove("locked")}))}))}();