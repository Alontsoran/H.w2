document.addEventListener('DOMContentLoaded', function () {
    var resumeButton = document.getElementById('RESUME');
    var resumeClicked = false;

    resumeButton.addEventListener('click', function () {
        if (!resumeClicked) {
            // Set the flag to prevent multiple clicks
            resumeClicked = true;

            // Create a hidden link
            var downloadLink = document.createElement('a');
            downloadLink.href = './Photos/קורות חיים 2024 .pdf';
            downloadLink.download = 'Resume.pdf';

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger a click on the link
            downloadLink.click();

            // Remove the link from the DOM
            document.body.removeChild(downloadLink);
        }
    });
});
