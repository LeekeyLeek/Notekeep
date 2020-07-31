import { project } from './modules/Projects';
import {todoLists} from './modules/Todolists';
import './style.css';
/*
Needs:
-Let people move TodoLists between projects.
-
-
*/

let newProject = document.getElementById('newProject')
newProject.addEventListener('click', function(e){
    project.create()

});

let newTask = document.getElementById('newTask')
newTask.addEventListener('click', function(e){

})

function displayForm(){
    
}