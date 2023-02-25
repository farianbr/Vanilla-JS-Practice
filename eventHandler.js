const btn = document.querySelector(".btn")
const button = document.querySelector(".button")
const list = document.querySelector('.list')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const clear = document.querySelector('.clear')


nameInput.addEventListener('keyup', function(){
    emailInput.addEventListener('keyup', function(){
        if(nameInput.value != '' && emailInput.value != ''){
            button.removeAttribute('disabled')
        }
    })

    if(nameInput.value != '' && emailInput.value != ''){
        button.removeAttribute('disabled')


        uygt7frtf
    }  
})

function onSubmit(e){
    e.preventDefault()

    const li = document.createElement('li')
    const name = nameInput.value
    const email = emailInput.value

    li.appendChild(document.createTextNode(`${name} : ${email}`))
    list.appendChild(li)

    console.log(`Added Name:${name}, Email:${email}`)
    nameInput.value = ''
    emailInput.value = '' 
    button.setAttribute('disabled', true)
}

button.addEventListener("click", onSubmit)
clear.addEventListener("click", function(e){
    e.preventDefault()
    list.innerHTML = ''
    console.log('Cleared!')
})
