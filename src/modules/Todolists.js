const lists = (() => {
    
    /* Can possibly make these interactable text boxes.
    title = title;
    description = description; */
    

    let setPriority = () => {
        //switch statement (on button click) between green,yellow,red
        switch(priority){
            case 1:
                //set div to green

            case 2:
                //set div to yellow

            case 3:
                //set div to red

        }
    }

    let dueDate = () => {
        //Use module to include calendar UI
    }

    let create = (parentNode) => {
        /*
        Creates empty todoList div. todoItems are added/edited within todoList.
        */

        let todoList = document.createElement('div')
        todoList.className = 'todoList';
        todoList.innerHTML = 'todoList test';
        parentNode.appendChild(todoList)
        
    }


    return {title, description, create, dueDate, setPriority}
})()

export { lists }