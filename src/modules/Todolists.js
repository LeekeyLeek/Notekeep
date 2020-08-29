/*
Steps:
-Create TodoList div, give it set dimensions. 
-Priority/dueDate appended to bottom left of div
-Title at top. Description is below on another row.
*/

const lists = (() => {
    
    /* Can possibly make these interactable text boxes.
    title = title;
    description = description; */


    let setPriority = (parentNode) => {
        switch(parentNode.style.backgroundColor){
            case 'red':
                //set div to green
                console.log("Running case 1")
                parentNode.style.backgroundColor = 'green';
                break
            case 'green':
                //set div to yellow
                console.log("Running case 2")
                parentNode.style.backgroundColor = 'yellow';
                break
            case 'yellow':
                //set div to red
                console.log("Running case 3")
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
        todoList.innerHTML = 'todoList test';
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


    return {title, description, create, dueDate, setPriority}
})()

export { lists }