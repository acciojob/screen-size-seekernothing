//your JS code here. If required.
// Create the required elements
const sizeInfoDiv = document.createElement('div');
sizeInfoDiv.id = 'sizeInfo';
const sizeHeading = document.createElement('h1');
sizeInfoDiv.appendChild(sizeHeading);
document.body.appendChild(sizeInfoDiv);

// Function to update the displayed window size
function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sizeHeading.textContent = `Width: ${width} and Height: ${height}`;
}

// Initial update to display size when the page loads
updateWindowSize();

// Add event listener for window resize
window.addEventListener('resize', updateWindowSize);