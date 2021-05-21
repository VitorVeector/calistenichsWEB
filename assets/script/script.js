// BtnToggle
const btn = document.getElementById('btnToggle')

function btnToggle() {
    nav = document.querySelector('nav')
    nav.classList.toggle('active')

}

btn.onclick = btnToggle


// SCROLL ANIMATION
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(e => {
        if ((windowTop) > e.offsetTop) {
            e.classList.add(animationClass)
        } else {
            e.classList.remove(animationClass)
        }
    })
}

window.onscroll = animeScroll


const calcular = document.getElementById('calcular')
const result = document.getElementById('result')

calcular.onclick = () => {
    const nome = document.getElementById('nome')
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')



    if (nome.value !== '' && peso.value !== '' && altura.value !== '') {
        const valorImc = (peso.value / Math.pow(altura.value, 2)).toFixed(2)
        result.textContent = valorImc
        if (valorImc < 18) {
            result.textContent = `${nome.value}, você está abaixo do peso. IMC: ${valorImc}`
        } else if (valorImc >= 18 && valorImc <= 25) {
            result.textContent = `${nome.value}, você está com o peso normal. IMC: ${valorImc}`
        } else if (valorImc >= 25 && valorImc <= 29.9) {
            result.textContent = `${nome.value}, você está acima do peso. IMC: ${valorImc}`
        } else if (valorImc >= 30 && valorImc <= 34.9) {
            result.textContent = `${nome.value}, você está com grau de obesidade 1. IMC: ${valorImc}`
        } else if (valorImc >= 35 && valorImc <= 39.9) {
            result.textContent = `${nome.value}, você está com grau de obesidade 2. IMC: ${valorImc}`
        } else if (valorImc >= 40) {
            result.textContent = `${nome.value}, você está com grau de obesidade 3. IMC: ${valorImc}`
        }
    } else {
        alert('Preencha todos os campos!')
    }
}