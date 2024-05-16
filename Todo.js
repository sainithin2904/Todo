const input = document.getElementById('inp')
const addbtn = document.getElementById('btn')
const todolistcont = document.getElementById('todolist')
addbtn.addEventListener('click',()=>{
    const  value = input.value
    const li = document.createElement('li')
    const span=document.createElement('span')
    const delbtn = document.createElement('button')

    delbtn.addEventListener('click',(e)=>{
        if (e.shiftKey){
            li.remove()
        }

        
    })

    const valueNode = document.createTextNode(value)
    span.appendChild(valueNode)
    delbtn.innerText = ' Delete'
    li.appendChild(span)
    li.appendChild(delbtn)

    todolistcont.append(li)
    input.value = ''

})
