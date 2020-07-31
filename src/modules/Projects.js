import {todoLists} from './Todolists'

/*
//This will contain Todolists.js and will be used to have seperate lists of Todos. 
Needs:
-Project objects should be able to contain multiple todoLists
-Create todoLists (function) to specific project object. Each project needs local todoLists.
-
*/
const project = (() => {

    let projectContainer = document.getElementById('projectContainer');

    let create = () => { 
       let projectDiv = document.createElement('div');
       projectDiv.innerHTML = 'childDiv test'
       projectDiv.className = 'projectDivs';
       projectContainer.appendChild(projectDiv);
        
    }
    
    
    



    return {create}
})()

export { project }