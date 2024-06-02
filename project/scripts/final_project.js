// This script ensures all images within zoom-container class will zoom on hover
document.addEventListener('DOMContentLoaded', function() {
    const zoomContainers = document.querySelectorAll('.zoom-container');

    zoomContainers.forEach(container => {
        const img = container.querySelector('img');
        if (img) {
            container.addEventListener('mouseover', () => {
                img.style.transform = 'scale(1.2)';
            });

            container.addEventListener('mouseout', () => {
                img.style.transform = 'scale(1)';
            });
        }
    });

    // Conditional branching for changing the header image based on the time of day
    const headerImg = document.getElementById('header-img');
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 18) {
        // Daytime
        headerImg.src = 'images/bonsai.jpg';
        headerImg.alt = 'Daytime Image';
    } else {
        // Evening
        headerImg.src = 'images/lantern_walk.jpg';
        headerImg.alt = 'Evening Image';
    }
});

// Save info ina cvs file
function saveToCSV() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;

    const data = [
        ["First Name", "Last Name", "Phone", "Email", "Comments"],
        [firstName, lastName, phone, email, comments]
    ];

    let csvContent = "data:text/csv;charset=utf-8,";

    data.forEach(row => {
        let rowString = row.join(",");
        csvContent += rowString + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "applicant_information.csv");
    document.body.appendChild(link);

    link.click();
}
