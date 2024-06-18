// JS-1

let projects = [];

function createProject(projectName, projectStartDate, projectDueDate, projectPriority, projectNotes) {
    return {
        projectName: projectName,
        projectStartDate: projectStartDate,
        projectDueDate: projectDueDate,
        projectPriority: projectPriority,
        projectNotes: projectNotes,
        tasks: []
    };
}

const newProjectBtn = document.getElementById('new-project');
const contentArea = document.getElementById('content-area');

// formProject.js below here

function newProjectHandler() {
    console.log('you pressed my button');
    contentArea.innerHTML = `
         <form id="project-form" class="card">
            <div>
                <label for="project-name">Project Name:</label>
                <input type="text" id="project-name" name="project-name" required>
            </div>
            <div>
                <label for="project-start-date">Project Start Date:</label>
                <input type="date" id="project-start-date" name="project-start-date" required>
            </div>
            <div>
                <label for="project-due-date">Project Due Date:</label>
                <input type="date" id="project-due-date" name="project-due-date" required>
            </div>
            <div>
                <label for="project-priority">Priority:</label>
                <select id="project-priority" name="priority" required>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div>
                <label for="project-notes">Notes:</label>
                <textarea id="project-notes" name="notes" rows="4" cols="50"></textarea>
            </div>
            <button type="submit">Submit</button>
            <button type="button" id="cancel-button">Cancel</button>
        </form>
    `;
    document.getElementById('project-form').addEventListener('submit', formSubmitHandler);
    document.getElementById('cancel-button').addEventListener('click', formCancelHandler);
};

function formSubmitHandler(event) {
    event.preventDefault();

    const projectName = document.getElementById('project-name').value;
    const projectStartDate = document.getElementById('project-start-date').value;
    const projectDueDate = document.getElementById('project-due-date').value;
    const projectPriority = document.getElementById('project-priority').value;
    const projectNotes = document.getElementById('project-notes').value;

    const newProject = createProject(projectName, projectStartDate, projectDueDate, projectPriority, projectNotes);
    projects.push(newProject);
    console.log(projects);
    displayProjects();
}

function formCancelHandler() {
    contentArea.innerHTML = '<h2>Your Project will post here!</h2>';
}

function displayProjects() {
    contentArea.innerHTML = '<h2>Projects</h2>';
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        projectCard.innerHTML = `
            <h3>${project.projectName}</h3>
            <p><strong>Start Date:</strong> ${project.projectStartDate}</p>
            <p><strong>Due Date:</strong> ${project.projectDueDate}</p>
            <p><strong>Priority:</strong> ${project.projectPriority}</p>
            <p><strong>Notes:</strong> ${project.projectNotes}</p>
        `;
        contentArea.appendChild(projectCard);
    });
}

newProjectBtn.addEventListener('click', newProjectHandler);
