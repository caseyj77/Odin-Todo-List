import _ from 'lodash';
import { setupProjectButton } from './project';

console.log('This works');
// Loads the basic layout of the page with an IIFE
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
        contentTitle.textContent = 'Your Projects';
        contentContainer.appendChild(contentTitle);

        const contentArea = document.createElement('div');
        contentArea.id = 'contentArea';
        contentContainer.appendChild(contentArea);

        const contentTask = document.createElement('p');
        contentTask.textContent = 'Projects will end up here';
        contentArea.appendChild(contentTask);
    }
    navBar();
    content();
    setupProjectButton();


})();

