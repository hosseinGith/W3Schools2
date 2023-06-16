const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.menu_open')
const closeMenu = document.querySelector('.close')
let opned = true
menu.addEventListener('click',()=>{
    if(opned){
        openMenu.style.display ='flex'
        opned = false
    }else{
        openMenu.style.display ='none'
        opned = true
    }

})

closeMenu.addEventListener('click',()=>{
    openMenu.style.display ='none'
})
