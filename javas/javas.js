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























// const box = document.querySelector('.box')
// const translate = document.querySelector('.translater')
// const blocation = document.querySelector('.father')
// const divWidth = document.querySelector('.div-width')
// const divHeight = document.querySelector('.div-height')
// let textCreator = 'دیو بساز با رنگ'
// let div = document.createElement('div')

// function createDiv(color){
//     div.style.backgroundColor = color
//     div.classList.add('boxstyle1')
//     blocation.appendChild(div)
// }
// translate.addEventListener('keyup',()=>{
    
// divWidth.value = div.style.width
// divHeight.value = div.style.height

//     box.style.backgroundColor = translate.value
//     if(translate.value == textCreator +' '+ 'ابی')
//     {
//         createDiv('blue')
//     }
//     if(translate.value == textCreator +' '+ 'قرمز')
//     {
//         createDiv('red')
    
//     }
//     if(translate.value == textCreator +' '+ 'سبز')
//     {
//         createDiv('green')
    
//     }
//     if(translate.value == textCreator +' '+ 'زرد')
//     {
//         createDiv('yellow')
    
//     }
//     if(translate.value == textCreator +' '+ 'سبز کم رنگ')
//     {
//         createDiv('greenyellow')
    
//     }
//     if(translate.value == textCreator +' '+ 'سیاه')
//     {
//         createDiv('black')
    
//     }
//     if(translate.value == textCreator +' '+ 'قرمز')
//     {
//         createDiv('red')
    
//     }
//     if(translate.value == textCreator +' '+ 'صورتی')
//     {
//         createDiv('pink')
    
//     }
// })

// divWidth.addEventListener('keyup',()=>{
//     div.style.width = `${divWidth.value}`+'px'
// })
// divHeight.addEventListener('keyup',()=>{
//     div.style.height = `${divHeight.value}`+'px'
// })