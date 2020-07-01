import { projectFactory } from './modules/Projects'
import {todoLists} from './modules/Todolists'
/*
Needs:
-Let people move TodoLists between projects.
-
-
*/

let newProject = document.getElementById('newProject')
newProject.addEventListener('click', function(e){
    projectFactory()

});

let newTask = document.getElementById('newTask')
newTask.addEventListener('click', function(e){

})

function displayForm(){
    
}