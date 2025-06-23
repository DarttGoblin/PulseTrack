const memories_container = document.querySelector('.memories-container');

// const credits = document.createElement('span');
// credits.textContent = 'Ilyas and Yahya';
// credits.classList.add('credits');
// credits.onclick = function() {
//     window.open('https://www.linkedin.com/in/ilyass-otmani-b947a723b/', '_blank');
//     window.open('https://www.linkedin.com/in/yahya-saoud-206781264/', '_blank');
// }

const memories = [
    // {src: "", title: "", description: ""},
];

memories.forEach(memory => {
    const memory_container = document.createElement('div');
    const memory_image = document.createElement('img');
    const memory_video = document.createElement('video');
    const memory_title = document.createElement('span');
    const memory_heart = document.createElement('i');
    const memory_description = document.createElement('span');

    memory_title.textContent = memory.title;
    memory_description.textContent = memory.description;

    memory_container.classList.add('memory-container');
    memory_title.classList.add('memory-title');
    memory_description.classList.add('memory-description');
    memory_heart.classList.add('memory-heart', 'fa-regular', 'fa-heart');
    
    if (memory.src.endsWith('.jpg')) {
        memory_image.src = memory.src;
        memory_image.classList.add('memory-image');
        memory_container.appendChild(memory_image);
    } 
    else if (memory.src.endsWith('.mp4')) {
        memory_video.src = memory.src;
        memory_video.autoplay = true;
        memory_video.loop = true;
        memory_video.muted = true;
        memory_video.classList.add('memory-video');
        memory_container.appendChild(memory_video);
    }

    // if (memory.hasCredits) {
    //     const ilyasCredits = document.createElement('span');
    //     ilyasCredits.textContent = 'Ilyas';
    //     ilyasCredits.classList.add('credits');
    //     ilyasCredits.onclick = function() {
    //         window.open('https://www.linkedin.com/in/ilyass-otmani-b947a723b/', '_blank');
    //     }
    
    //     const separator = document.createTextNode(' and ');
    
    //     const yahyaCredits = document.createElement('span');
    //     yahyaCredits.textContent = 'Yahya';
    //     yahyaCredits.classList.add('credits');
    //     yahyaCredits.onclick = function() {
    //         window.open('https://www.linkedin.com/in/yahya-saoud-206781264/', '_blank');
    //     }
    
    //     memory_description.appendChild(ilyasCredits);
    //     memory_description.appendChild(separator);
    //     memory_description.appendChild(yahyaCredits);
    // }

    memory_container.appendChild(memory_title);
    memory_container.appendChild(memory_description);
    memory_container.appendChild(memory_heart);
    memories_container.appendChild(memory_container);

    memory_image.onclick = function() {
        const dark_background = document.createElement('div');
        const zoomed_image_container = document.createElement('div');
        const zoomed_image = document.createElement('img');
        const close = document.createElement('i');

        zoomed_image.src = memory_image.src;

        zoomed_image_container.appendChild(zoomed_image);
        zoomed_image_container.appendChild(close);
        dark_background.appendChild(zoomed_image_container);
        document.body.appendChild(dark_background);

        dark_background.classList.add('dark-background');
        zoomed_image_container.classList.add('zoomed-image-container');
        zoomed_image.classList.add('zoomed-image');
        close.classList.add('close-icon', 'fa', 'fa-times');
         
        close.onclick = dark_background.onclick = () => {
            document.body.removeChild(dark_background);
        };
    }

    memory_heart.onclick = function() {
        memory_heart.classList.toggle('fa-regular');
        memory_heart.classList.toggle('fa-solid');
    };
});