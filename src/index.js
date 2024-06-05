import _ from 'lodash';

console.log('This works');

(function (){
    function navBar(){
        const navContainer = document.createElement('div');
        navContainer.id = 'nav-container';
        document.body.appendChild(navContainer);

        const newProject = document.createElement('button');
        newProject.textContent = 'New Project';
        newProject.id = 'newProject';
        navContainer.appendChild(newProject);

        const addTask = document.createElement('button');
        addTask.textContent = 'Add Task';
        addTask.id = 'addTask';
        navContainer.appendChild(addTask);

    }

    function content(){
        const contentContainer = document.createElement('div');
        contentContainer.id = 'contentContainer';
        document.body.appendChild(contentContainer);

        const contentTitle = document.createElement('h1');
        contentTitle.textContent = 'ToDo List';
        contentContainer.appendChild(contentTitle);
    }
    navBar();
    content();


})();