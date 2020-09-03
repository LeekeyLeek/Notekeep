import {lists} from './Todolists';

const project = (() => {

    let projectContainer = document.getElementById('projectContainer');

    // 
    let random_rgba = () => {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }

    let deleteProj = (parentNode) => {
        parentNode.remove()
    };

    let create = () => { 
       let projectDiv = document.createElement('div');
       projectDiv.className = 'projectDivs';
       // projectDiv.style.backgroundColor = random_rgba();

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

       let deleteBtn = document.createElement('button')
       deleteBtn.className = 'dltProj';
       deleteBtn.innerHTML = 'Delete Project'
       deleteBtn.addEventListener('click', function(e) {
           let parentNode = this.parentNode
           project.deleteProj(parentNode)
       })

       let br = document.createElement('br')

       projectDiv.appendChild(projectTitle)
       projectDiv.appendChild(deleteBtn)
       projectDiv.appendChild(br)
       projectDiv.appendChild(newTask)
       projectContainer.appendChild(projectDiv);
    };
        
    return {create, deleteProj}
})()

export { project }