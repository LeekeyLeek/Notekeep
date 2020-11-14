import {lists} from './Todolists';

const project = (() => {

    let projectContainer = document.getElementById('projectContainer');

    let randomRGBA = () => {
        let min = 1
        let max = 8
        let answer = Math.floor(Math.random() * (max - min) + min)

        switch(answer){
            case 1:
                return 'rgb(107, 62, 62)'
            case 2:
                return 'rgb(62, 97, 107)'
            case 3:
                return 'rgb(83, 62, 107)'
            case 4:
                return 'rgb(107, 62, 62)'
            case 5:
                return 'rgb(62, 107, 70)'
            case 6:
                return 'rgb(107, 91, 62)'
            case 7:
                return 'rgb(107, 62, 103)'
            default:
                return 'rgb(146, 125, 6)'
        }
    };

    let deleteProj = (parentNode) => {
        parentNode.remove()
    };

    let create = () => { 
       let projectDiv = document.createElement('div');
       projectDiv.className = 'projectDivs';
       projectDiv.style.backgroundColor = randomRGBA();

       let newTask = document.createElement('button');
       newTask.className = 'newTask';
       newTask.innerHTML = 'New Task';
       newTask.addEventListener('click', function(e){
            let parentNode = this.parentNode
            switch(parentNode.childElementCount){
                case 7:
                    break
                default:
                    lists.create(parentNode)
                    break
            }
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
       projectDiv.appendChild(br)
       projectDiv.appendChild(newTask)
       projectDiv.appendChild(deleteBtn)
       projectContainer.appendChild(projectDiv);
    };
        
    return {create, deleteProj}
})()

export { project }