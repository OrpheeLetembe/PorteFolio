const scrolling = document.querySelector("#scrolling_menu")
const menu = document.querySelector("#menu")
const hLinks= document.querySelectorAll(".hLink")

scrolling.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    scrolling.classList.toggle("bg-gray-500")
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        scrolling.classList.toggle("bg-gray-500")
    })

})