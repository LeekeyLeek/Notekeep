import {lists} from './Todolists';
/*
Features still needed:
-Delete/complete Tasks

-Function that deletes this.projectDiv or this.todoList. Removes/deletes child element possibly.

-Function that marks a task as complete with a checkmark. 
    -Can use a simple checkbox that greys out the task when it's "true" and lights up when "false"
 */


const project = (() => {

    let projectContainer = document.getElementById('projectContainer');

    let deleteProj = () => {
        
    };

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

       
       let projectTitle = document.createElement('textarea')
       projectTitle.className = 'projectTitles';
       projectTitle.maxLength = '25';
       projectTitle.rows = '1';
       projectTitle.cols = '25';
       projectTitle.placeholder = ' Project Title... ';

       let br = document.createElement('br')

       projectDiv.appendChild(projectTitle)
       projectDiv.appendChild(br)
       projectDiv.appendChild(newTask)
       projectContainer.appendChild(projectDiv);
    };
        
    return {create}
})()

export { project }