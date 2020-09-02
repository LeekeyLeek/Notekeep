const lists = (() => {

    let deleteTask = (parentNode) => {
        parentNode.remove()
    }

    let setPriority = (parentNode) => {
        switch(parentNode.style.webkitFilter){
            case 'brightness(50%)':
                break

            case 'brightness(100%)':

                switch(parentNode.style.backgroundColor){
                    case 'red':
                        parentNode.style.backgroundColor = 'green';
                        break
                    case 'green':
                        parentNode.style.backgroundColor = 'yellow';
                        break
                    case 'yellow':
                        parentNode.style.backgroundColor = 'red';
                        break 
                    }

                break

            default:

                switch(parentNode.style.backgroundColor){
                    case 'red':
                        parentNode.style.backgroundColor = 'green';
                        break
                    case 'green':
                        parentNode.style.backgroundColor = 'yellow';
                        break
                    case 'yellow':
                        parentNode.style.backgroundColor = 'red';
                        break
                    }
                    
                break
            }

    }

    let create = (parentNode) => {

        let todoList = document.createElement('div')
        todoList.className = 'todoList';
        todoList.style.backgroundColor = 'green';
        parentNode.appendChild(todoList)
        
        let setPriority = document.createElement('button')
        setPriority.innerHTML = 'Change Priority';
        setPriority.className = 'priority';
        setPriority.addEventListener('click', function(e){
            let parentNode = this.parentNode
            lists.setPriority(parentNode)
        });

       let deleteBtn = document.createElement('button')
       deleteBtn.className = 'dltTask';
       deleteBtn.innerHTML = 'Delete Task'
       deleteBtn.addEventListener('click', function(e) {
           let parentNode = this.parentNode
           lists.deleteTask(parentNode)
       })

        let listTitle = document.createElement('textarea')
        listTitle.className = 'listTitles';
        listTitle.maxLength = '25';
        listTitle.rows = '1';
        listTitle.cols = '25';
        listTitle.placeholder = ' Task Title... ';

        let br1 = document.createElement('br')
        let br2 = document.createElement('br')

        let listDesc = document.createElement('textarea')
        listDesc.className = 'listDescs';
        listDesc.maxLength = '240';
        listDesc.rows = '5';
        listDesc.cols = '55';
        listDesc.placeholder = ' Task description... ';

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', function(e){
            let parentNode = this.parentNode
            if(this.checked){
                parentNode.style.webkitFilter = 'brightness(50%)'
            } else {
                parentNode.style.webkitFilter = 'brightness(100%)'
            }
        })

        todoList.appendChild(listTitle)
        todoList.appendChild(checkbox)
        todoList.appendChild(br1)
        todoList.appendChild(listDesc)
        todoList.appendChild(br2)
        todoList.appendChild(setPriority)
        todoList.appendChild(deleteBtn)

    }

    return {create, setPriority, deleteTask}
})()

export { lists }