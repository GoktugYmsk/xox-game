const modul = document.querySelector('.modul')
const bir = document.getElementById('bir')
const iki = document.getElementById('iki')
const container = document.querySelector('.container')
const selectBox = document.querySelector('.select-box')
const oyuncuX = document.querySelector('.x')
const oyuncuO = document.querySelector('.o')



modul.addEventListener('click',function(){
     bir.style.display = 'flex'
     iki.style.display = 'flex'
})
iki.addEventListener('click',function(){
    bir.style.display = 'none'
    iki.style.display = 'none'
    modul.innerHTML = 'o'
})

bir.addEventListener('click',function(){
    bir.style.display = 'none'
    iki.style.display = 'none'
    modul.innerHTML = 'X'
})

container.addEventListener(('click'),function(e){
    if(e.target.classList.contains('modul')){
        e.target.classList.toggle('selected')             
    }
})

oyuncuX.addEventListener('click',function(){
    container.style.display = 'flex'
})
oyuncuO.addEventListener('click',function(){
    container.style.display = 'flex'
})