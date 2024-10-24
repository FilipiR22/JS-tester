fetch('https://reqres.in/api/users/',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name:'Marcus Paulo'
    })
})
    .then(response => response.json())
    
    
// console.log(data)