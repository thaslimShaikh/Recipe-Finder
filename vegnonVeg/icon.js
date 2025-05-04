        const icons = document.querySelectorAll('.icon-container i');

        icons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                icon.style.color = '#007bff'; /* change the icon color on hover */
            });

            icon.addEventListener('mouseout', () => {
                icon.style.color = '#333'; /* reset the icon color on mouseout */
            });
        });