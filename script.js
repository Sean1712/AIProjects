document.addEventListener('DOMContentLoaded', () => {
    const filter = document.getElementById('project-filter');
    const projectsContainer = document.getElementById('projects-container');
    const projects = projectsContainer.getElementsByClassName('project-status');

    filter.addEventListener('change', () => {
        const selectedProject = filter.value;
        for (let project of projects) {
            if (selectedProject === 'all' || project.getAttribute('data-project') === selectedProject) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    });
});
