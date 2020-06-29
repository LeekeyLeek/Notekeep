/*This will import Todoitems.js and will contain the actual content of the Todolists, and wrap them in a container.
Think on whether or not "Todoitems.js" is needed for this project. */



const todoLists = () => {
    
    
    let title = title;
    let description = description;
    


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

    let createList = (title, description) => {
        /*
        Creates empty todoList div. todoItems are added/edited within todoList.
        */

        let todoList = document.createElement('div')
        projectDiv.appendChild(todoList)
    }


    return {title, description, createList, dueDate, setPriority}
}

export default { todoLists }