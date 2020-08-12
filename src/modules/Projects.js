import {lists} from './Todolists';
/*
Steps:
-Create TodoList div, give it set dimensions. 
-Priority/dueDate appended to bottom left of div
-Title at top. Description is below on another row.
*/
const project = (() => {

    let projectContainer = document.getElementById('projectContainer');

    let create = () => { 
       let projectDiv = document.createElement('div');
       projectDiv.className = 'projectDivs';

       let newTask = document.createElement('button');
       newTask.className = 'newTask';
       newTask.innerHTML = 'New Task';
       newTask.addEventListener('click', function(e){
            let parentNode = this.parentNode
            lists.create(parentNode)
       })
       
       projectDiv.appendChild(newTask)
       projectContainer.appendChild(projectDiv);
    
    };
    
    
    return {create}
})()

export { project }