const input = document.querySelector('#inputForm')
const list = document.querySelector('ul')

input.addEventListener('submit', function(e){
    console.log('something')
    e.preventDefault()
    let newUser =  document.createElement('li') 
    newUser.innerText = input.id.value
    list.append(newUser)
    input.id.value = ''
})