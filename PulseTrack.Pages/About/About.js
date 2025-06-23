const next_projects_container = document.querySelector('.next-projects-container');
const about_explore_button = document.querySelector('.about-explore-button');
const about_paper_button = document.querySelector('.about-paper-button');

const images = [
    'About.Media/drone.jpg',
    'About.Media/smart_house.jpg',
    'About.Media/mini_robot.jpg',
    'About.Media/smart_glasses.jpg',
    'About.Media/ball_balancing_robot.jpg',
    'About.Media/water_plant_system.jpg',
    'About.Media/bug_killer.jpg',
    'About.Media/smart_trashbin.jpg',
    'About.Media/lightbulb_clap_switch.jpg',
    'About.Media/car_parking_system.jpg',
];

const titles = [
    'Drone',
    'Smart House',
    'Mini Robot',
    'Smart Glasses',
    'Ball Balancing Robot',
    'Water Plant System',
    'Bug Killer',
    'Smart Trashbin',
    'Lightbulb Clap Switch',
    'Car Parking System',
];

const descriptions = [
    'A versatile drone designed for autonomous navigation and surveillance in challenging environments.',
    'Smart House implementing IOT concept by creating a plant care, security, motion detection, light, door, window, fan control, weather monitoring systems',
    'A mini robot capable of performing precise tasks using advanced robotics and control systems.',
    'Smart glasses equipped with AR capabilities for enhanced productivity and entertainment.',
    'The Ball Balancing Robot uses a Raspberry Pi and robotic arms to stabilize a ball on a glass surface with real-time motion control.',
    'An automated water plant system ensuring efficient irrigation for sustainable agriculture.',
    'A bug killer system using advanced pest control techniques to maintain a hygienic environment.',
    'A smart trashbin that segregates waste intelligently and promotes sustainable waste management. Interface for garbage collectors showing location of available bins, full ones. Provide rewards in exchange',
    'A lightbulb clap switch system for convenient hands-free control of lighting.',
    'An automated car parking system streamlining parking management with precision and efficiency.',
];


images.forEach((src, index) => {
    const project_container = document.createElement('div');
    const project_text_container = document.createElement('div');
    const project_image = document.createElement('img');
    const project_title = document.createElement('span');
    const project_description = document.createElement('span');
    const project_button = document.createElement('button');
    const project_thumbsup = document.createElement('i');

    project_image.src = src;
    project_title.textContent = titles[index];
    project_description.textContent = descriptions[index];
    project_button.textContent = 'Learn More';

    project_container.classList.add('project-container');
    project_text_container.classList.add('project-text-container');
    project_image.classList.add('project-image');
    project_title.classList.add('project-title');
    project_description.classList.add('project-description');
    project_button.classList.add('project-button');
    project_thumbsup.classList.add('project-thumbsup', 'fa-regular', 'fa-thumbs-up');

    project_text_container.appendChild(project_title);
    project_text_container.appendChild(project_description);
    project_text_container.appendChild(project_button);
    project_text_container.appendChild(project_thumbsup);
    project_container.appendChild(project_image);
    project_container.appendChild(project_text_container);
    next_projects_container.appendChild(project_container);

    project_thumbsup.onclick = function() {
        project_thumbsup.classList.toggle('fa-regular');
        project_thumbsup.classList.toggle('fa-solid');
    };
});

about_explore_button.onclick = function() {
    window.location.href = '../Home/Home.html';
}

about_paper_button.onclick = function() {
    alert('Not available now, soon!');
}
