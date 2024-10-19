// Load the review count from localStorage
let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);

// Display the review count on the page
document.getElementById('reviewCount').textContent = reviewCount;
 