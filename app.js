// JS-1

let projects = [];

function createProject(name, dueDate, priority){
    return {
        projectName: name,
        projectDueDate: dueDate,
        projectPriority: priority,
        tasks: []
    };
}

let newProject = createProject('Lawn Maintenance', '09/08/24', 'high');
projects.push(newProject);

console.log(projects);

// Break Elements.js below here

const newProjectBtn = document.getElementById('new-project');
const contentArea = document.getElementById('content-area');

// formProject.js below here

function newProjectHandler() {
    console.log('you pressed my button');
    contentArea.innerHTML = `
        <form id="project-form">
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
                <label for="priority">Priority:</label>
                <select id="priority" name="priority" required>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div>
                <label for="notes">Notes:</label>
                <textarea id="notes" name="notes" rows="4" cols="50"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    `;
}

newProjectBtn.addEventListener('click', newProjectHandler);
