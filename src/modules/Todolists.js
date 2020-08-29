/*
Steps:
-Add textarea titles to all projects created
-Add textarea titles and descriptions to all lists/tasks.
*/

const lists = (() => {
    
    let createTitle = () => {

    }

    let setPriority = (parentNode) => {
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
    }

    let dueDate = () => {
        //Use module to include calendar UI
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
        todoList.appendChild(setPriority)

    }


    return {create, dueDate, setPriority}
})()

export { lists }