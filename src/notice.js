document.addEventListener('DOMContentLoaded', function() {
    const newDivs = document.getElementsByClassName('post');
    const links = document.querySelectorAll('.content .notice');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const index = parseInt(this.getAttribute('data-index'));
            document.querySelector('.content').style.display = 'none';
            Array.from(newDivs).forEach(div => div.style.display = 'none'); // Hide all posts
            newDivs[index].style.display = 'inline-block'; // Show the selected post
        });
    });
});
