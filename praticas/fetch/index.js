const output = document.querySelector('.output')
let query =     
fetch(`https://api.adviceslip.com/advice/search/${query}`) 
    .then(response => response.json())
    .then(data => console.log(data.slip.advice)) 