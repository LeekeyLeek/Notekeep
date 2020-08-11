import { project } from './modules/Projects';
import {lists} from './modules/Todolists';
import './style.css';


function displayForm(){
    
}

let newProjectBtn = document.getElementById('newProject')
newProjectBtn.addEventListener('click', function(e){
    project.create()
    

});

// List only updates once
const projectList = document.getElementsByClassName('projectDivs')
console.log(projectList)
const listItems = projectList.getElementsByClassName('newTask')

listItems.forEach(function(button){
    button.addEventListener('click', function(e){
        let parentNode = button.parentNode 
        lists.create(parentNode)
    })

});
