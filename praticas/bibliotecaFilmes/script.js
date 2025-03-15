/*api link exemple: http://www.omdbapi.com/?t=dinossauro&y=200&plot=full*/

const titulo = document.querySelector('#inputTitle')
const ano = document.querySelector('#inputYear')
const btn = document.querySelector('button')
const resultado = document.querySelector('.resultado')
btn.addEventListener('click', () => {
    if(titulo.value.length > 0 && ano.value.length > 0){
        doisParametros(titulo.value, ano.value)
    } else {
        umParametro(titulo.value)
    }
}) 

function doisParametros(titulo, ano) {
    return fetch(`http://www.omdbapi.com/?t=${titulo}&y=${ano}&plot=full`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)    
    })
    .catch((error) => {
        console.log(error)
    })
}

function umParametro(titulo) {
    return fetch(`http://www.omdbapi.com?t=${titulo}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)    
    })
    .catch((error) => {
        console.log(error)
    })
}