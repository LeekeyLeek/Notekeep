import {project} from './modules/Projects';
import {lists} from './modules/Todolists';
import './style.css';

const newProjectBtn = document.getElementById('newProject')
newProjectBtn.addEventListener('click', function(e){
    project.create()
});

const defaultTaskBtn = document.getElementById('defaultTask')
defaultTaskBtn.addEventListener('click', function(e){
    let parentNode = this.parentNode
    lists.create(parentNode)
});

const defaultDlt = document.getElementById('defaultDlt')
defaultDlt.addEventListener('click', function(e) {
    let parentNode = this.parentNode
    project.deleteProj(parentNode)
});