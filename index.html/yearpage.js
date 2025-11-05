document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('selectorHeader');
    const list = document.getElementById('socialList');
    const icon = header.querySelector('.dropdown-icon');

    // Initial state: hide the list, as seen in the image (the list is open, but we implement toggle)
    // To match the image exactly (where the list is open), we'll apply the 'open' class on load:
    list.classList.add('open');
    header.classList.add('active'); // Optional: rotate icon on load

    // Toggle functionality
    header.addEventListener('click', function() {
        list.classList.toggle('open');
        header.classList.toggle('active'); // Toggles icon rotation
    });

    // Handle selection of an item (optional: logs selection and closes the dropdown)
    const items = document.querySelectorAll('.social-item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'selected' class from all, add to the clicked one
            items.forEach(i => i.classList.remove('selected', 'highlighted'));
            item.classList.add('selected');

            // Optional: Update the header text and close the dropdown
            const selectedText = item.textContent.trim();
            header.querySelector('span').textContent = selectedText;

            // Close the list after selection
            list.classList.remove('open');
            header.classList.remove('active');
            
            console.log(Selected: ${selectedText});
        });
    });
});