import {lists} from './Todolists';
/*
Steps:
-Add textarea titles to all projects created
-Add textarea titles and descriptions to all lists/tasks.
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
       
       let projectTitle = document.createElement('textarea')
       projectTitle.className = 'projectTitles';
       projectTitle.maxLength = '25';
       projectTitle.rows = '1';
       projectTitle.cols = '25';
       projectTitle.innerHTML = ' Project Title... ';
       
       let br = document.createElement('br')

       projectDiv.appendChild(projectTitle)
       projectDiv.appendChild(br)
       projectDiv.appendChild(newTask)
       projectContainer.appendChild(projectDiv);
    };
        
    return {create}
})()

export { project }