const username = ["Bannana", "Apple", "Orange", "Apricot", "Peach", "Plum", "Watermelon", "Pear", "Cherry", "Melon"]
const randUser = username[Math.floor(Math.random() * username.length)]

const socket = io()

const messages = document.getElementById('msg')
const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value) {
        let usermsg = randUser + ' : ' + input.value
        socket.emit('chat msg', usermsg)
        input.value = ''
    }
})

socket.on('chat msg',(usermsg) =>{
    const item = document.createElement('li')
    item.textContent = usermsg
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})