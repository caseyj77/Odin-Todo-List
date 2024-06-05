export function setupProjectButton() {
    const newProjectButton = document.getElementById('newProject');
    if (newProjectButton) {
        newProjectButton.addEventListener('click', createProject);
    } else {
        console.error('New Project button not found!');
    }
}

function createProject() {
    console.log('Creating new project...');

    const contentArea = document.getElementById('contentArea');
    contentArea.textContent =''; // clears the content area when the New Project Button is clicked

    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm'; // Creates a form with the below inputs and appends the form into 

    const projectNameInput = document.createElement('input');
    projectNameInput.type = 'text';
    projectNameInput.id = 'projectName';
    projectNameInput.placeholder = 'Enter project name';

    const projectDueInput = document.createElement('input');
    projectDueInput.type = 'date';
    projectDueInput.id = 'projectDueDate';
    projectDueInput.placeholder = 'Select Due Date';

    const projectPriInput = document.createElement('input');
    projectPriInput.type = 'text';
    projectPriInput.id = 'projectPri';
    projectPriInput.placeholder = 'Select Your Priority Level';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submitButton';
    submitButton.textContent = 'Create Project';

    contentArea.appendChild(projectForm);
    projectForm.appendChild(projectNameInput);
    projectForm.appendChild(projectPriInput);
    projectForm.appendChild(projectDueInput);
    projectForm.appendChild(submitButton);


}

// a factory function to create project objects
function createProjectObject(name, dueDate, priority){
    return {
        name,
        dueDate,
        priority,
        tasks: [],
        addTask(task) {
            this.tasks.push(task);
        }
    };
}

