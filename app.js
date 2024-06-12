console.log('hello')
let projects = [];


function createProject(name, dueDate, priority){
    return{
        projectName: name,
        projectDueDate: dueDate,
        projectPriority: priority,
        tasks: []
    };
}

let newProject = createProject('Lawn Maintenance', '09/08/24', 'high');
projects.push(newProject);

console.log(projects);