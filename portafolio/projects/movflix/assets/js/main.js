let barra = document.querySelector(".barra")
let categorias = document.querySelector(".categorias")
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let expandir = document.body
    btn1.addEventListener('click', showBarra)
    btn2.addEventListener('click', showBarra)

function showBarra () {
    barra.classList.toggle('show')
    categorias.classList.toggle('show')
    expandir.classList.toggle('expanded')
    }
