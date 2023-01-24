const module = document.querySelector('.modul')
const bir = document.getElementById('bir')
const iki = document.getElementById('iki')

module.addEventListener('click',function(){
     bir.style.display = 'flex'
     iki.style.display = 'flex'
})
iki.addEventListener('click',function(){
    bir.style.display = 'none'
    iki.style.display = 'none'
    module.innerHTML = 'O'
})

bir.addEventListener('click',function(){
    bir.style.display = 'none'
    iki.style.display = 'none'
    module.innerHTML = 'X'
})
